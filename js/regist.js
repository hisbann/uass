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
// gsap.from("header", {
//   opacity: 0,
//   duration: 1,
//   delay: 2,
// });

const pass1 = document.getElementById("password1");
const toolTip = document.getElementById("tooltip");
const toolTip2 = document.getElementById("tooltip2");

pass1.addEventListener("input", function () {
  if (pass1.value.length === 0) {
    toolTip.innerText = "";
    pass1.classList.add("ppp");
    toolTip.style.display = "none";
  } else if (pass1.value.length <= 3) {
    toolTip.innerText = "password tidak boleh kurang dari 3";
    pass1.classList.add("ppp");
    toolTip.style.display = "flex";
  } else if (pass1.value.length >= 3) {
    toolTip.innerText = "";
    pass1.classList.add("requir");
    pass1.classList.remove("ppp");
    toolTip.style.display = "none";
  }
});

const pass2 = document.getElementById("password2");

pass2.addEventListener("input", function () {
  if (pass2.value.length === 0) {
    toolTip2.innerText = "";
    pass2.classList.add("ppp2");
    toolTip2.style.display = "none";
  } else if (pass1.value != pass2.value) {
    toolTip2.innerText = "password tidak sama";
    pass2.classList.add("ppp2");
    toolTip2.style.display = "flex";
  } else if (pass2.value.length >= 3) {
    toolTip2.innerText = "";
    pass2.classList.add("requir");
    pass2.classList.remove("ppp2");
    toolTip2.style.display = "none";
  }
});

const eml = document.getElementById("eml");
eml.addEventListener("input", function () {
  return eml.value.length >= 1 ? eml.classList.add("email-outline") : eml.classList.remove("email-outline");
});
const usernm = document.getElementById("usernm");
usernm.addEventListener("input", function () {
  return usernm.value.length >= 1 ? usernm.classList.add("email-outline") : usernm.classList.remove("email-outline");
});

