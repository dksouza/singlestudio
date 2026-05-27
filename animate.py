import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add CSS
css = """
        /* Animations */
        .reveal {
            opacity: 0;
            transform: translateY(60px);
            transition: all 1s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .reveal.active {
            opacity: 1;
            transform: translateY(0);
        }
"""
content = content.replace('/* Micro-noise overlay */', css + '\n        /* Micro-noise overlay */')

# 2. Add classes to elements
# Hero
content = content.replace('<div class="text-center space-y-4 mb-12 relative z-10">', '<div class="text-center space-y-4 mb-12 relative z-10 reveal">')
content = content.replace('<div class="w-full max-w-5xl aspect-square md:aspect-[21/9] rounded-[40px] md:rounded-[60px] overflow-hidden glass-card relative group">', '<div class="w-full max-w-5xl aspect-square md:aspect-[21/9] rounded-[40px] md:rounded-[60px] overflow-hidden glass-card relative group reveal" style="transition-delay: 200ms;">')
content = content.replace('class="w-full mt-12 bg-white/5 py-6 flex flex-col md:flex-row items-center justify-around gap-6 md:gap-0 font-label-caps text-on-surface border-y border-white/10"', 'class="w-full mt-12 bg-white/5 py-6 flex flex-col md:flex-row items-center justify-around gap-6 md:gap-0 font-label-caps text-on-surface border-y border-white/10 reveal" style="transition-delay: 300ms;"')

# Quote
content = content.replace('<div class="max-w-4xl">', '<div class="max-w-4xl reveal">')

# Projects Header
content = content.replace('<div>\n<h2 class="font-display-xl text-[48px] md:text-[80px] leading-none uppercase">PROJETOS<br/>SELECIONADOS</h2>', '<div class="reveal">\n<h2 class="font-display-xl text-[48px] md:text-[80px] leading-none uppercase">PROJETOS<br/>SELECIONADOS</h2>')
content = content.replace('<button class="flex items-center gap-3 bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-caps hover:bg-white hover:text-black transition-all">', '<button class="flex items-center gap-3 bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-caps hover:bg-white hover:text-black transition-all reveal" style="transition-delay: 200ms;">')

# Project Cards
content = content.replace('<div class="group relative aspect-[4/5] rounded-[48px] overflow-hidden glass-card">', '<div class="group relative aspect-[4/5] rounded-[48px] overflow-hidden glass-card reveal">')

# Services
content = content.replace('<div>\n<h2 class="font-display-xl text-[48px] md:text-[80px] leading-none uppercase">CORE<br/>SERVIÇOS</h2>', '<div class="reveal">\n<h2 class="font-display-xl text-[48px] md:text-[80px] leading-none uppercase">CORE<br/>SERVIÇOS</h2>')
content = content.replace('<p class="max-w-md font-body-md opacity-60">', '<p class="max-w-md font-body-md opacity-60 reveal" style="transition-delay: 200ms;">')
content = content.replace('<div class="group relative h-[180px] rounded-[40px] overflow-hidden glass-card cursor-pointer flex items-center px-6 md:px-12 transition-all hover:h-[220px]">', '<div class="group relative h-[180px] rounded-[40px] overflow-hidden glass-card cursor-pointer flex items-center px-6 md:px-12 transition-all hover:h-[220px] reveal">')

# CTA
content = content.replace('<div class="relative w-full aspect-square md:aspect-[21/7] rounded-[40px] md:rounded-[60px] overflow-hidden group">', '<div class="relative w-full aspect-square md:aspect-[21/7] rounded-[40px] md:rounded-[60px] overflow-hidden group reveal">')

# 3. Add JS
js = """
        // Scroll Reveal Animation
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        });
"""
content = content.replace('// Smooth parallax effect for hero image', js + '\n        // Smooth parallax effect for hero image')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Animations added successfully!")
