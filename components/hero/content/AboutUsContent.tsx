"use client";

import FadeUp from "@/components/motion/FadeUp";
import FadeIn from "@/components/motion/FadeIn";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const PRINCIPLES = [
  {
    title: "Missão",
    description:
      "Levar Internet de alta qualidade, com estabilidade, velocidade e suporte humano.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <circle
          cx="24"
          cy="24"
          r="20"
          stroke="#05de31"
          strokeWidth="2"
          strokeDasharray="3 3"
        />
        <path
          d="M14 24L20 30L34 18"
          stroke="#05de31"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="24" r="3" fill="#05de31" />
      </svg>
    ),
  },
  {
    title: "Visão",
    description:
      "Ser referência regional em conectividade e confiança no atendimento.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path
          d="M2 24C2 24 10 10 24 10C38 10 46 24 46 24C46 24 38 38 24 38C10 38 2 24 2 24Z"
          stroke="#05de31"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="24" r="7" stroke="#05de31" strokeWidth="2" />
        <circle cx="24" cy="24" r="3" fill="#05de31" />
        <path
          d="M38 10L42 6"
          stroke="#05de31"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M42 38L38 34"
          stroke="#05de31"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Valores",
    description:
      "Inovação, foco no cliente, integridade e transparência em tudo que fazemos.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8">
        <path
          d="M24 4L29 18H44L32 27L37 41L24 32L11 41L16 27L4 18H19L24 4Z"
          stroke="#05de31"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="24" r="4" fill="#05de31" opacity="0.6" />
        <path
          d="M20 22L22 26L28 20"
          stroke="#05de31"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const TIMELINE_DATA = [
  { year: "2017", text: "Fundação da Fortlink no Jardim Coronel, Itanhaém" },
  { year: "2019", text: "Expansão para novos bairros com fibra óptica" },
  { year: "2021", text: "Melhoria de infraestrutura" },
  { year: "Hoje", text: "Referência regional em velocidade e atendimento" },
];

const TEAM = [
  {
    department: "CEO",
    featured: true,
    description:
      "Responsável pela liderança, estratégia e crescimento da Fortlink.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
      >
        <path
          d="M12 3l2.4 4.86L20 8.7l-4 3.9.94 5.5L12 15.5l-4.94 2.6L8 12.6 4 8.7l5.6-.84L12 3z"
          strokeLinejoin="round"
        />
        <path d="M12 15v6" strokeLinecap="round" />
      </svg>
    ),
    employees: [
      {
        name: "ALEXANDRE",
        role: "",
        photo: "/AlexandreAlves.jpg",
      },
    ],
  },

  {
    department: "Supervisor",
    description:
      "Responsável pela coordenação das equipes e pelo acompanhamento das operações.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
      >
        <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    employees: [
      {
        name: "LEANDRO",
        role: "Supervisor",
        photo: "/Leandro.jpg",
      },
    ],
  },

  {
    department: "Líderes de Equipe",
    description:
      "Responsável pela análise, acompanhamento e melhoria dos nossos serviços.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
      >
        <path d="M3 3v18h18" strokeLinecap="round" />
        <path
          d="M7 16l4-5 3 3 5-7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    employees: [
      {
        name: "WESLLEN",
        role: "Líder Suporte Técnico",
        photo: "/Wesllen.jpg",
      },
      {
        name: "BARBARA",
        role: "Líder Comercial",
        photo: "/Barbara.jpg",
      },
    ],
  },

  {
    department: "Comercial",
    description:
      "Nossa equipe comercial está pronta para encontrar a melhor solução para você.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
      >
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M19 8v6M22 11h-6" strokeLinecap="round" />
      </svg>
    ),
    employees: [
      {
        name: "ALESSANDRA",
        role: "Atendente Comercial",
        photo: "/Alessandra.jpg",
      },
      {
        name: "ANDREZA",
        role: "Atendente Comercial",
        photo: "/Andreza.jpg",
      },
      {
        name: "GRACY",
        role: "Atendente Comercial",
        photo: "/Gracy.jpg",
      },
    ],
  },
  {
    department: "Suporte",
    description: "Atendimento humano para ajudar você sempre que precisar.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
      >
        <path d="M21 15a4 4 0 01-4 4H8l-5 3V7a4 4 0 014-4h10a4 4 0 014 4v8z" />
        <path d="M8 10h8M8 14h5" strokeLinecap="round" />
      </svg>
    ),
    employees: [
      {
        name: "ROBERT",
        role: "Atendente de Suporte",
        photo: "/Robert.jpg",
      },
      {
        name: "JIM",
        role: "Atendente de Suporte",
        photo: "/Jim.jpg",
      },
      {
        name: "VITORIA",
        role: "Atendente de Suporte",
        photo: "/Vitoria.jpg",
      },
    ],
  },
  {
    department: "Técnico",
    description:
      "Nossa equipe técnica garante que sua conexão funcione com qualidade e estabilidade.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
      >
        <path
          d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 005.4-5.4l-2.1 2.1-2.8-.7-.7-2.8 2.1-2.1z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    employees: [
      {
        name: "DOUGLAS",
        role: "Técnico de Rede",
        photo: "/Douglas.jpg",
      },
      {
        name: "LUCAS SANTOS",
        role: "Técnico de Rede",
        photo: "/Lucas.jpg",
      },
      {
        name: "EVERTON",
        role: "Técnico de Fibra Óptica",
        photo: "/Everton.jpg",
      },
      {
        name: "LUCAS ALMEIDA",
        role: "Técnico de Fibra Óptica",
        photo: "/LucasAlmeida.jpg",
      },
      {
        name: "EDUARDO",
        role: "Técnico de Fibra Óptica",
        photo: "/Eduardo.jpg",
      },
      {
        name: "JONATAS",
        role: "Técnico de Fibra Óptica",
        photo: "/Jonatas.jpg",
      },
    ],
  },
  {
    department: "Almoxarifado",
    description:
      "Responsável pela organização, controle e disponibilidade dos materiais e equipamentos.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
      >
        <path d="M3 7l9-4 9 4-9 4-9-4z" />
        <path d="M3 7v10l9 4 9-4V7" />
        <path d="M12 11v10" />
        <path d="M7 5l9 4" />
      </svg>
    ),
    employees: [
      {
        name: "JUSLEY",
        role: "Responsável pelo Estoque",
        photo: "/Jusley.jpg",
      },
    ],
  },
];

