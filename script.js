
gsap.registerPlugin(ScrollTrigger);

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

gsap.to(".paralax", {
    yPercent: 75,
    scale: 1.2,
    once: true,
    scrollTrigger: {
        trigger: ".hero",
        start: "top bottom", // the default values
        end: "bottom top",
        markers: true,
        scrub: true
    },
});


const items = document.querySelectorAll(".big_text span");

gsap.from(items, {
    textContent: 0,
    duration: 4,
    ease: Power1.easeIn,
    scrollTrigger: {
        trigger: ".benefit",
        start: "top center", // Начало анимации при достижении этой точки
        end: "+=100",
        markers: true
    },
    snap: { textContent: 1 },
    stagger: 1,
});
