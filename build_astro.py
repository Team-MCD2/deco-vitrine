import os
import re

with open("../build_pages.py", "r", encoding="utf-8") as f:
    old_script = f.read()

# Extract sections
def extract_section(var_name):
    match = re.search(f'{var_name} = \"\"\"(.*?)\"\"\"', old_script, re.DOTALL)
    if match:
        return match.group(1)
    return ""

hero = extract_section("hero_section")
concept = extract_section("concept_section")
collections = extract_section("collections_section")
tiktok = extract_section("tiktok_section")
contact = extract_section("contact_section")

# Read contact.html to get header/footer
with open("../contact.html", "r", encoding="utf-8") as f:
    html = f.read()

head = html.split("</head>")[0] + "</head>"
header = re.search(r"<header>.*?</header>", html, re.DOTALL).group(0)
header = header.replace('href="#"', 'href="/"').replace('.html', '')
footer = re.search(r"<footer>.*?</footer>", html, re.DOTALL).group(0)
footer = footer.replace('href="#"', 'href="/"').replace('.html', '')

# Make links in contact section point to API
contact = contact.replace('action="#"', 'action="/api/contact"')

layout_content = f"""---
---
<!DOCTYPE html>
<html lang="fr">
{head.split('<head>')[1]}
<body>
{header}
<main>
    <slot />
</main>
{footer}
<script is:inline src="/script.js"></script>
</body>
</html>
"""

layout_content = layout_content.replace('<link rel="stylesheet" href="styles.css">', '<link rel="stylesheet" href="/styles.css">')

os.makedirs("src/layouts", exist_ok=True)
with open("src/layouts/Layout.astro", "w", encoding="utf-8") as f:
    f.write(layout_content)

def write_astro_page(name, content):
    with open(f"src/pages/{name}.astro", "w", encoding="utf-8") as f:
        f.write("---\nimport Layout from '../layouts/Layout.astro';\n---\n<Layout>\n" + content + "\n</Layout>")

write_astro_page("index", hero + concept + collections + tiktok + contact)
write_astro_page("concept", concept)
write_astro_page("collections", collections)
write_astro_page("tiktok", tiktok)
write_astro_page("contact", contact)

# API Endpoint
api_dir = "src/pages/api"
os.makedirs(api_dir, exist_ok=True)
api_content = """import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

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
"""
with open(f"{api_dir}/contact.ts", "w", encoding="utf-8") as f:
    f.write(api_content)

# Update Form inputs to have name attributes
contact_page = "src/pages/contact.astro"
with open(contact_page, "r", encoding="utf-8") as f:
    c = f.read()
c = c.replace('placeholder="Votre Nom / Société" required', 'name="name" placeholder="Votre Nom / Société" required')
c = c.replace('placeholder="Votre Email" required', 'name="email" placeholder="Votre Email" required')
c = c.replace('placeholder="Sujet (Devis, Renseignement...)" required', 'name="subject" placeholder="Sujet (Devis, Renseignement...)" required')
c = c.replace('placeholder="Votre Message"', 'name="message" placeholder="Votre Message"')
with open(contact_page, "w", encoding="utf-8") as f:
    f.write(c)

index_page = "src/pages/index.astro"
with open(index_page, "r", encoding="utf-8") as f:
    i = f.read()
i = i.replace('placeholder="Votre Nom / Société" required', 'name="name" placeholder="Votre Nom / Société" required')
i = i.replace('placeholder="Votre Email" required', 'name="email" placeholder="Votre Email" required')
i = i.replace('placeholder="Sujet (Devis, Renseignement...)" required', 'name="subject" placeholder="Sujet (Devis, Renseignement...)" required')
i = i.replace('placeholder="Votre Message"', 'name="message" placeholder="Votre Message"')
with open(index_page, "w", encoding="utf-8") as f:
    f.write(i)

print("Astro pages constructed successfully.")
