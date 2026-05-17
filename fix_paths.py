import os
import glob

# Fix src paths in all Astro pages
astro_files = glob.glob("src/pages/*.astro")
for file in astro_files:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    content = content.replace('src="videos/', 'src="/videos/')
    content = content.replace('src="images/', 'src="/images/')
    
    with open(file, "w", encoding="utf-8") as f:
        f.write(content)

# Update styles.css to make services-grid horizontal on mobile
css_path = "public/styles.css"
with open(css_path, "r", encoding="utf-8") as f:
    css = f.read()

# I will replace the services-grid standard styling to use flex and scroll snap for mobile
if "@media (max-width: 768px)" in css:
    responsive_css = """
    .services-grid {
        display: flex;
        gap: 1.5rem;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        padding-bottom: 2rem;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        grid-template-columns: none;
    }
    .services-grid::-webkit-scrollbar {
        display: none;
    }
    .service-card {
        flex: 0 0 80%;
        scroll-snap-align: center;
    }
    """
    css = css.replace(".faq-grid { grid-template-columns: 1fr; }", ".faq-grid { grid-template-columns: 1fr; }\n" + responsive_css)

with open(css_path, "w", encoding="utf-8") as f:
    f.write(css)

print("Fixed paths and updated CSS for horizontal mobile services.")
