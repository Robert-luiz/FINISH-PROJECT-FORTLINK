"use client";
import FadeUp from "@/components/motion/FadeUp";

interface PlanCardProps {
  title: string;
  speed: string;
  price: string;
  highlight?: boolean;
  delay?: number;
  onSelect?: () => void;
}

export default function PlanCard({
  title,
  speed,
  price,
  highlight = false,
  delay = 0,
  onSelect,
}: PlanCardProps) {
  return (
    <FadeUp delay={delay} className="lg:w-[calc(50%-0.75rem)]">
      <div
  className={` w-full
    relative flex flex-col justify-between
    rounded-2xl p-6 h-full
    backdrop-blur-md
    border transition-all duration-300

    ${
      highlight
        ? "border-[#05de31] bg-[#05de31]/10 shadow-[0_0_30px_rgba(74,222,128,0.35)] scale-[1.03]"
        : "border-white/10 bg-white/5 hover:border-[#05de31]/60 hover:shadow-[0_0_25px_rgba(74,222,128,0.2)]"
    }
  `}
>

        {/* Header */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-white/40">
            {title}
          </p>

          <h3 className="text-2xl font-bold text-nexus-primary">{speed}</h3>
        </div>

        {/* Price */}
        <div className="my-6">
          <p className="text-sm text-white/50">A partir de</p>
          <p className="text-4xl font-bold">
            R$ {price}
            <span className="text-base font-medium text-white/50">/mês</span>
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={onSelect}
          className={`
          w-full mt-auto py-3 rounded-xl font-semibold
          transition-all duration-300
          ${
            highlight
              ? "bg-[#05de31] text-black hover:shadow-[0_0_20px_rgba(74,222,128,0.6)]"
              : "border border-[#05de31]/60 text-[#05de31] hover:bg-[#05de31] hover:text-black"
          }
        `}
        >
          Contratar agora
        </button>
      </div>
    </FadeUp>
  );
}
