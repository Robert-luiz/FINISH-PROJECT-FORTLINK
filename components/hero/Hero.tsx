"use client";

import { useEffect, useRef, useState } from "react";
import OrbitalMenu, { MENU_ITEMS } from "./OrbitalMenu";
import { AppMode, Message } from "@/types";
import HeroContent from "./HeroContent";
import FloatingWhatsAppButton from "./whatsapp/FloatingWhatsAppButton";
import Modal from "./whatsapp/modal/Modal";
import PreRegistrationForm from "./whatsapp/preRegistration/PreRegistrationForm";
import {
  LINK_CENTRAL,
  WHATSAPP_LINK,
} from "./whatsapp/constants/constantWhatsapp";

const Hero = () => {
  const [activeMode, setActiveMode] = useState<AppMode>(AppMode.SETTINGS);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Orbital Nexus operational. Awaiting command parameters...",
      timestamp: Date.now(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onContractClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(undefined);
  };

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: inputValue,
      timestamp: Date.now(),
    };

    setMessages((prev: any) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    const useSearch = activeMode === AppMode.RESEARCH;
  };

  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(
    undefined,
  );

  const handleSelectPlan = (plan: string) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <div
      className="flex flex-col min-h-screen w-full bg-nexus-bg text-slate-100 font-mono relative
                overflow-y-auto overflow-x-hidden lg:overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#4ade80_0%,transparent_70%)] animate-"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-nexus-primary animate-scanline"></div>
      </div>

      <main className="flex-1 max-w-275 p-6 md:p-12 flex flex-col z-10 h-full gap-10">
        <header className="mb-8 pl-4 flex flex-col md:flex-row justify-between lg:justify-start lg:gap-12 xl:justify-around items-center gap-6 md:gap-0">
          <div className="w-full md:w-auto flex justify-between items-center">
            <img
              className="w-48 md:w-60 lg:w-92"
              src="./logo-fortlink.png"
              alt=""
            />
            <button
              className="md:hidden p-2 text-[#05de31] hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/fortlink_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-zinc-300 hover:text-white"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            <a
              href="https://facebook.com/fortlinknet" // Substitua pelo link oficial do Facebook da Fortlink
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-zinc-300 hover:text-white"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>

            <a
              href="https://maps.app.goo.gl/413by3huF8iVjChQ6" // Substitua pelo link oficial da localização da Fortlink (ex: Google Maps)
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-zinc-300 hover:text-white"
              aria-label="Localização"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </a>

            <a
              href={LINK_CENTRAL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#05de31]/10 border border-[#05de31]/50 text-[#05de31] font-semibold text-sm hover:bg-[#05de31] hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              <span>Central do Assinante</span>
            </a>
          </div>
        </header>
        <HeroContent
          activeMode={activeMode}
          onContractClick={onContractClick}
          onSelectPlan={handleSelectPlan}
        />
      </main>

      <OrbitalMenu activeMode={activeMode} onModeChange={setActiveMode} />

      <FloatingWhatsAppButton onClick={() => setIsModalOpen(true)} />

      {/* <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <PreRegistrationForm
          onClose={() => setIsModalOpen(false)}
          selectedPlan={selectedPlan}
        />
      </Modal> */}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#090a19]/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden animate-in fade-in duration-200">
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-[#05de31] transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Fechar Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {MENU_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveMode(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`text-2xl font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-3
                ${
                  activeMode === item.id
                    ? "text-[#05de31] scale-110"
                    : "text-white/60 hover:text-white"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <footer className="w-full border-t border-white/10 bg-black/30 backdrop-blur-md px-6 py-8 mt-10">
        <div className="max-w-4xl flex flex-col md:flex-row items-start md:items-end lg:justify-between md:justify-start gap-10">
          {/* Empresa */}
          <div className="space-y-4">
            <h3 className="text-[#05de31] text-lg font-bold tracking-wider">
              FORTLINK
            </h3>

            <div className="flex items-start gap-3 text-zinc-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#05de31] mt-0.5"
              >
                <path d="M16 20V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2Z"></path>
                <path d="M20 14h-4"></path>
                <path d="M20 18h-4"></path>
                <path d="M20 10h-4"></path>
              </svg>

              <div>
                <p className="text-sm text-zinc-400">CNPJ</p>
                <p>31.897.452/0001-41</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-zinc-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#05de31] mt-0.5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.89.32 1.76.59 2.59a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.49-1.11a2 2 0 0 1 2.11-.45c.83.27 1.7.47 2.59.59A2 2 0 0 1 22 16.92z"></path>
              </svg>

              <div>
                <p className="text-sm text-zinc-400">Contato</p>
                <p>(13) 3422-8135</p>
              </div>
            </div>

            <div className="flex items-start gap-3 text-zinc-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-[#05de31] mt-0.5"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>

              <div>
                <p className="text-sm text-zinc-400">Endereço</p>
                <p>Estrada Gentil Perez, 380</p>
                <p>Itanhaém - SP</p>
              </div>
            </div>
          </div>

          {/* Direitos autorais */}
          <div className="flex flex-col items-start md:items-end gap-2 text-sm text-zinc-500">
            <p>© {new Date().getFullYear()} Fortlink</p>

            <p>Todos os direitos reservados.</p>

            <a
              href="https://github.com/Robert-luiz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#05de31] hover:text-white transition-colors"
            >
              Desenvolvido por Robert Luiz
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Hero;
