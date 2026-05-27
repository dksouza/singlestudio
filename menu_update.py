import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add id="cta-section" to Final CTA
content = content.replace('<!-- Final CTA Section -->\n<section class="px-margin-mobile md:px-margin-desktop py-24 md:py-section-gap">', '<!-- Final CTA Section -->\n<section id="cta-section" class="px-margin-mobile md:px-margin-desktop py-24 md:py-section-gap">')

# 2. Update Nav "FALE CONOSCO" button
nav_btn_pattern = r'<button onclick="openModal\(\)" class="bg-primary text-on-primary font-label-caps px-6 py-2 tracking-widest hover:bg-white transition-colors">\s*FALE CONOSCO\s*</button>'
nav_btn_replacement = '<button onclick="document.getElementById(\\\'cta-section\\\').scrollIntoView({ behavior: \\\'smooth\\\' });" class="bg-primary text-on-primary font-label-caps px-6 py-2 tracking-widest hover:bg-white transition-colors">\n            FALE CONOSCO\n        </button>'
content = re.sub(nav_btn_pattern, nav_btn_replacement, content)

# 3. Update Nav Links
nav_links_pattern = r'(<div class="hidden md:flex items-center gap-8">)[\s\S]*?(</div>)'
new_nav_links = """\\1
<a class="text-primary font-bold border-b-2 border-primary pb-1 font-label-caps text-[12px] tracking-[0.2em] transition-all duration-300 ease-in-out" href="#">HOME</a>
<a class="text-on-surface/70 font-label-caps text-[12px] tracking-[0.2em] hover:text-primary transition-all duration-300 ease-in-out" href="#">QUEM SOMOS</a>
<a class="text-on-surface/70 font-label-caps text-[12px] tracking-[0.2em] hover:text-primary transition-all duration-300 ease-in-out" href="#">O QUE FAZEMOS</a>
\\2"""
content = re.sub(nav_links_pattern, new_nav_links, content)

# 4. Update Footer Links
footer_links_pattern = r'(<div class="flex gap-4 md:gap-8 flex-wrap justify-center">)[\s\S]*?(</div>)'
new_footer_links = """\\1
<a class="text-on-surface/40 font-label-caps text-[10px] tracking-[0.2em] hover:text-on-surface transition-colors" href="#">HOME</a>
<a class="text-on-surface/40 font-label-caps text-[10px] tracking-[0.2em] hover:text-on-surface transition-colors" href="#">QUEM SOMOS</a>
<a class="text-on-surface/40 font-label-caps text-[10px] tracking-[0.2em] hover:text-on-surface transition-colors" href="#">O QUE FAZEMOS</a>
\\2"""
content = re.sub(footer_links_pattern, new_footer_links, content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Menu and scroll functionality updated successfully!")
