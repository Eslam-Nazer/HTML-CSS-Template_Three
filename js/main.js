let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval(function () {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;

  // Days
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  // Hours
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // Minutes
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  // Seconds
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

// Animate Width On Scrolling
let skillsSection = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".the-progress span");
// Increase Numbers On Scrolling
let statsSection = document.querySelector(".stats");
let nums = document.querySelectorAll(".stats .number");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= skillsSection.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  if (window.scrollY >= statsSection.offsetTop - 100) {
    if (!started) {
      nums.forEach((num) => {
        numCounter(num);
      });
    }
    started = true;
  }
};
function numCounter(el) {
  let goal = el.dataset.goal;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 1000 / goal);
}
