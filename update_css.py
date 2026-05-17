with open("public/styles.css", "r", encoding="utf-8") as f:
    css = f.read()

# Replace the media query start to optimize header and hero
old_media = """@media (max-width: 768px) {
    .desktop-only { display: none !important; }
    .mobile-only { display: block; }
    .burger { display: block; }
    
    .nav-links {"""

# Let's make it work even if there are different line endings
css = css.replace(
    '.desktop-only { display: none !important; }\n    .mobile-only { display: block; }\n    .burger { display: block; }\n    \n    .nav-links {',
    '.desktop-only { display: none !important; }\n    .mobile-only { display: block; }\n    .burger { display: block; }\n    \n    header {\n        background: #0F172A !important;\n        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\n    }\n    \n    .hero {\n        background-attachment: scroll !important;\n        height: auto;\n        min-height: 500px;\n        padding: 6rem 1.5rem 4rem;\n    }\n    \n    .hero-content {\n        padding: 0;\n    }\n    \n    .hero-content h1 {\n        font-size: 2.2rem;\n        line-height: 1.2;\n    }\n    \n    .hero-content p {\n        font-size: 1.1rem;\n        margin-bottom: 1.5rem;\n    }\n    \n    .nav-links {'
)

# If it had CRLF
css = css.replace(
    '.desktop-only { display: none !important; }\r\n    .mobile-only { display: block; }\r\n    .burger { display: block; }\r\n    \r\n    .nav-links {',
    '.desktop-only { display: none !important; }\r\n    .mobile-only { display: block; }\r\n    .burger { display: block; }\r\n    \r\n    header {\r\n        background: #0F172A !important;\r\n        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);\r\n    }\r\n    \r\n    .hero {\r\n        background-attachment: scroll !important;\r\n        height: auto;\r\n        min-height: 500px;\r\n        padding: 6rem 1.5rem 4rem;\r\n    }\r\n    \r\n    .hero-content {\r\n        padding: 0;\r\n    }\r\n    \r\n    .hero-content h1 {\r\n        font-size: 2.2rem;\r\n        line-height: 1.2;\r\n    }\r\n    \r\n    .hero-content p {\r\n        font-size: 1.1rem;\r\n        margin-bottom: 1.5rem;\r\n    }\r\n    \r\n    .nav-links {'
)

# Fix background color on .nav-links to make it solid opaque
css = css.replace(
    'background-color: rgba(15, 23, 42, 0.98);',
    'background-color: #0F172A;\n        z-index: 999;'
)

with open("public/styles.css", "w", encoding="utf-8") as f:
    f.write(css)

print("Styles.css updated via Python.")
