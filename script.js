
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
        pin: "#red-content",
        markers: true,
        scrub: true

    },
});




const items = document.querySelectorAll(".big_text");

gsap.from(items, {
    textContent: 0,
    duration: 4,
    ease: "power1.in",
    snap: { textContent: 1 },
    stagger: {
        each: 1.0,
        onUpdate: function () {
            this.targets()[0].innerHTML = numberWithCommas(Math.ceil(this.targets()[0].textContent));
        },
    }
});


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}