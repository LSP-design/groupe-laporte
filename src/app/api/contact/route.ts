import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Les champs nom, courriel et message sont requis." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Adresse courriel invalide." },
        { status: 400 }
      );
    }

    if (!resend) {
      console.error(
        "RESEND_API_KEY manquante — le formulaire de contact ne peut pas envoyer de courriel."
      );
      return NextResponse.json(
        { error: "Le service d'envoi de courriel n'est pas configuré." },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ||
        "Site Groupe Laporte <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL || "info@groupelaporte.ca"],
      replyTo: email,
      subject: `Nouveau message de ${name} — ${service || "Contact général"}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
        <p><strong>Courriel:</strong> ${escapeHtml(email)}</p>
        <p><strong>Téléphone:</strong> ${escapeHtml(phone || "Non fourni")}</p>
        <p><strong>Entreprise:</strong> ${escapeHtml(company || "Non fourni")}</p>
        <p><strong>Service:</strong> ${escapeHtml(service || "Non spécifié")}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Une erreur interne s'est produite." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Votre message a été envoyé avec succès." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Une erreur interne s'est produite." },
      { status: 500 }
    );
  }
}
