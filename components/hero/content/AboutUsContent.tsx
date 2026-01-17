import FadeUp from "@/components/motion/FadeUp";

export default function AboutUsContent() {
  return (
    <>
      <FadeUp>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Quem somos
        </h1>
      </FadeUp>

      <FadeUp delay={0.1}>
        <p className="text-zinc-300">
          A Fortlink é um provedor focado em performance, estabilidade e suporte
          humano de verdade.
        </p>
      </FadeUp>
    </>
  );
}
