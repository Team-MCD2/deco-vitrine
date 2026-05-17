import glob

astro_files = glob.glob("src/pages/*.astro")
for file in astro_files:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Replace relative poster paths with absolute root paths
    content = content.replace('poster="images/', 'poster="/images/')
    
    with open(file, "w", encoding="utf-8") as f:
        f.write(content)

print("Astro poster image routes fixed.")
