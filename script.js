

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.clearScrollMemory('manual')

ScrollTrigger.create({
    trigger: ".hero",
    duration: 1,
    start: "top center", // Начало анимации при достижении этой точки
    end: "+=100",
    once: true,
    onEnter: () => new Typed('.second_row', {
        strings: ['просто, ^800 удобно, ^500 эффективно'],
        typeSpeed: 60,
    }),
});

gsap.to("#logo", {
    yPercent: 75,
    scale: 1.2,
    scrollTrigger: {
        trigger: ".hero",
        start: "top bottom", // the default values
        end: "bottom top",
        markers: true,
        scrub: true
    },
});


gsap.from(".number", {
    textContent: 0,
    duration: 2,
    ease: CustomEase.create("custom", "M0,0 C0,0 0.05,0.925 0.05,0.925 0.05,0.925 1,1 1,1 "),
    scrollTrigger: {
        trigger: ".benefit",
        start: "top center", // Начало анимации при достижении этой точки
        end: "+=100",
        markers: true
    },
    snap: { textContent: 1 },

});


gsap.to(".img", {
    x: -900,
    scrollTrigger: {
        trigger: ".license_overflow",
        start: "top center", // Начало анимации при достижении этой точки
        end: "bottom center",
        markers: true,
        scrub: true
    },
});

gsap.to(".license_overflow", {
    y: 100,
    rotation: 10,
    scrollTrigger: {
        trigger: ".license",
        start: "top center", // Начало анимации при достижении этой точки
        end: "bottom center",
        markers: true,
        scrub: true
    },
});
