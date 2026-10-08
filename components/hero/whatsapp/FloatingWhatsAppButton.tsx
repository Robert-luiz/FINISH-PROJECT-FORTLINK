"use client";
import { useEffect } from "react";

interface FloatingWhatsAppButtonProps {
  onClick?: () => void;
}

const WIDGET_SRC = "https://atendimento.sanwesllen.dev.br/chat-widget.js";

export default function FloatingWhatsAppButton({}: FloatingWhatsAppButtonProps) {
  useEffect(() => {
    // Evita inserir o script mais de uma vez
    if (document.querySelector(`script[src="${WIDGET_SRC}"]`)) return;

    // Cria e insere o script do widget de atendimento
    const script = document.createElement("script");
    script.src = WIDGET_SRC;
    script.async = true;
    script.dataset.canal = "cmuzu5bt5000001pcxjfg8wyg";
    script.dataset.cor = "#16A34A";
    script.dataset.corTexto = "#FFFFFF";
    script.dataset.titulo = "Atendimento";
    script.dataset.mensagem = "Precisa de ajuda?";
    script.dataset.posicao = "direita";

    document.body.appendChild(script);
  }, []);

  return null;
}
