"use client";

import { useEffect, useRef, useState } from "react";
import OrbitalMenu, { MENU_ITEMS } from "./OrbitalMenu";
import { AppMode, Message } from "@/types";
import HeroContent from "./HeroContent";
import FloatingWhatsAppButton from "./whatsapp/FloatingWhatsAppButton";
import Modal from "./whatsapp/modal/Modal";
import PreRegistrationForm from "./whatsapp/preRegistration/PreRegistrationForm";
import { WHATSAPP_LINK } from "./whatsapp/constants/constantWhatsapp";

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
      className="flex min-h-screen w-full bg-nexus-bg text-slate-100 font-mono relative
                overflow-y-auto overflow-x-hidden lg:overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#4ade80_0%,transparent_70%)] animate-"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-nexus-primary animate-scanline"></div>
      </div>

      <main className="flex-1 max-w-275 p-6 md:p-12 flex flex-col z-10 h-full gap-10">
        <header className="mb-8 pl-4 flex flex-col md:flex-row justify-between lg:justify-start lg:gap-12 xl:justify-around items-center gap-6 md:gap-0">
          <div className="w-full md:w-auto flex justify-between items-center">
            <img className="w-48 md:w-60 lg:w-92" src="./logo-fortlink.png" alt="" />
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
              href="https://instagram.com"
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
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#05de31]/10 border border-[#05de31]/50 text-[#05de31] font-semibold text-sm hover:bg-[#05de31] hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              <span>Fale Conosco</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
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

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <PreRegistrationForm
          onClose={() => setIsModalOpen(false)}
          selectedPlan={selectedPlan}
        />
      </Modal>

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
    </div>
  );
};

export default Hero;
