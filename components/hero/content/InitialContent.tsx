"use client";
import FadeUp from "@/components/motion/FadeUp";

interface InitialContentProps {
  onContractClick: () => void;
}

export default function InitialContent({
  onContractClick,
}: InitialContentProps) {
  return (
    <div className="flex flex-col relative w-full md:w-100 lg:w-125 xl:w-150 gap-5">
      {/* Headline */}
      <FadeUp>
        <h1 className="w-full font-bold tracking-tight text-center md:text-start leading-[1.15] text-4xl sm:text-4xl md:text-4xl xl:text-5xl">
          Velocidade que acompanha{" "}
          <span className="text-nexus-primary">o seu ritmo</span>
        </h1>
      </FadeUp>

      {/* Subtítulo */}
      <FadeUp delay={0.1}>
        <p className=" w-full mt-3 sm:mt-4 text-center md:text-start sm:text-lg md:text-xl leading-relaxed text-zinc-300 ">
          Internet em{" "}
          <span className="text-nexus-primary font-medium">fibra óptica</span>,
          com estabilidade real, alta performance e suporte humano de verdade.
        </p>
      </FadeUp>

      {/* CTA */}
      <FadeUp delay={0.2}>
        <div className="mt-5 sm:mt-6 flex flex-col md:flex-row sm:items-center gap-3">
          <button
            onClick={onContractClick}
            className="w-full md:w-auto flex items-center justify-center rounded-xl px-5 py-3 sm:px-6 bg-[#05de31] text-black text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(74,222,128,0.6)] focus:outline-none"
          >
            Contratar agora
          </button>

          <span className=" text-[10px] sm:text-[11px]text-white/40 text-center sm:text-left">
            Atendimento Humanizado • Instalação rápida
          </span>
        </div>
      </FadeUp>
    </div>
  );
}
