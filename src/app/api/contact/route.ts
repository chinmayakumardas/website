

import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  try {
    const { name, phone, email, message } = await request.json();

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: "Name, email and message are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",   // Change this to your verified domain later
      to: "chinmayakumardas2000@gmail.com",                        // ← Change to your real email
      subject: `New Contact Form: ${name}`,
      replyTo: email,


      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style="
margin:0;
padding:0;
background:#f3f4f6;
font-family:Arial, Helvetica, sans-serif;
">

<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:40px 20px;">

<table width="600" cellpadding="0" cellspacing="0" style="
background:#ffffff;
border-radius:12px;
overflow:hidden;
box-shadow:0 5px 25px rgba(0,0,0,0.08);
">


<!-- Top Brand Header -->
<tr>
<td style="
background:#171717;
padding:28px 35px;
">

<h1 style="
margin:0;
font-size:28px;
font-weight:800;
letter-spacing:-1px;
color:#ffffff;
text-transform:uppercase;
">
CHINMAYA KUMAR
</h1>

<p style="
margin:8px 0 0;
color:#9ca3af;
font-size:12px;
letter-spacing:3px;
text-transform:uppercase;
">
Portfolio Contact Notification
</p>

</td>
</tr>



<!-- Green Accent -->
<tr>
<td style="
height:5px;
background:#3b873e;
">
</td>
</tr>



<!-- Content -->
<tr>
<td style="
padding:35px;
">


<h2 style="
margin:0 0 25px;
font-size:22px;
color:#171717;
">
New Contact Request Received
</h2>



<p style="
font-size:15px;
color:#555;
margin-bottom:25px;
">
You have received a new message from your portfolio website.
</p>




<table width="100%" cellpadding="0" cellspacing="0">


<tr>
<td style="
padding:14px 0;
border-bottom:1px solid #eeeeee;
">

<strong style="color:#777;font-size:12px;letter-spacing:2px;">
NAME
</strong>

<br>

<span style="
font-size:17px;
color:#171717;
">
${name}
</span>

</td>
</tr>



<tr>
<td style="
padding:14px 0;
border-bottom:1px solid #eeeeee;
">

<strong style="color:#777;font-size:12px;letter-spacing:2px;">
EMAIL
</strong>

<br>

<a href="mailto:${email}" 
style="
color:#3b873e;
font-size:17px;
text-decoration:none;
">
${email}
</a>

</td>
</tr>



${
phone
?
`
<tr>
<td style="
padding:14px 0;
border-bottom:1px solid #eeeeee;
">

<strong style="color:#777;font-size:12px;letter-spacing:2px;">
PHONE
</strong>

<br>

<span style="
font-size:17px;
color:#171717;
">
${phone}
</span>

</td>
</tr>
`
:
""
}



<tr>
<td style="
padding:20px 0 0;
">

<strong style="
color:#777;
font-size:12px;
letter-spacing:2px;
">
MESSAGE
</strong>


<div style="
margin-top:12px;
background:#f7f8f7;
border-left:4px solid #3b873e;
padding:18px;
border-radius:8px;
font-size:16px;
line-height:1.6;
color:#333;
">

${message.replace(/\n/g,"<br>")}

</div>


</td>
</tr>


</table>


</td>
</tr>




<!-- Footer -->

<tr>
<td style="
background:#171717;
padding:22px;
text-align:center;
">


<p style="
margin:0;
color:#ffffff;
font-size:13px;
letter-spacing:3px;
text-transform:uppercase;
">
LET'S COLLABORATE
</p>


<p style="
margin:10px 0 0;
color:#999;
font-size:12px;
">
Design • Development • Creative Solutions
</p>


</td>
</tr>


</table>

</td>
</tr>
</table>


</body>
</html>
`
    });

    return NextResponse.json({
      success: true,
      message: "Email sent successfully.",
    });
  } catch (error) {
    // Keep minimal logging (you can remove this line later if you want zero logs)
    console.error("Resend error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
      },
      { status: 500 }
    );
  }
}