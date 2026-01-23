import FadeUp from "@/components/motion/FadeUp";
import PlansFlex from "../cardPlans/PlansFlex";

interface PlansContentProps {
  onSelectPlan?: (plan: string) => void;
}

export default function PlansContent({ onSelectPlan }: PlansContentProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center md:block ">
      <FadeUp>
        <h1 className="text-4xl md:text-4xl font-bold mb-4">
          Nossos planos
        </h1>
      </FadeUp>

      <FadeUp delay={0.1}>
        <p className="text-zinc-300 text-lg text-center md:text-start md:max-w-95">
          Escolha o plano resisdencial ideal para seu uso e tenha
          velocidade real com um suporte humanizado.
        </p>
      </FadeUp>

      <PlansFlex onSelectPlan={onSelectPlan} />
    </div>
  );
}
