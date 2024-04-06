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

function imageMousepart2() {
  let rightElems = document.querySelectorAll(".right-elem");
  rightElems.forEach(function (elem) {
    // mouse enter of image
    elem.addEventListener("mouseenter", () => {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });

    // mouse leave of image
    elem.addEventListener("mouseleave", () => {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });

    elem.addEventListener("mousemove", (dets) => {
      gsap.to(elem.childNodes[3], {
        x: dets.x - elem.getBoundingClientRect().x - 80,
        y: dets.y - elem.getBoundingClientRect().y - 100,
      });
    });
  });
}

function videoPlay() {
  let page3Center = document.querySelector(".page3-center");
  let videoElem = document.querySelector("#page3 video");

  page3Center.addEventListener("click", () => {
    videoElem.play();

    gsap.to(videoElem, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
      zIndex: 1000,
    });
  });

  videoElem.addEventListener("click", () => {
    videoElem.pause();

    gsap.to(videoElem, {
      transform: "scaleX(0.7) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
      zIndex: 1000,
    });
  });


}

// navAnimation();
imageMousepart2();
videoPlay();
