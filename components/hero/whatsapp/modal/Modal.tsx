"use client";

import React, { useEffect, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const [mounted, setMounted] = useState(false);

  // 1️⃣ Garante que só renderiza no client
  useEffect(() => {
    setMounted(true);
  }, []);

  // 2️⃣ ESC + scroll lock
  useEffect(() => {
    if (!mounted || !isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [mounted, isOpen, onClose]);

  // 3️⃣ Nunca renderiza no SSR
  if (!mounted || !isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-full max-w-3xl mx-4
          p-4 md:p-8
          bg-nexus-bg
          rounded-2xl
          border border-nexus-primary/30
          shadow-[0_0_40px_rgba(74,222,128,0.15)]
          max-h-[85vh] md:max-h-[90vh]
          overflow-y-auto modal-scroll
        "
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white"
          aria-label="Fechar modal"
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
