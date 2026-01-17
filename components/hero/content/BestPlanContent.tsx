import FadeUp from "@/components/motion/FadeUp";

export default function BestPlanContent() {
  return (
    <>
      <FadeUp>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Plano recomendado
        </h1>
      </FadeUp>

      <FadeUp delay={0.1}>
        <p className="text-zinc-300">
          O plano com melhor custo-benefício para quem não quer se preocupar.
        </p>
      </FadeUp>
    </>
  );
}
