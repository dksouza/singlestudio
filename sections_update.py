import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add floating animation CSS
css_animation = """
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
"""
content = content.replace('/* Animations */', css_animation + '\n        /* Animations */')

# 2. Update Hero Image
# Original: <img class="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700" data-alt="A futuristic..." src="https://lh3..."/>
hero_img_pattern = r'<img class="w-full h-full object-cover grayscale-\[0\.2\] group-hover:scale-105 transition-transform duration-700" data-alt="[^"]+" src="https://lh3\.googleusercontent\.com/aida-public/[^"]+"/>'
hero_img_replacement = '<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 animate-float" src="hero_image.png" alt="Hero Automation Creativity"/>'
content = re.sub(hero_img_pattern, hero_img_replacement, content)

# 3. Add QUEM SOMOS to the Quote section
# Original: <div class="max-w-4xl reveal">\n<p class="font-display-xl
quem_somos_pattern = r'(<div class="max-w-4xl reveal">)(\s*<p class="font-display-xl)'
quem_somos_replacement = r'\1\n<h2 class="font-display-xl text-[48px] md:text-[80px] leading-none uppercase text-primary mb-8 tracking-widest text-center">QUEM SOMOS</h2>\2'
content = re.sub(quem_somos_pattern, quem_somos_replacement, content)

# 4. Change CORE SERVIÇOS to O QUE FAZEMOS
content = content.replace('CORE<br/>SERVIÇOS', 'O QUE<br/>FAZEMOS')

# 5. Change INICIE SEU PROJETO AGORA to ORÇAMENTO
content = content.replace('INICIE SEU<br/>PROJETO AGORA', 'SOLICITE SEU<br/>ORÇAMENTO')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Sections updated and hero image injected successfully!")
