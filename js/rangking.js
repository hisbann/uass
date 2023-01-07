let tl = gsap.timeline();
tl.to(".loader-regis", {
  width: 0,
  height: 0,
  duration: 0.5,
});
tl.to(".loader-regis", {
  width: "2000px",
  height: "2000px",
  duration: 0.5,
});
tl.to(".loader-regis", {
  width: 0,
  height: 0,
  duration: 0.5,
});
tl.from(".wrapper-regis", {
  opacity: 0,
  duration: 0.5,
  delay: 0.3,
});
gsap.from("header", {
  opacity: 0,
  duration: 1,
  delay: 2,
});
gsap.from(".container-rangkings", { 
    opacity: 0,
    duration: .5,
    delay: 1.5
});
gsap.from(".container-header", { 
    opacity: 0,
    duration: .5,
    delay: 1.5
});

const navbar = document.getElementById("nav");
const toTop = document.getElementById("totop");

const navMoble = document.getElementById('nav-mobile');
const hamburger = document.getElementById('hamburger-menu');
const handleNav = document.querySelectorAll('.handle')

hamburger.addEventListener('click', function() {
  navMoble.classList.toggle('transform-nav')
});

window.addEventListener('click', function(e) {
  if (e.target != navMoble) {
    hamburger.classList.remove('transform-nav');
  }
});

function handleClick() {
  navMoble.classList.remove('transform-nav');
}