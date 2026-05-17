import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

export const POST: APIRoute = async ({ request, redirect }) => {
  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const subject = data.get('subject');
  const message = data.get('message');

  // In a real app, use environment variables!
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "test@ethereal.email",
      pass: "testpass",
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "contact@decoshop-toulouse.fr",
      subject: `Nouveau message: ${subject}`,
      text: message as string,
    });
    // Redirect with success parameter
    return redirect('/contact?success=true');
  } catch (error) {
    return redirect('/contact?error=true');
  }
}
