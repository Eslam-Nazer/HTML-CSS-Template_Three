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
}, 1000);
