import { NextResponse } from "next/server";
import OpenAI from "openai";
import nodemailer from "nodemailer";

type AnalyseResponse = {
  lecture: string;
  risque: string;
  levier: string;
  orientation: string;
  systia: boolean;
  arhi: boolean;
  unyko: boolean;
};

const fallback: AnalyseResponse = {
  lecture:
    "Votre diagnostic révèle une valeur réelle, mais encore insuffisamment lisible pour devenir immédiatement évidente.",
  risque:
    "Le principal risque est que votre organisation soit comprise par ceux qui vous connaissent déjà, mais pas assez vite par ceux qui vous découvrent.",
  levier:
    "La priorité est de rendre votre valeur plus identifiable, plus crédible et plus facilement transmissible.",
  orientation:
    "Ce diagnostic constitue un point de départ. SYSTIA permet ensuite de transformer cette lecture en décisions concrètes et en plan d’action adapté.",
  systia: true,
  arhi: false,
  unyko: true,
};

function asText(value: unknown, fallbackValue: string): string {
  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : fallbackValue;
}

function extractJson(content: string): AnalyseResponse {
  try {
    const cleaned = content
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleaned);

    return {
      lecture: asText(parsed.lecture, fallback.lecture),
      risque: asText(parsed.risque, fallback.risque),
      levier: asText(parsed.levier, fallback.levier),
      orientation: asText(parsed.orientation, fallback.orientation),
      systia: true,
      arhi: false,
      unyko: true,
    };
  } catch {
    return fallback;
  }
}

async function sendAdminNotification(body: unknown, analyse: AnalyseResponse) {
  try {
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS ||
      !process.env.SMTP_FROM ||
      !process.env.ADMIN_EMAIL
    ) {
      console.warn("Notification UNYKO non envoyée : variables SMTP manquantes.");
      return;
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: "Nouveau diagnostic UNYKO terminé",
      text: `
Un visiteur vient de terminer un diagnostic UNYKO.

ANALYSE GÉNÉRÉE

Lecture :
${analyse.lecture}

Risque :
${analyse.risque}

Levier :
${analyse.levier}

Orientation :
${analyse.orientation}

DONNÉES DU DIAGNOSTIC

${JSON.stringify(body, null, 2)}
      `,
    });
  } catch (error) {
    console.error("Erreur notification email UNYKO:", error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      await sendAdminNotification(body, fallback);
      return NextResponse.json(fallback);
    }

    const client = new OpenAI({ apiKey });

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.3,
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: `
Tu es l'analyste stratégique premium d'UNYKO.

UNYKO appartient à l'écosystème Arnaud Crestey.

Rôle d'UNYKO :
- révéler comment une organisation est perçue
- identifier les signaux de lisibilité, crédibilité, présence, autorité et recommandation
- produire une lecture claire, humaine et stratégique
- donner envie de transformer cette lecture en action

Rôle de SYSTIA :
- transformer le diagnostic en décisions concrètes
- clarifier l'activité, l'offre, le positionnement, la communication, l'organisation ou les leviers d'action
- servir de porte d'entrée vers l'accompagnement Arnaud Crestey

Règles d'écriture :
- Tu écris en français.
- Ton style est clair, premium, humain, stratégique.
- Tu n'es jamais culpabilisant.
- Tu ne dis jamais que l'organisation est mauvaise.
- Tu ne proposes pas plusieurs orientations.
- Tu orientes toujours vers SYSTIA comme suite logique.
- Tu ne mentionnes pas ARHI.
- Tu ne mentionnes pas QLYK Studio.
- Tu ne mentionnes pas Cabinet Astraé.
- Tu ne fais pas de promesse excessive.
- Tu restes court, sobre et utile.

Règle anti-redondance obligatoire :
Les champs "lecture", "risque" et "levier" doivent avoir trois rôles différents.

1. "lecture" explique l'état global observé.
2. "risque" explique la conséquence possible si rien ne change.
3. "levier" explique l'action prioritaire à engager.

Interdictions :
- Ne répète pas le nom du levier prioritaire dans les trois champs.
- Ne reformule pas trois fois la même faiblesse.
- Ne commence pas risque et levier par le même mot.
- Ne répète pas deux fois "autorité", "crédibilité", "lisibilité" ou "recommandabilité" dans la même réponse complète.
- N'utilise pas de tournures génériques comme "peut freiner la confiance des parties prenantes".
- N'utilise pas "sur son marché" sauf si le contexte le justifie clairement.

Tu dois répondre uniquement avec un JSON valide.
          `,
        },
        {
          role: "user",
          content: `
Voici les résultats du diagnostic UNYKO :

${JSON.stringify(body, null, 2)}

Réponds uniquement avec ce JSON exact :

{
  "lecture": "2 phrases maximum. Décris l'état global observé sans répéter simplement le score ou le levier prioritaire.",
  "risque": "1 phrase. Décris la conséquence concrète possible si rien ne change.",
  "levier": "1 phrase. Décris l'action prioritaire à engager, de manière distincte du risque.",
  "orientation": "2 phrases maximum. Explique que ce diagnostic est un point de départ et que SYSTIA permet de transformer cette lecture en décisions concrètes.",
  "systia": true,
  "arhi": false,
  "unyko": true
}
          `,
        },
      ],
    });

    const content = response.choices[0]?.message?.content ?? "";
    const analyse = extractJson(content);

    await sendAdminNotification(body, analyse);

    return NextResponse.json(analyse);
  } catch (error) {
    console.error("Erreur analyse UNYKO:", error);
    return NextResponse.json(fallback);
  }
}
