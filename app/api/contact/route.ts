import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const company = String(body.company || "").trim();
    const projectType = String(body.projectType || "").trim();
    const budget = String(body.budget || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeCompany = escapeHtml(company);
    const safeProjectType = escapeHtml(projectType);
    const safeBudget = escapeHtml(budget);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const { data, error } = await resend.emails.send({
      /*
       * TESTING:
       * onboarding@resend.dev can be used while setting things up.
       *
       * PRODUCTION:
       * After softwayhub.com is verified inside Resend,
       * change this to something like:
       *
       * SoftwayHub Website <website@softwayhub.com>
       */
      from: "SoftwayHub Website <onboarding@resend.dev>",

      to: ["info@softwayhub.com"],

      replyTo: email,

      subject: `New Project Inquiry — ${projectType} — ${name}`,

      html: `
        <div
          style="
            margin:0;
            padding:40px 20px;
            background:#f3f6fb;
            font-family:Arial,Helvetica,sans-serif;
            color:#15223a;
          "
        >
          <div
            style="
              max-width:680px;
              margin:0 auto;
              background:#ffffff;
              border:1px solid #e2e8f0;
              border-radius:18px;
              overflow:hidden;
            "
          >
            <div
              style="
                padding:28px 32px;
                background:#050b2c;
              "
            >
              <div
                style="
                  color:#39d8ff;
                  font-size:11px;
                  letter-spacing:2px;
                  margin-bottom:10px;
                "
              >
                SOFTWAYHUB / PROJECT INQUIRY
              </div>

              <h1
                style="
                  margin:0;
                  color:#ffffff;
                  font-size:26px;
                  line-height:1.3;
                "
              >
                New website inquiry received
              </h1>
            </div>

            <div style="padding:32px;">
              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                style="
                  border-collapse:collapse;
                  font-size:14px;
                "
              >
                <tr>
                  <td style="padding:10px 0;color:#64748b;width:150px;">
                    Name
                  </td>
                  <td style="padding:10px 0;font-weight:600;">
                    ${safeName}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#64748b;">
                    Email
                  </td>
                  <td style="padding:10px 0;">
                    ${safeEmail}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#64748b;">
                    Phone / WhatsApp
                  </td>
                  <td style="padding:10px 0;">
                    ${safePhone || "Not provided"}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#64748b;">
                    Company
                  </td>
                  <td style="padding:10px 0;">
                    ${safeCompany || "Not provided"}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#64748b;">
                    Project Type
                  </td>
                  <td style="padding:10px 0;font-weight:600;">
                    ${safeProjectType}
                  </td>
                </tr>

                <tr>
                  <td style="padding:10px 0;color:#64748b;">
                    Budget
                  </td>
                  <td style="padding:10px 0;">
                    ${safeBudget || "Not specified"}
                  </td>
                </tr>
              </table>

              <div
                style="
                  margin-top:25px;
                  padding-top:25px;
                  border-top:1px solid #e2e8f0;
                "
              >
                <div
                  style="
                    margin-bottom:10px;
                    color:#64748b;
                    font-size:12px;
                    font-weight:600;
                    text-transform:uppercase;
                    letter-spacing:1px;
                  "
                >
                  Project Details
                </div>

                <div
                  style="
                    padding:18px;
                    background:#f8fafc;
                    border-radius:12px;
                    line-height:1.7;
                    font-size:14px;
                  "
                >
                  ${safeMessage}
                </div>
              </div>

              <div
                style="
                  margin-top:28px;
                  color:#94a3b8;
                  font-size:11px;
                  line-height:1.6;
                "
              >
                This inquiry was submitted through the SoftwayHub website.
                Reply directly to this email to respond to ${safeName}.
              </div>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your message.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}