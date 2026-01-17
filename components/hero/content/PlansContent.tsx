import FadeUp from "@/components/motion/FadeUp";

export default function PlansContent() {
  return (
    <>
      <FadeUp>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Nossos planos
        </h1>
      </FadeUp>

      <FadeUp delay={0.1}>
        <p className="text-zinc-300">
          Escolha o plano ideal para sua casa ou empresa.
        </p>
      </FadeUp>
    </>
  );
}
