"use client";

import { AppMode } from "@/types";
import InitialContent from "./content/InitialContent";
import AboutUsContent from "./content/AboutUsContent";
import PlansContent from "./content/PlansContent";
import BestPlanContent from "./content/BestPlanContent";

interface HeroContentProps {
  activeMode: AppMode;
  onContractClick: () => void;
  onSelectPlan: (plan: string) => void;
}

export default function HeroContent({
  activeMode,
  onContractClick,
  onSelectPlan,
}: HeroContentProps) {
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
        <div className="w-full flex items-center justify-center md:block">
          <InitialContent onContractClick={onContractClick} />
        </div>
      )}

      {activeMode === AppMode.RESEARCH && (
        <div className="max-w-6xl">
          <PlansContent onSelectPlan={onSelectPlan} />
        </div>
      )}

      {activeMode === AppMode.ANALYZE && (
        <div className="max-w-xl xl:max-w-2xl">
          <BestPlanContent onSelectPlan={onSelectPlan} />
        </div>
      )}
    </div>
  );
}
