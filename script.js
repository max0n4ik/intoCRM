document.addEventListener('DOMContentLoaded', () => {

    'use strict';

    var typed = new Typed('.second_row', {
        strings: ['просто, ^800 удобно, ^500 эффективно'],
        typeSpeed: 60,
    });



    gsap.registerPlugin(ScrollTrigger);


    gsap.to(".paralax", {
        yPercent: 75,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top bottom", // the default values
            end: "bottom top",
            pin: "#red-content",
            markers: true,
            scrub: true

        },
    });

    // gsap.to(".b", {
    //     x: 400,
    //     rotation: 360,
    //     scrollTrigger: {
    //         trigger: ".b",
    //         start: "top center",
    //         end: "top 100px",
    //         scrub: true,
    //         markers: true,
    //         id: "scrub"
    //     }
    // });





});


