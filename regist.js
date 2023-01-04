let tl = gsap.timeline();
tl.to(".loader-regis", { 
    width: 0,
    height: 0,
    duration: .5
});
tl.to(".loader-regis", { 
    width: "2000px",
    height: "2000px",
    duration: .5
});
tl.to(".loader-regis", { 
    width: 0,
    height: 0,
    duration: .5
});
tl.from(".wrapper-regis", { 
    opacity: 0,
    duration: .5,
    delay: .3
});


