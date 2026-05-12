"use client";
import React, { useEffect } from "react";

interface FloatingWhatsAppButtonProps {
  onClick?: () => void;
}

export default function FloatingWhatsAppButton({}: FloatingWhatsAppButtonProps) {
  useEffect(() => {
    const globalWindow = window as any;

    // Inicializa a fila do webchat caso não exista
    globalWindow.webchat = globalWindow.webchat || function() {
      (globalWindow.webchat.q = globalWindow.webchat.q || []).push(arguments);
    };

    // Cria e insere a tag script dinamicamente
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://fortlink.sz.chat/webchat/v2/webchat.js';

    const firstScript = document.getElementsByTagName('script')[0];
    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    // Configura o widget da Fortlink
    globalWindow.webchat('cid', '69f3713575ef679905fb6367');
    globalWindow.webchat('host', 'https://fortlink.sz.chat');
    globalWindow.webchat('background', '#05de31');

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://fortlink.sz.chat') return;
    };

    window.addEventListener("message", handleMessage, false);

    // Limpeza ao desmontar o componente
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    //   className="
    null
  );
}
