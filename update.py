import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Header translations
content = re.sub(r'<title>.*?</title>', '<title>SINGLE STUDIO | Alta Performance & Automação</title>', content)
content = content.replace('>PROJECT<', '>PROJETOS<')
content = content.replace('>ABOUT US<', '>SOBRE NÓS<')
content = content.replace('>OUR TEAMS<', '>NOSSO TIME<')
content = content.replace('>SERVICES<', '>SERVIÇOS<')
content = content.replace('CONTACT US', 'FALE CONOSCO')

# Nav Contact Us Button
content = content.replace('<button class="bg-primary', '<button onclick="openModal()" class="bg-primary')

# Hero Section
content = content.replace('FIRM EST 1996', 'AGÊNCIA PREMIUM')
content = content.replace('BUILDING <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-secondary">DIFFERENT</span>', 'CRIANDO O <br/> <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-secondary">EXTRAORDINÁRIO</span>')
content = content.replace('THE PAVILLION', 'LANDING PAGES')
content = content.replace('CRONULLA, NSW 2024', 'ALTA CONVERSÃO')

# Ticker
content = content.replace('GET STARTED', 'INICIAR PROJETO')
content = content.replace('class="flex items-center gap-4 cursor-pointer hover:text-primary transition-colors"', 'onclick="openModal()" class="flex items-center gap-4 cursor-pointer hover:text-primary transition-colors"')

# Quote Section
content = re.sub(r'THE MOTHER\s+', 'O DESIGN ', content)
content = re.sub(r'ART IS ARCHITECTURE WITHOUT THE\s+', 'NÃO É APENAS O QUE SE VÊ E SENTE. É COMO ', content)
content = re.sub(r'ARCHITECTURE OF OUR OWN, WE HAVE NO SOUL OF OURS OWNS CIVILIZATION', 'FUNCIONA. UNIMOS ESTÉTICA CINEMATOGRÁFICA E ALTA PERFORMANCE PARA ESCALAR O SEU NEGÓCIO.', content)

# Projects
content = content.replace('SELECTED<br/>WORKS', 'PROJETOS<br/>SELECIONADOS')
content = content.replace('PROJECT_REGISTRY_v.02', 'REGISTRO_PROJETOS_v.02')
content = content.replace('VIEW ALL PROJECTS', 'VER TODOS OS PROJETOS')

content = content.replace('THE GLASS HOUSE', 'ESTÉTICA PREMIUM')
content = content.replace('LUXURY RESIDENTIAL', 'LANDING PAGES')

content = content.replace('NEO-CONCRETE', 'ALTA CONVERSÃO')
content = content.replace('COMMERCIAL HUB', 'E-COMMERCE')

content = content.replace('VOID OASIS', 'SISTEMAS INTELIGENTES')
content = content.replace('PRIVATE RETREAT', 'AUTOMAÇÃO')

content = content.replace('CULTURAL WING', 'PERFORMANCE EXTREMA')
content = content.replace('PUBLIC SPACE', 'SITES CORPORATIVOS')

# Services
content = content.replace('CORE<br/>SERVICES', 'NOSSOS<br/>SERVIÇOS')
content = content.replace('SYSTEMS ONLINE', 'SISTEMAS ONLINE')
content = content.replace('We combine algorithmic precision with architectural soul to deliver high-fidelity environments that push the boundaries of modern living.', 'Combinamos precisão técnica com design cinematográfico para entregar ecossistemas digitais de alta conversão que elevam o patamar do seu negócio.')

content = content.replace('>BUILDING DESIGN<', '>SITES DE ALTA PERFORMANCE<')
content = content.replace('>SPACE PLANNING<', '>LANDING PAGES<')
content = content.replace('>SITE PLANNING<', '>AUTOMAÇÃO INTELIGENTE<')
content = content.replace('>CONTRACTOR<', '>SISTEMAS CUSTOMIZADOS<')

# CTA
content = content.replace('START YOUR<br/>PROJECT NOW', 'INICIE SEU<br/>PROJETO AGORA')
content = content.replace('INITIATE CONSULTATION', 'SOLICITAR ORÇAMENTO')
content = content.replace('<button class="bg-white', '<button onclick="openModal()" class="bg-white')

# Footer
content = content.replace('ALL RIGHTS RESERVED.', 'TODOS OS DIREITOS RESERVADOS.')

