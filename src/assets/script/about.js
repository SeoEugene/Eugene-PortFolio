
const horizontal = document.querySelector("#horizontal");
const sections = gsap.utils.toArray("#horizontal > section");

// gsap.to(sections, {
//     xPercent: -100 * (sections.length - 1),
//     ease: "none",
//     scrollTrigger: {
//         trigger: horizontal,
//         start: "top top",
//         end: () => "+=" + (horizontal.offsetWidth - innerWidth),
//         pin: true,
//         scrub: 1,
//         invalidateOnRefresh: true,
//         anticipatePin: 1

//     }
// })

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: horizontal,
        start: "top top",
        end: () => "+=" + (horizontal.offsetWidth - innerWidth),
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1
    }
});

sections.forEach((section, index) => {
    tl.to(section, {
        xPercent: -100 * index,
        ease: "none"
    });
});