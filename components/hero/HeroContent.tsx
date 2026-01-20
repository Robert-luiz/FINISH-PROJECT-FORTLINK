"use client";

import { AppMode } from "@/types";
import InitialContent from "./content/InitialContent";
import AboutUsContent from "./content/AboutUsContent";
import PlansContent from "./content/PlansContent";
import BestPlanContent from "./content/BestPlanContent";

interface HeroContentProps {
  activeMode: AppMode;
}

export default function HeroContent({ activeMode }: HeroContentProps) {
  return (
    <div className="w-full relative z-10">

      {activeMode === AppMode.CHAT && (
        <div className="flex items-center max-w-6xl">
          
          <div className="w-full ">
            <AboutUsContent />
          </div>
        </div>
      )}

      {activeMode === AppMode.SETTINGS && (
        <div className="max-w-xl">
          <InitialContent />
        </div>
      )}

      {activeMode === AppMode.RESEARCH && (
        <div className="max-w-xl">
          <PlansContent />
        </div>
      )}

      {activeMode === AppMode.ANALYZE && (
        <div className="max-w-xl">
          <BestPlanContent />
        </div>
      )}

    </div>
  );
}

