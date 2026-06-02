document.addEventListener("mousemove", (dets) => {

    gsap.set("#cursor", {
        x: dets.x,
        y: dets.y
    });

    gsap.to("#cursor-blur", {
        x: dets.x - 200,
        y: dets.y - 200,
        duration: 0.8,
        ease: "power3.out"
    });

});

gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.5,
    height:"100px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to(".main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        start:"top -30%",
        end:"top -80%",
        scrub:3
    }
})
gsap.from("#about img,#about-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about",
    scroller: "body",
    // markers:true,
    start: "top 70%",
    end: "top 65%",
    scrub: 5,
  },
});
gsap.from(".card", {
  scale: 0.8,
  // opacity:0,
  duration: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".card",
    scroller: "body",
    // markers:false,
    start: "top 70%",
    end: "top 65%",
    scrub: 1,
  },
});

gsap.from(".img1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#qoute",
    start: "top 70%",
    end: "top 50%",
    scrub: 2,
  },
});

gsap.from(".img2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#qoute",
    start: "top 70%",
    end: "top 50%",
    scrub: 2,
  },
});

gsap.from("#food-bio img", {
  x: -100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#food-bio",
    scroller: "body",
    start: "top 70%",
    end: "top 50%",
    scrub: 3
  }
});

gsap.from("#food-content", {
  x: 100,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#food-bio",
    scroller: "body",
    start: "top 70%",
    end: "top 50%",
    scrub: 3
  }
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers:true,
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  },
});