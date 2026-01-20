"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";
import OrbitalMenu from "./OrbitalMenu";
import { AppMode, Message } from "@/types";
import HeroContent from "./HeroContent";

const hero = () => {
  const [activeMode, setActiveMode] = useState<AppMode>(AppMode.CHAT);
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

  return (
    <div className="flex min-h-screen w-screen bg-nexus-bg text-slate-100 font-mono relative
                overflow-y-auto lg:overflow-hidden">

      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#4ade80_0%,transparent_70%)] animate-"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-nexus-primary animate-scanline"></div>
      </div>

      <main className="flex-1 max-w-275 p-6 md:p-12 flex flex-col z-10 h-full gap-10">
        <header className="mb-8 pl-4">
          <img className="md:w-60 lg:w-92" src="./logo-fortlink.png" alt="" />
        </header>
        <HeroContent activeMode={activeMode} />
      </main>

      <OrbitalMenu activeMode={activeMode} onModeChange={setActiveMode} />
    </div>
  );
};

export default hero;
