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
    <div className="relative z-10 max-w-xl">
      {activeMode === AppMode.SETTINGS && <InitialContent />}
      {activeMode === AppMode.CHAT && <AboutUsContent />}
      {activeMode === AppMode.RESEARCH && <PlansContent />}
      {activeMode === AppMode.ANALYZE && <BestPlanContent />}
    </div>
  );
}
