"use client";
import React, { useEffect, useState } from "react";
import { AppMode, MenuItem } from "@/types";
import FortlinkAnimate from "../animeted/textFortlink/FortlinkAnimate";

interface OrbitalMenuProps {
  activeMode: AppMode;
  onModeChange: (mode: AppMode) => void;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: AppMode.CHAT,
    label: "SOBRE NÓS",
    icon: "M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4M9 11h.01M9 15h.01M15 11h.01M15 15h.01",
    description: "Direct neural link for general queries.",
  },
  {
    id: AppMode.ANALYZE,
    label: "MELHOR PLANO",
    icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.916c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.364-1.118L2.49 10.1c-.783-.57-.38-1.81.588-1.81h4.917a1 1 0 00.95-.69l1.518-4.674z",
    description: "High-compute analysis and problem solving.",
  },
  {
    id: AppMode.RESEARCH,
    label: "PLANOS",
    icon: "M4 6h16M4 12h16M4 18h10",
    description: "Live web grounding and global data retrieval.",
  },
  {
    id: AppMode.SETTINGS,
    label: "INÍCIO",
    icon: "M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5v-6h4v6h5a1 1 0 001-1V10",
    description: "Modify orbital parameters and interface theme.",
  },
];

const OrbitalMenu: React.FC<OrbitalMenuProps> = ({
  activeMode,
  onModeChange,
}) => {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    radius: 260,
    startAngle: 135,
    angleRange: 100,
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      let radius = 260;
      let startAngle = 135;
      let angleRange = 100;

      if (w < 640) {
        radius = 160;
        startAngle = 145;
        angleRange = 70;
      } else if (w < 1024) {
        radius = 200;
        startAngle = 130;
        angleRange = 85;
      } else {
        radius = 280;
        startAngle = 125;
        angleRange = 110;
      }

      setDimensions({ width: w, radius, startAngle, angleRange });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-1/2 -right-32 md:-right-40 lg:-right-48 transform -translate-y-1/2 z-50 pointer-events-none transition-all duration-700">
      <div className="relative flex justify-center items-center w-87.5 h-87.5 md:w-125 md:h-125 lg:w-170 lg:h-170">
        <div className="absolute inset-0 border-2 border-[#05de31]/70 rounded-full animate-spin-slow"></div>

        <div className="absolute inset-8 md:inset-12 border-[0.1] border-nexus-primary/10 rounded-full animate-spin-slow-reverse"></div>

        <div className="absolute  w-55 h-55 md:w-[320px] md:h-80 lg:w-100 lg:h-100 border-[#05de31]/70 rounded-full border-8 border-nexus-primary/30 shadow-[inset_0_0_30px_rgba(74,222,128,0.1)] flex items-center justify-start pl-8 md:pl-12 pointer-events-auto">
          <div className="max-w-30 md:max-w-40">
            <FortlinkAnimate text="FORTLINK" />
            <div className="h-px w-full bg-nexus-primary/30 mb-2"></div>
            <p className="text-[10px] md:text-sm text-slate-400 leading-tight uppercase font-medium">
              {MENU_ITEMS.find((i) => i.id === activeMode)?.label}
            </p>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          {MENU_ITEMS.map((item, index) => {
            const totalItems = MENU_ITEMS.length;
            const angle =
              dimensions.startAngle +
              index * (dimensions.angleRange / (totalItems - 1));

            const x = Math.cos((angle * Math.PI) / 180) * dimensions.radius;
            const y = Math.sin((angle * Math.PI) / 180) * dimensions.radius;

            const isSpecial = item.id === AppMode.SPECIAL;
            const isLogicArray = item.id === AppMode.ANALYZE;
            return (
              <button
                key={item.id}
                onClick={() => onModeChange(item.id)}
                style={{ transform: `translate(${x}px, ${y}px)` }}
                className={`absolute pointer-events-auto rounded-full transition-all duration-500 group flex items-center justify-center hover:cursor-pointer bg-[#090a19]
                ${
                  activeMode === item.id
                    ? "w-12 h-12 md:w-16 md:h-16 bg-[#05de31] text-nexus-bg scale-110 shadow-[0_0_25px_rgba(74,222,128,0.5)]"
                    : "w-10 h-10 md:w-12 md:h-12 bg-nexus-surface text-nexus-primary border border-nexus-primary/40 hover:border-nexus-primary hover:bg-nexus-primary/10 hover:scale-[1.01]"
                }
                ${
                  isLogicArray && activeMode !== AppMode.ANALYZE
                    ? " border-[#05de31] shadow-white"
                    : ""
                }
                }rounded-full z-10`}
              >
                <svg
                  className={`w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 transition-colors
                            ${
                              isLogicArray && activeMode !== AppMode.ANALYZE
                              ? "animate-pulse text-[#05de31] "
                                : ""
                            }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={item.icon}
                  />
                </svg>

                <span
                  className={`absolute right-full mr-3 px-2 py-1 bg-nexus-primary text-nexus-bg text-[9px] font-bold rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none uppercase tracking-tighter`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrbitalMenu;
