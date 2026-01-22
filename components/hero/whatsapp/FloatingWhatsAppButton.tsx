"use client";
import React from "react";
import { WhatsAppIcon } from "./inconWhatsapp/WhatsAppIcon";

interface FloatingWhatsAppButtonProps {
  onClick: () => void;
}

export default function FloatingWhatsAppButton({ onClick }: FloatingWhatsAppButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Abrir pré-cadastro"
      className="
        fixed bottom-6 right-6 z-50
        w-16 h-16 rounded-full
        bg-[#05de31]
        flex items-center justify-center
        text-nexus-bg
        shadow-[0_0_25px_rgba(74,222,128,0.5)]
        hover:scale-110 transition-transform
      "
    >
      <WhatsAppIcon />
    </button>
  );
}
