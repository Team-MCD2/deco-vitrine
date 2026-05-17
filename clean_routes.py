import os
import glob

astro_files = glob.glob("src/pages/*.astro")
for file in astro_files:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Replace old relative .html links with clean Astro root relative routes
    content = content.replace('href="collections.html"', 'href="/collections"')
    content = content.replace('href="contact.html"', 'href="/contact"')
    content = content.replace('href="tiktok.html"', 'href="/tiktok"')
    content = content.replace('href="concept.html"', 'href="/concept"')
    content = content.replace('href="index.html"', 'href="/"')
    
    # Also clean up standard hrefs without html extension
    content = content.replace('href="collections"', 'href="/collections"')
    content = content.replace('href="contact"', 'href="/contact"')
    content = content.replace('href="tiktok"', 'href="/tiktok"')
    content = content.replace('href="concept"', 'href="/concept"')
    content = content.replace('href="index"', 'href="/"')

    with open(file, "w", encoding="utf-8") as f:
        f.write(content)

print("Astro routes cleaned up successfully.")
