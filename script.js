//scroll on horisontal
gsap.registerPlugin(ScrollTrigger);
const totalWidth = 6530

gsap.to("#page", {
  x: -totalWidth,
  ease: "none",
  scrollTrigger: {
    trigger: "#page",
    pin: true,
    scrub: 1,
    end: () => "+=" + (totalWidth),
}
});

//fetch du json