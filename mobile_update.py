import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Nav Padding
content = content.replace('px-margin-desktop py-gutter', 'px-margin-mobile md:px-margin-desktop py-4 md:py-gutter')
content = content.replace('gap-12', 'gap-8')

# 2. Hero Text
content = content.replace('text-display-xl uppercase', 'text-[48px] md:text-display-xl uppercase')

# 3. Hero Image aspect ratio
content = content.replace('aspect-[21/9]', 'aspect-square md:aspect-[21/9]')

# 4. Ticker action (stack on mobile)
content = content.replace('flex items-center justify-around', 'flex flex-col md:flex-row items-center justify-around gap-6 md:gap-0')

# 5. Quote Section padding & text
content = content.replace('px-margin-desktop text-center', 'px-margin-mobile md:px-margin-desktop text-center')
content = content.replace('text-[48px] md:text-[64px]', 'text-[32px] md:text-[64px]')

# 6. Projects Section
content = content.replace('py-section-gap px-margin-desktop', 'py-24 md:py-section-gap px-margin-mobile md:px-margin-desktop')
content = content.replace('text-[80px]', 'text-[48px] md:text-[80px]')
content = content.replace('flex justify-between items-end mb-16', 'flex flex-col md:flex-row justify-start md:justify-between items-start md:items-end gap-6 mb-12 md:mb-16')

# 7. Services Section
content = content.replace('px-margin-desktop bg-surface-container-lowest', 'px-margin-mobile md:px-margin-desktop bg-surface-container-lowest')
content = content.replace('text-[40px]', 'text-[24px] md:text-[40px]')
content = content.replace('px-12', 'px-6 md:px-12')

# 8. CTA Section
content = content.replace('aspect-[21/7]', 'aspect-square md:aspect-[21/7]')
content = content.replace('text-[64px] md:text-[100px]', 'text-[48px] md:text-[100px]')
content = content.replace('px-12 py-6', 'px-8 py-4 md:px-12 md:py-6')

# 9. Footer
content = content.replace('py-margin-mobile px-margin-desktop', 'py-10 px-margin-mobile md:px-margin-desktop')
content = content.replace('flex flex-col md:flex-row justify-between items-center gap-gutter', 'flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left')
content = content.replace('<div class="flex gap-8">', '<div class="flex gap-4 md:gap-8 flex-wrap justify-center">')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Mobile optimizations applied!")