# Add Modal HTML and JS before </body>
modal_html = """
<!-- Modal Iniciar Projeto -->
<div id="contact-modal" class="fixed inset-0 z-[100] flex items-center justify-center hidden opacity-0 transition-opacity duration-500">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/80 backdrop-blur-md" onclick="closeModal()"></div>
    
    <!-- Modal Content -->
    <div class="relative w-full max-w-lg glass-card rounded-[24px] p-8 m-4 transform scale-95 transition-transform duration-500" id="modal-content">
        <button onclick="closeModal()" class="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
            <span class="material-symbols-outlined">close</span>
        </button>
        
        <h3 class="font-display-xl text-[32px] uppercase mb-2 text-white">INICIAR PROJETO</h3>
        <p class="font-body-md text-on-surface-variant mb-8 text-sm">Preencha os dados abaixo e nossa equipe entrará em contato.</p>
        
        <form id="project-form" class="space-y-6" onsubmit="submitForm(event)">
            <!-- Nome -->
            <div class="relative">
                <label class="font-label-caps text-[10px] text-primary/80 absolute -top-2 left-0">NOME</label>
                <input type="text" required class="w-full bg-transparent border-0 border-b border-white/30 text-white font-body-md py-2 focus:ring-0 focus:border-primary transition-colors placeholder-white/20 outline-none" placeholder="Seu nome completo">
            </div>
            
            <!-- Email -->
            <div class="relative mt-6">
                <label class="font-label-caps text-[10px] text-primary/80 absolute -top-2 left-0">E-MAIL</label>
                <input type="email" required class="w-full bg-transparent border-0 border-b border-white/30 text-white font-body-md py-2 focus:ring-0 focus:border-primary transition-colors placeholder-white/20 outline-none" placeholder="seu@email.com">
            </div>
            
            <!-- WhatsApp -->
            <div class="relative mt-6">
                <label class="font-label-caps text-[10px] text-primary/80 absolute -top-2 left-0">WHATSAPP</label>
                <input type="tel" required class="w-full bg-transparent border-0 border-b border-white/30 text-white font-body-md py-2 focus:ring-0 focus:border-primary transition-colors placeholder-white/20 outline-none" placeholder="(11) 99999-9999">
            </div>
            
            <!-- Categoria -->
            <div class="relative pt-6">
                <label class="font-label-caps text-[10px] text-primary/80 block mb-3">CATEGORIA DO PROJETO</label>
                <div class="grid grid-cols-2 gap-4">
                    <label class="cursor-pointer group">
                        <input type="radio" name="categoria" value="site" class="peer sr-only" required>
                        <div class="border border-white/20 rounded-md py-3 text-center font-label-caps text-[10px] text-white/60 peer-checked:border-primary peer-checked:text-primary peer-checked:bg-primary/10 transition-all hover:border-white/50">
                            SITE / LANDING PAGE
                        </div>
                    </label>
                    <label class="cursor-pointer group">
                        <input type="radio" name="categoria" value="automacao" class="peer sr-only">
                        <div class="border border-white/20 rounded-md py-3 text-center font-label-caps text-[10px] text-white/60 peer-checked:border-primary peer-checked:text-primary peer-checked:bg-primary/10 transition-all hover:border-white/50">
                            AUTOMAÇÃO
                        </div>
                    </label>
                </div>
            </div>
            
            <!-- Detalhamento -->
            <div class="relative pt-6">
                <label class="font-label-caps text-[10px] text-primary/80 absolute top-4 left-0">DETALHES DO PROJETO</label>
                <textarea required rows="3" class="w-full bg-white/5 border border-white/20 rounded-md text-white font-body-md p-3 pt-6 mt-2 focus:ring-0 focus:border-primary transition-colors placeholder-white/20 resize-none outline-none" placeholder="Conte-nos um pouco sobre a sua necessidade..."></textarea>
            </div>
            
            <button type="submit" class="w-full bg-white text-black py-4 rounded-md font-label-caps tracking-widest hover:bg-primary hover:neon-underglow transition-all mt-6 flex justify-center items-center gap-2">
                ENVIAR SOLICITAÇÃO <span class="material-symbols-outlined text-[18px]">send</span>
            </button>
        </form>

        <!-- Success Message (Hidden) -->
        <div id="success-message" class="hidden absolute inset-0 bg-[#050505]/95 rounded-[24px] flex-col items-center justify-center text-center p-8 z-10">
            <div class="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary neon-underglow">
                <span class="material-symbols-outlined text-4xl">check</span>
            </div>
            <h4 class="font-display-xl text-[24px] text-white uppercase mb-2">SOLICITAÇÃO ENVIADA</h4>
            <p class="font-body-md text-white/70 text-sm">Recebemos seus dados. Nossa equipe entrará em contato em breve!</p>
            <button onclick="closeModal()" class="mt-8 border border-white/20 text-white px-8 py-3 rounded-full font-label-caps hover:bg-white/10 transition-colors">FECHAR</button>
        </div>
    </div>
</div>

<script>
    function openModal() {
        const modal = document.getElementById('contact-modal');
        const content = document.getElementById('modal-content');
        modal.classList.remove('hidden');
        // Trigger reflow
        void modal.offsetWidth;
        modal.classList.remove('opacity-0');
        content.classList.remove('scale-95');
        content.classList.add('scale-100');
        
        // Reset form state
        document.getElementById('project-form').style.display = 'block';
        document.getElementById('project-form').reset();
        document.getElementById('success-message').classList.add('hidden');
        document.getElementById('success-message').classList.remove('flex');
    }

    function closeModal() {
        const modal = document.getElementById('contact-modal');
        const content = document.getElementById('modal-content');
        modal.classList.add('opacity-0');
        content.classList.remove('scale-100');
        content.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 500);
    }

    function submitForm(e) {
        e.preventDefault();
        document.getElementById('project-form').style.display = 'none';
        const successMsg = document.getElementById('success-message');
        successMsg.classList.remove('hidden');
        successMsg.classList.add('flex');
    }
</script>
</body>"""

content = content.replace('</body>', modal_html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Translations and Modal added successfully!")
