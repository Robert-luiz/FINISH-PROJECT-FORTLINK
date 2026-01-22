import PlanCard from "./PlanCard";

export default function PlansFlex({
  onSelectPlan,
}: {
  onSelectPlan?: (plan: string) => void;
}) {
  return (
     <div
      className="
        w-full mt-10
        flex flex-col md:max-w-95 lg:max-w-150
        lg:flex-row lg:flex-wrap
        gap-6
      "
    >
      <PlanCard
        title="Plano Essencial"
        speed="300 Mega"
        price="79,90"
        delay={0.1}
        onSelect={() => onSelectPlan?.("300")}
      />

      <PlanCard
        title="Plano Avançado"
        speed="600 Mega"
        price="99,90"
        highlight
        delay={0.2}
        onSelect={() => onSelectPlan?.("600")}
      />

      <PlanCard
        title="Plano Ultra"
        speed="1000 Mega"
        price="129,90"
        delay={0.3}
        onSelect={() => onSelectPlan?.("1000")}
      />

      <PlanCard
        title="Plano Completo"
        speed="1000 Mega + TV"
        price="169,90"
        delay={0.4}
        onSelect={() => onSelectPlan?.("1000+tv")}
      />
    </div>
  );
}
