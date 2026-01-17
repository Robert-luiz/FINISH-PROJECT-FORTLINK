import FadeUp from "@/components/motion/FadeUp";

export default function InitialContent() {
  return (
    <>
      <FadeUp>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Conectando você ao futuro
        </h1>
      </FadeUp>

      <FadeUp delay={0.1}>
        <p className="text-zinc-300">
          Internet rápida, estável e pensada para você.
        </p>
      </FadeUp>
    </>
  );
}
