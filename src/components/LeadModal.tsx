import React, { useState } from 'react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen && !isSubmitted) return null; // Using CSS opacity transitions mostly, but we can conditionally render if needed.

  return (
    <div
      className={`fixed inset-0 z-[100] transition-opacity duration-500 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={handleClose}></div>
      
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-start md:items-center justify-center p-4 py-12 md:py-8">
          <div
            className={`relative w-full max-w-lg glass-card rounded-[24px] p-5 md:p-8 transform transition-transform duration-500 ${
              isOpen ? 'scale-100' : 'scale-95'
            }`}
          >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <h3 className="font-display-xl text-[24px] md:text-[32px] uppercase mb-1 md:mb-2 text-white">INICIAR PROJETO</h3>
        <p className="font-body-md text-on-surface-variant mb-4 md:mb-8 text-sm">
          Preencha os dados abaixo e nossa equipe entrará em contato.
        </p>
        
        {!isSubmitted ? (
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="font-label-caps text-[10px] text-primary/80 absolute -top-2 left-0">NOME</label>
              <input type="text" required className="w-full bg-transparent border-0 border-b border-white/30 text-white font-body-md py-1 md:py-2 focus:ring-0 focus:border-primary transition-colors placeholder-white/20 outline-none" placeholder="Seu nome completo" />
            </div>
            
            <div className="relative mt-4 md:mt-6">
              <label className="font-label-caps text-[10px] text-primary/80 absolute -top-2 left-0">E-MAIL</label>
              <input type="email" required className="w-full bg-transparent border-0 border-b border-white/30 text-white font-body-md py-1 md:py-2 focus:ring-0 focus:border-primary transition-colors placeholder-white/20 outline-none" placeholder="seu@email.com" />
            </div>
            
            <div className="relative mt-4 md:mt-6">
              <label className="font-label-caps text-[10px] text-primary/80 absolute -top-2 left-0">WHATSAPP</label>
              <input type="tel" required className="w-full bg-transparent border-0 border-b border-white/30 text-white font-body-md py-1 md:py-2 focus:ring-0 focus:border-primary transition-colors placeholder-white/20 outline-none" placeholder="(11) 99999-9999" />
            </div>
            
            <div className="relative pt-4 md:pt-6">
              <label className="font-label-caps text-[10px] text-primary/80 block mb-2 md:mb-3">CATEGORIA DO PROJETO</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
                {['SITE / LANDING PAGE', 'AUTOMAÇÃO', 'SISTEMA'].map((cat, idx) => (
                  <label key={idx} className="cursor-pointer group">
                    <input type="radio" name="categoria" value={cat} className="peer sr-only" required={idx===0} />
                    <div className="border border-white/20 rounded-md py-2 md:py-3 text-center font-label-caps text-[10px] text-white/60 peer-checked:border-primary peer-checked:text-primary peer-checked:bg-primary/10 transition-all hover:border-white/50">
                      {cat}
                    </div>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="relative pt-4 md:pt-6">
              <label className="font-label-caps text-[10px] text-primary/80 absolute top-2 md:top-4 left-0">DETALHES DO PROJETO</label>
              <textarea required rows={2} className="w-full bg-white/5 border border-white/20 rounded-md text-white font-body-md p-3 pt-5 md:pt-6 mt-1 md:mt-2 focus:ring-0 focus:border-primary transition-colors placeholder-white/20 resize-none outline-none" placeholder="Conte-nos um pouco sobre a sua necessidade..."></textarea>
            </div>
            
            <button
              type="submit"
              className="active:scale-95 transition-transform duration-200 w-full bg-white text-black py-3 md:py-4 rounded-md font-label-caps tracking-widest hover:bg-primary transition-all mt-4 md:mt-6 flex justify-center items-center gap-2"
            >
              ENVIAR SOLICITAÇÃO <span className="material-symbols-outlined text-[18px]">send</span>
            </button>
          </form>
        ) : (
          <div className="absolute inset-0 bg-[#050505]/95 rounded-[24px] flex flex-col items-center justify-center text-center p-8 z-10">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary">
              <span className="material-symbols-outlined text-4xl">check</span>
            </div>
            <h4 className="font-display-xl text-[24px] text-white uppercase mb-2">SOLICITAÇÃO ENVIADA</h4>
            <p className="font-body-md text-white/70 text-sm">Recebemos seus dados. Nossa equipe entrará em contato em breve!</p>
            <button
              onClick={handleClose}
              className="active:scale-95 transition-transform duration-200 mt-8 border border-white/20 text-white px-8 py-3 rounded-full font-label-caps hover:bg-white/10 transition-colors"
            >
              FECHAR
            </button>
          </div>
        )}
          </div>
        </div>
      </div>
    </div>
  );
};
