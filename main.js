AOS.init();

const navbar = document.getElementById("nav");
const toTop = document.getElementById("totop");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 20) {
    navbar.classList.add("blur");
    toTop.style.visibility = "visible";
  } else {
    navbar.classList.remove("blur");
    toTop.style.visibility = "hidden";
  }
});

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



const endTime = new Date(); 
endTime.setHours(endTime.getHours() + 60); 

setInterval(function () {
  const currentTime = new Date();

  let timeRemaining = endTime - currentTime;

  let hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  let minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (timeRemaining < 0) {
    document.getElementById("hours").innerHTML = "0";
    document.getElementById("minutes").innerHTML = "0";
    document.getElementById("seconds").innerHTML = "0";
  }
}, 1000);

// const container = document.getElementById("container");
// const jumbo = document.getElementById("jumbo");
// const childImg = document.querySelectorAll(".thumb");

// container.addEventListener("click", function (e) {
//   if (e.target.className == "thumb") {
//     jumbo.src = e.target.src;

//     childImg.forEach(function(tes) {
//         tes.className = 'thumb'
//     })

//     e.target.classList.add("child-active");
//   }
// });
