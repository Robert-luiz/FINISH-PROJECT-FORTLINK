import FadeUp from "@/components/motion/FadeUp";

const PRINCIPLES = [
  {
    title: "Missão",
    description:
      "Levar Internet de alta qualidade, com estabilidade, velocidade e suporte humano.",
  },
  {
    title: "Visão",
    description:
      "Ser referência regional em conectividade e confiança no atendimento.",
  },
  {
    title: "Valores",
    description:
      "Inovação, foco no cliente, integridade e transparência em tudo que fazemos.",
  },
];

export default function AboutUsContent() {
  return (
    <div className="w-full relative grid grid-cols-1 xl:grid-cols-[1.1fr_1fr] gap-10 max-w-200">
      <div className="relative md:max-w-95">
        <div className="absolute -inset-1 rounded-xl bg-nexus-primary/20 blur-xl opacity-25 pointer-events-none" />

        <div className="relative rounded-xl border border-[#05de31]/70 shadow-[0_0_20px_rgba(74,222,128,0.35)] bg-black/40 backdrop-blur-md px-5 py-4 space-y-4 lg:space-y-8">
          <FadeUp>
            <div className="flex items-center gap-2 text-nexus-primary">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-nexus-primary/40 bg-nexus-primary/10">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 12h16M12 4v16"
                  />
                </svg>
              </div>

              <h1 className="text-lg md:text-xl font-semibold tracking-wide">
                Quem somos
              </h1>
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-[13px] text-zinc-300 leading-snug">
              Fundada em{" "}
              <span className="text-nexus-primary font-medium">2017</span>, a
              Fortlink nasceu para levar Internet de alta velocidade ao Jardim
              Coronel, em Itanhaém.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-[13px] text-zinc-300 leading-snug">
              Somos a{" "}
              <span className="text-nexus-primary font-medium">
                primeira provedora licenciada pela Anatel
              </span>{" "}
              com tecnologia de{" "}
              <span className="text-nexus-primary font-medium">
                fibra óptica
              </span>
              .
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-[13px] text-zinc-300 leading-snug">
              Prezamos por estabilidade, desempenho real e atendimento humano.
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <div className="border-l-2 border-nexus-primary pl-3 mt-2">
              <p className="text-[13px] font-semibold tracking-wide text-zinc-200">
                <span className="text-nexus-primary">FORTLINK</span> é compromisso
                com qualidade e velocidade.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>


      <div className="flex flex-col justify-center gap-6 w-full md:max-w-95 lg:w-full">
        <p className="hidden lg:block text-[11px] tracking-[0.3em] text-white/40 mb-2">
          NOSSOS PILARES
        </p>

        {PRINCIPLES.map((item, index) => (
          <FadeUp key={item.title} delay={0.1 * (index + 1)}>
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-3">
              <h3 className="text-sm font-semibold tracking-wide text-nexus-primary mb-1">
                {item.title}
              </h3>
              <p className="text-[12.5px] text-zinc-300 leading-snug">
                {item.description}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
