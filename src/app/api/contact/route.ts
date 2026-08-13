import { NextRequest, NextResponse } from "next/server";

// To integrate with Resend:
// 1. npm install resend
// 2. Add RESEND_API_KEY to .env.local
// 3. Import: import { Resend } from 'resend';
// 4. const resend = new Resend(process.env.RESEND_API_KEY);
// 5. Use resend.emails.send({ from, to, subject, html }) below

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

    // Log for development (replace with Resend in production)
    console.log("New contact form submission:", {
      name,
      email,
      phone,
      company,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    // ---- Integrate Resend here ----
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Site Groupe Laporte <noreply@groupelaporte.ca>',
    //   to: ['info@groupelaporte.ca'],
    //   replyTo: email,
    //   subject: `Nouveau message de ${name} — ${service || 'Contact général'}`,
    //   html: `
    //     <h2>Nouveau message de contact</h2>
    //     <p><strong>Nom:</strong> ${name}</p>
    //     <p><strong>Courriel:</strong> ${email}</p>
    //     <p><strong>Téléphone:</strong> ${phone || 'Non fourni'}</p>
    //     <p><strong>Entreprise:</strong> ${company || 'Non fourni'}</p>
    //     <p><strong>Service:</strong> ${service || 'Non spécifié'}</p>
    //     <hr />
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `,
    // });

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
