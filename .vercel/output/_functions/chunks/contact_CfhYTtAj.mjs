import nodemailer from 'nodemailer';

const POST = async ({ request, redirect }) => {
  const data = await request.formData();
  const name = data.get("name");
  const email = data.get("email");
  const subject = data.get("subject");
  const message = data.get("message");
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "test@ethereal.email",
      pass: "testpass"
    }
  });
  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "contact@decoshop-toulouse.fr",
      subject: `Nouveau message: ${subject}`,
      text: message
    });
    return redirect("/contact?success=true");
  } catch (error) {
    return redirect("/contact?error=true");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
