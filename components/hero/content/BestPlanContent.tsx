"use client";
import React from "react";
import FadeUp from "@/components/motion/FadeUp";

interface BestPlanContentProps {
  onSelectPlan?: (plan: string) => void;
}

export default function BestPlanContent({ onSelectPlan }: BestPlanContentProps) {
  return (
    <FadeUp className="w-full max-w-md xl:max-w-full mx-auto">
      <div className="
        relative flex flex-col
        rounded-2xl p-6 md:p-8 h-full
        backdrop-blur-md
        border transition-all duration-300
        border-[#05de31] bg-[#05de31]/10 shadow-[0_0_30px_rgba(74,222,128,0.35)] scale-[1.03]
      ">
        <span className="
          w-fit mb-4
          px-3 py-1
          rounded-full
          text-xs font-bold
          bg-[#05de31] text-black
          tracking-wide
          shadow-[0_0_10px_rgba(5,222,49,0.4)]
        ">
          PLANO PREMIUM
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          1000 mega <span className="text-[#05de31]">+ TV</span>
        </h2>

        <p className="text-gray-400 text-sm mb-6">
          Máxima velocidade + entretenimento completo para sua casa.
        </p>

        <div className="flex items-end gap-1 mb-8">
          <span className="text-gray-400 text-base">R$</span>
          <span className="text-5xl font-bold text-white">169</span>
          <span className="text-xl font-semibold text-white">,90</span>
          <span className="text-gray-500 text-sm ml-1">/mês</span>
        </div>

        <ul className="space-y-3 mb-8">
          {[
            "1000 mega de Internet Fibra Óptica",
            "Pacote de TV incluso",
            "Wi-Fi 6 de Alta Performance",
            "Instalação 100% gratuita",
            "Suporte técnico humanizado"
          ].map((item) => (
            <li key={item} className="flex items-center gap-3 text-gray-300">
              <div className="shrink-0 w-5 h-5 rounded-full bg-[#05de31]/20 flex items-center justify-center">
                <svg className="w-3 h-3 text-[#05de31]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-sm">{item}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => onSelectPlan?.("1000+tv")}
          className="
            mt-auto
            w-full
            py-3 rounded-xl font-semibold
            transition-all duration-300
            bg-[#05de31] text-black hover:shadow-[0_0_20px_rgba(74,222,128,0.6)]
            text-center hover:scale-[1.02]
          "
        >
          Contratar agora
        </button>
      </div>
    </FadeUp>
  );
}
