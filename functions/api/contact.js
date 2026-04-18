// Cloudflare Pages Function — POST /api/contact
// Accepts a JSON contact-form submission and returns JSON.
// Deployed automatically by Cloudflare Pages from /functions/ at the repo root.

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const { name, email, company, message } = body ?? {};

    if (!name || !email || !message) {
      return json({ error: "Missing required fields: name, email, message" }, 400);
    }

    // ─────────────────────────────────────────────────────────────
    // TODO: Email service integration goes here.
    //
    // Recommended: Resend (https://resend.com)
    //   const res = await fetch("https://api.resend.com/emails", {
    //     method: "POST",
    //     headers: {
    //       "Authorization": `Bearer ${context.env.RESEND_API_KEY}`,
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       from: "SYSCOM Website <noreply@syscom.com>",
    //       to: "sales@syscom.com",
    //       reply_to: email,
    //       subject: `Contact form: ${name}${company ? ` (${company})` : ""}`,
    //       text: message,
    //     }),
    //   });
    //
    // Alternatives: SendGrid, Mailgun, Postmark, AWS SES.
    //
    // Store the API key as a Pages secret:
    //   wrangler pages secret put RESEND_API_KEY
    // or in the Cloudflare dashboard under Settings → Environment variables.
    // ─────────────────────────────────────────────────────────────

    return json({ ok: true, received: { name, email, company: company ?? null } }, 200);
  } catch (err) {
    return json({ error: "Invalid JSON body" }, 400);
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
}

export async function onRequest() {
  return new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST, OPTIONS" } });
}

function json(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}
