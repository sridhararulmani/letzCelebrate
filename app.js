let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let solider = document.querySelector(".solider");

let canves = document.querySelector("#confetti");
const jsConfetti = new JSConfetti();

const horn = new Audio();
horn.src = "media/horn.mp3";
const popSound = new Audio();
popSound.src = "media/popSound.m4a";
const wishesSound = new Audio();
wishesSound.src = "media/wishesSound.m4a";
var song = document.getElementById("song");

function wish() {
  horn.play();
  wishesSound.play();
  popSound.play();
  jsConfetti.addConfetti({
    confettiRadius: 4,
    confettiNumber: 600,
  });
}

window.onload = function () {
  song.play().loop;
  setTimeout(wish(), 50000);
};

next.addEventListener("click", function () {
  wish();
  let slides = document.querySelectorAll(".slides");
  solider.appendChild(slides[0]);
});
prev.addEventListener("click", function () {
  wish();
  let slides = document.querySelectorAll(".slides");
  solider.prepend(slides[slides.length - 1]);
});