export default function AboutUsContent() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="w-full relative space-y-12 pb-10 lg:max-w-[calc(100%-80px)] ">
      <FadeIn delay={0}>
        <div className="flex flex-col justify-center desktop:flex-row gap-8 w-full p-4">
          <div className="relative flex w-full justify-center order-2 desktop:order-1">
            <div className="absolute -inset-1 rounded-2xl bg-nexus-primary/20 blur-xl opacity-25 pointer-events-none" />

            <div className="relative flex justify-center">
              <div className="absolute -inset-1 rounded-2xl bg-[#05de31]/20 blur-xl opacity-25 pointer-events-none" />

              <div className="group relative w-full lg:w-sm aspect-9/16 rounded-2xl overflow-hidden border border-[#05de31]/40 shadow-[0_0_30px_rgba(74,222,128,0.15)] bg-black">
                <video
                  ref={videoRef}
                  className="h-full w-full object-cover"
                  src="/video/historia.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                />

                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-end gap-2 p-4 bg-linear-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-[#05de31] hover:text-black"
                    aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                  >
                    {isPlaying ? (
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="currentColor"
                      >
                        <rect x="6" y="5" width="4" height="14" rx="1" />
                        <rect x="14" y="5" width="4" height="14" rx="1" />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 ml-0.5"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-[#05de31] hover:text-black"
                    aria-label={isMuted ? "Ativar som" : "Desativar som"}
                  >
                    {isMuted ? (
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M11 5L6 9H3v6h3l5 4V5z" />
                        <path d="M17 9l4 6M21 9l-4 6" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M11 5L6 9H3v6h3l5 4V5z" />
                        <path
                          d="M15 9a4 4 0 010 6M18 6a8 8 0 010 12"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/3 backdrop-blur-md p-2 desktop:p-6 overflow-hidden oder-1 desktop:order-2">
            <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-[#05de31]/10 blur-3xl pointer-events-none" />

            <div className="relative flex items-center gap-3 mb-7">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-nexus-primary/40 bg-nexus-primary/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#05de31"
                  strokeWidth="2"
                  className="w-5 h-5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" strokeLinecap="round" />
                </svg>
              </div>

              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                  Nossa História
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 mt-1">
                  Uma trajetória construída com conexão e evolução.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-2 bottom-2 -translate-x-1/2 w-px bg-linear-to-b from-[#05de31]/10 via-[#05de31]/70 to-[#05de31]/10 " />

              <div className="space-y-7 md:space-y-8">
                {TIMELINE_DATA.map((item, i) => (
                  <FadeUp key={item.year} delay={0.1 * i}>
                    <div className="relative grid grid-cols-[1fr_42px_1fr] items-center min-h-18">
                      <div
                        className={`text-right pr-5 ${i % 2 === 0 ? "col-start-1" : "col-start-3 text-left pl-5 pr-0"}`}
                      >
                        <span className=" text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-linear-to-r from-[#05de31] to-[#4ade80]">
                          {item.year}
                        </span>
                        <p className="mt-1 text-xs md:text-sm text-zinc-300 leading-relaxed">
                          {item.text}
                        </p>
                      </div>

                      <div className="col-start-2 row-start-1 flex justify-center z-10">
                        <motion.div
                          className=" hidden notebook:block w-4 h-4 rounded-full bg-[#05de31] shadow-[0_0_15px_rgba(74,222,128,0.8)] border-[3px] border-[#08100a]"
                          whileHover={{ scale: 1.4 }}
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut",
                          }}
                        />
                      </div>

                      <div
                        className={`row-start-1 ${i % 2 === 0 ? "col-start-3" : "col-start-1"}`}
                      />
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/*QUEM SOMOS */}
      <FadeUp delay={0.15}>
        <div className="relative w-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-nexus-primary/40 bg-nexus-primary/10">
              <svg
                className="h-5 w-5"
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

            <h2 className="text-xl md:text-2xl font-bold tracking-wide">
              Quem somos
            </h2>
          </div>

          <div className="flex flex-wrap desktop:flex-col gap-4">
            <FadeUp delay={0.2}>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 h-full">
                <div className="mt-1 w-10 h-10 rounded-lg bg-[#05de31]/15 flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#05de31"
                    strokeWidth="2"
                    className="w-6 h-6"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </div>

                <p className="text-sm md:text-[15px] text-zinc-300 leading-relaxed pt-1">
                  Fundada em{" "}
                  <span className="text-nexus-primary font-bold">2017</span>, a
                  Fortlink nasceu para levar Internet de alta velocidade ao
                  Jardim Coronel, em Itanhaém.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 h-full">
                <div className="mt-1 w-10 h-10 rounded-lg bg-[#05de31]/15 flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#05de31"
                    strokeWidth="2"
                    className="w-6 h-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path
                      d="M9 12l2 2 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <p className="text-sm md:text-[15px] text-zinc-300 leading-relaxed pt-1">
                  Somos a{" "}
                  <span className="text-nexus-primary font-bold">
                    primeira provedora licenciada pela Anatel
                  </span>{" "}
                  com tecnologia de{" "}
                  <span className="text-nexus-primary font-bold">
                    fibra óptica
                  </span>
                  .
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 h-full">
                <div className="mt-1 w-10 h-10 rounded-lg bg-[#05de31]/15 flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#05de31"
                    strokeWidth="2"
                    className="w-6 h-6"
                  >
                    <circle cx="12" cy="7" r="4" />
                    <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                    <path
                      d="M17 11l2 2 4-4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <p className="text-sm md:text-[15px] text-zinc-300 leading-relaxed pt-1">
                  Prezamos por estabilidade, desempenho real e atendimento
                  humano.
                </p>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.35}>
            <div className="mt-4 border-l-4 border-nexus-primary pl-4 py-3 bg-linear-to-r from-[#05de31]/10 to-transparent rounded-r-lg">
              <p className="text-sm md:text-[15px] font-bold tracking-wide text-zinc-100 leading-relaxed">
                <span className="text-nexus-primary text-base md:text-lg">
                  FORTLINK
                </span>{" "}
                é compromisso com qualidade e velocidade.
              </p>
            </div>
          </FadeUp>
        </div>
      </FadeUp>

      {/* nossos pilares */}
      <FadeIn delay={0.3}>
        <div>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-nexus-primary/40 bg-nexus-primary/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#05de31"
                  strokeWidth="2"
                  className="w-5 h-5"
                >
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 0.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                Nossos Pilares
              </h3>
            </div>

            <span className="hidden md:inline-block text-[11px] tracking-[0.3em] text-white/40 uppercase">
              Missão • Visão • Valores
            </span>
          </div>

          <div className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-5 md:gap-6">
            {PRINCIPLES.map((item, index) => (
              <FadeUp key={item.title} delay={0.1 * index}>
                <motion.div
                  className="group relative h-full rounded-2xl border border-white/10 bg-linear-to-br from-white/5 via-white/3 to-transparent backdrop-blur-md p-6 md:p-7 overflow-hidden hover:border-[#05de31]/50 transition-all duration-500"
                  whileHover={{ y: -6 }}
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#05de31]/0 group-hover:bg-[#05de31]/20 blur-3xl transition-all duration-500" />

                  <div className="relative z-10 space-y-4">
                    <motion.div
                      className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#05de31]/20 to-[#05de31]/5 border border-[#05de31]/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
                      animate={index % 2 === 0 ? { y: [0, -3, 0] } : {}}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {item.icon}
                    </motion.div>

                    <h4 className="text-lg md:text-xl font-bold tracking-wide text-nexus-primary">
                      {item.title}
                    </h4>

                    <div className="h-0.5 w-12 bg-linear-to-r from-[#05de31] to-transparent rounded-full" />

                    <p className="text-sm md:text-[15px] text-zinc-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={0.35}>
        <div className="relative">
          {/* TÍTULO */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-nexus-primary/40 bg-nexus-primary/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#05de31"
                    strokeWidth="2"
                    className="w-5 h-5"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M17 11a4 4 0 100-8" />
                    <path d="M22 21v-2a4 4 0 00-3-3.87" />
                  </svg>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                  Nossa Equipe
                </h3>
              </div>

              <p className="text-sm text-zinc-400 mt-2 ml-12">
                Pessoas que fazem a Fortlink acontecer todos os dias.
              </p>
            </div>

            <span className="hidden md:inline-block text-[11px] tracking-[0.3em] text-white/40 uppercase">
              Nosso time • Nossa força
            </span>
          </div>

          <div className="space-y-10">
            {TEAM.map((department, departmentIndex) => (
              <FadeUp
                key={department.department}
                delay={department.featured ? 0.1 : 0.08 * departmentIndex}
              >
                <div
                  className={`group relative rounded-2xl backdrop-blur-md p-5 md:p-7 overflow-hidden transition-all duration-500 ${
                    department.featured
                      ? "direction-glow border-2 border-[#05de31]/60 bg-linear-to-br from-[#05de31]/15 via-white/5 to-transparent"
                      : "border border-white/10 bg-linear-to-br from-white/5 via-white/3 to-transparent"
                  }`}
                >
                  {/* Glow externo */}
                  {department.featured && (
                    <>
                      <div className="direction-pulse pointer-events-none absolute -inset-10 rounded-full bg-[#05de31]/10 blur-3xl" />

                      {/* Anel orbital */}
                      <div className="pointer-events-none absolute left-1/2 top-1/2 h-70 w-70 -translate-x-1/2 -translate-y-1/2 md:h-90 md:w-90">
                        <div className="direction-orbit absolute inset-0 rounded-full border border-[#05de31]/10">
                          <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#05de31] shadow-[0_0_15px_#05de31]" />
                        </div>

                        <div
                          className="direction-orbit absolute inset-6 rounded-full border border-[#05de31]/5"
                          style={{
                            animationDuration: "18s",
                            animationDirection: "reverse",
                          }}
                        >
                          <span className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#4ade80] shadow-[0_0_12px_#4ade80]" />
                        </div>
                      </div>
                    </>
                  )}
                  {/* Glow superior */}
                  {department.featured && (
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                      {/* Glow central */}
                      <div className="absolute left-1/2 top-[55%] h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#05de31]/10 blur-[100px]" />

                      {/* Órbita 1 */}
                      <div className="direction-orbit absolute left-1/2 top-[55%] h-90 w-90 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#05de31]/10">
                        <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#05de31] shadow-[0_0_18px_#05de31]" />
                      </div>

                      {/* Órbita 2 inclinada */}
                      <div
                        className="direction-orbit absolute left-1/2 top-[55%] h-75 w-110 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#05de31]/10"
                        style={{
                          transform: "translate(-50%, -50%) rotate(55deg)",
                          animationDuration: "16s",
                        }}
                      >
                        <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#4ade80] shadow-[0_0_18px_#4ade80]" />
                      </div>

                      {/* Órbita 3 */}
                      <div
                        className="direction-orbit absolute left-1/2 top-[55%] h-75 w-110 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#05de31]/5"
                        style={{
                          transform: "translate(-50%, -50%) rotate(-55deg)",
                          animationDuration: "20s",
                          animationDirection: "reverse",
                        }}
                      >
                        <span className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#05de31] shadow-[0_0_15px_#05de31]" />
                      </div>

                      {/* Partículas */}
                      <span className="absolute left-[18%] top-[35%] h-1 w-1 rounded-full bg-[#05de31]/70 shadow-[0_0_10px_#05de31]" />
                      <span className="absolute right-[18%] top-[42%] h-1.5 w-1.5 rounded-full bg-[#4ade80]/60 shadow-[0_0_12px_#4ade80]" />
                      <span className="absolute left-[25%] bottom-[25%] h-1 w-1 rounded-full bg-[#05de31]/50" />
                      <span className="absolute right-[25%] bottom-[30%] h-1 w-1 rounded-full bg-[#05de31]/50" />
                    </div>
                  )}
                  <div
                    className={`relative ${
                      department.featured
                        ? "flex flex-col items-center text-center"
                        : "flex items-start gap-4"
                    }`}
                  >
                    <motion.div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#05de31]/10 border border-[#05de31]/30 text-[#05de31] ${
                        department.featured ? "mb-4" : ""
                      }`}
                      animate={
                        department.featured
                          ? {
                              scale: [1, 1.08, 1],
                              rotate: [0, 2, -2, 0],
                            }
                          : {}
                      }
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {department.icon}
                    </motion.div>

                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-white">
                        {department.department}
                      </h4>

                      <p
                        className={`text-xs md:text-sm text-zinc-400 mt-1 max-w-2xl ${
                          department.featured ? "mx-auto" : ""
                        }`}
                      >
                        {department.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`relative grid gap-5 ${
                      department.featured
                        ? "grid-cols-1 max-w-xs mx-auto mt-8"
                        : department.employees.length === 1
                          ? "grid-cols-1 max-w-sm mx-auto mt-7"
                          : department.employees.length === 2
                            ? "grid-cols-2 max-w-md mx-auto mt-7 justify-items-center"
                            : "grid-cols-2 tablet:grid-cols-2 desktop:grid-cols-3 mt-7 justify-items-center"
                    }`}
                  >
                    {department.employees.map((employee, employeeIndex) => (
                      <motion.div
                        key={employee.name}
                        className="group/card relative overflow-hidden hover:border-[#05de31]/60 transition-all duration-300"
                        initial={{
                          opacity: 0,
                          y: 12,
                          scale: 0.94,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.15,
                        }}
                        transition={{
                          duration: 0.7,
                          delay: employeeIndex * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <div
                          className={`relative aspect-square rounded-full overflow-hidden bg-zinc-900 ${
                            department.featured
                              ? "w-48 desktop:w-xs mx-auto"
                              : "w-32 desktop:max-w-36 mx-auto"
                          }`}
                        >
                          <img
                            src={employee.photo}
                            alt={employee.name}
                            className="h-full w-full object-cover grayscale-20 transition-all duration-500 group-hover/card:scale-105 group-hover/card:grayscale-0"
                          />

                          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-70" />

                          <div className="absolute inset-0 bg-[#05de31]/0 group-hover/card:bg-[#05de31]/10 transition-colors duration-500" />

                          {/* Brilho passando pela foto */}
                          {department.featured && (
                            <motion.div
                              className="absolute inset-y-0 -left-1/2 w-1/3 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
                              animate={{
                                x: ["0%", "500%"],
                              }}
                              transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut",
                              }}
                            />
                          )}
                        </div>

                        <div className="p-3 md:p-4 text-center">
                          <h5 className="text-sm md:text-[15px] font-bold text-white truncate">
                            {employee.name}
                          </h5>

                          <p className="text-[11px] md:text-xs text-[#05de31] mt-1 truncate">
                            {employee.role}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
