function init() {
  const timeLine = gsap.timeline({
    duration: 0.5,
  });

  timeLine.to(".bar", { x: "100%" })
    .to(".loading", { y: "-100%" })
    .to(".main-box", { x: "100%" })
    .from(".main-img img", { scale: 1.5 }, "-=.5")
    .from(".main-btn", { opacity: 0 })
    .from("nav", { y: "-100%" }, "-=.3")
    .from(".about", { opacity: 0 })
    .from(".squares", { opacity: 0 });
}

window.addEventListener("load", function () {
  init();
});
