function navAnimation() {
  let nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", () => {
    let tl = gsap.timeline();
    tl.to("#nav-bottom", {
      height: "26vh",
      duration: 0.5,
    });

    tl.to("nav .nav-elem h5", {
      display: "block",
      duration: 0.1,
    });

    tl.from("nav .nav-elem h5 span", {
      y: 20,
      stagger: {
        amount: 0.3,
      },
    });
  });

  nav.addEventListener("mouseleave", () => {
    let tl = gsap.timeline();
    //   tl.to("#nav-bottom", {
    //     height: "0vh",
    //   });

    // tl.to("nav .nav-elem h5 span", {
    //   y: 25,
    //   stagger: {
    //     amount: 0.2,
    //   },
    // });
    tl.to("nav .nav-elem h5", {
      display: "none",
      duration: 0.1,
    });

    tl.to("#nav-bottom", {
      height: "0vh",
      duration: 0.2,
    });
  });
}


navAnimation();
