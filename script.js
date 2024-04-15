let flag1 = true;
let flag2 = true;

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

function page3VideoPlay() {
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
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
      zIndex: 0,
    });
  });
}

function page6Animation() {
  let sections = document.querySelectorAll(".sec-right");
  sections.forEach(function (elem) {
    // console.log(elem.childNodes[5]);
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();

      gsap.to(elem.childNodes[5], {
        opacity: 1,
        scale: 1,
      });
    });

    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].load();

      gsap.to(elem.childNodes[5], {
        opacity: 0,
        scale: 0,
      });
    });

    elem.addEventListener("mousemove", (dets) => {
      gsap.to(elem.childNodes[5], {
        x: dets.x - elem.getBoundingClientRect().x - 80,
        y: dets.y - elem.getBoundingClientRect().y - 100,
      });
    });
  });
}

function page7Animation() {
  let innerDiv = document.querySelectorAll(".inner-box");
  innerDiv.forEach(function (elem) {
    console.log(elem.childNodes[3].childNodes[3]);
    // console.log(elem.childNodes[1].childNodes[3]);

    elem.addEventListener("mouseenter", function () {
      elem.childNodes[3].style.height = "100%";
      elem.childNodes[1].style.height = "20%";
      elem.childNodes[3].childNodes[3].style.opacity = 1;
      elem.childNodes[3].childNodes[3].play();
      elem.childNodes[1].childNodes[3].style.opacity = 0;
    });

    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.height = "45%";
      elem.childNodes[1].style.height = "55%";
      elem.childNodes[3].childNodes[3].load();
      elem.childNodes[3].childNodes[3].style.opacity = 1;
      elem.childNodes[1].childNodes[3].style.opacity = 1;
    });
  });
}

function page9Toggle(){

  function page9Toggle1() {
    document.querySelector(".toggle").innerHTML = `
                       <h1>UI UX Design</h1>
                      <i class="ri-arrow-drop-down-line"></i>
        `;
    flag1 = false;
    document.querySelector(".toggle").addEventListener("click", function (elem) {
      console.log(elem);
      if (flag1) {
        document.querySelector(".toggle").innerHTML = `
                       <h1>UI UX Design</h1>
                      <i class="ri-arrow-drop-down-line"></i>
        `;
        flag1 = false;
      } else {
        document.querySelector(".toggle").innerHTML = `
                      <h1>UI UX Design</h1>
                      <i class="ri-arrow-drop-up-line"></i>
        `;
        flag1 = true;
      }
    });
  }
  
  function page9Toggle2() {
    document.querySelector(".toggle1").innerHTML = `
                       <h1>Product Design</h1>
                      <i class="ri-arrow-drop-down-line"></i>
        `;
    flag1 = false;
    document.querySelector(".toggle1").addEventListener("click", function (elem) {
      console.log(elem);
      if (flag1) {
        document.querySelector(".toggle1").innerHTML = `
                       <h1>Product Design</h1>
                      <i class="ri-arrow-drop-down-line"></i>
        `;
        flag1 = false;
      } else {
        document.querySelector(".toggle1").innerHTML = `
                      <h1>Product Design</h1>
                      <i class="ri-arrow-drop-up-line"></i>
        `;
        flag1 = true;
      }
    });
  }
  page9Toggle1();
  page9Toggle2();

}


// navAnimation();
imageMousepart2();
page3VideoPlay();
page6Animation();
page7Animation();
page9Toggle();
