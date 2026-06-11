// Ativando o plugin ScrollTrigger do GSAP
gsap.registerPlugin(ScrollTrigger);

// Criando a linha do tempo da animação baseada no scroll
gsap.to("#drone", {
    scrollTrigger: {
        trigger: "body",       // O gatilho é o corpo da página inteira
        start: "top top",      // Começa no topo
        end: "bottom bottom",  // Termina no final da página
        scrub: 1.5,            // Faz a animação "perseguir" o scroll do mouse suavemente (1.5 segundos de atraso)
    },
    // O caminho que o drone vai fazer:
    x: window.innerWidth + 200, // Move horizontalmente até sair pelo lado direito
    y: "50vh",                  // Desce até o meio da tela
    scale: 1.5,                 // Dá um leve zoom para parecer que se aproximou
    rotation: 15                // Inclina um pouco para frente durante o voo
});