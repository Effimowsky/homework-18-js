// Homework-1

function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var midday = "AM";
  midday = hour >= 12 ? "PM" : "AM";
  hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("clock").innerText =
    hour + ":" + min + ":" + sec + "" + midday;
  var t = setTimeout(currentTime, 1000);
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}

currentTime();

// Homework--2-3

let index = 1;
let millis = 2000;
let interval;

startSlides();

function startSlides() {
  pauseSlides();
  nextSlide();
  interval = setInterval(nextSlide, millis);
}

function resumeSlides() {
  nextSlide();
}

function pauseSlides() {
  clearInterval(interval);
}

function nextSlide() {
  showSlide();
  index++;
}

function plusSlides(n) {
  clearInterval(interval);
  index += n;
  nextSlide();
  interval = setInterval(nextSlide, millis);
}

function currentSlide(n) {
  clearInterval(interval);
  index = n + 1;
  nextSlide();
  interval = setInterval(nextSlide, millis);
}

function showSlide() {
  let i;
  const slides = document.getElementsByClassName("slider-item");
  const dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (index > slides.length) {
    index = 1;
  }
  if (index < 1) {
    index = slides.length;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[index - 1].style.display = "block";
  dots[index - 1].className += " active";
}

// Homnework-4

let k = 4;

const students = [-1, -3, 4, 2];

function angryProfessor(k, student) {
  let onTime = student.filter(function (value) {
    return value < 1;
  });
  if (onTime.length < k) {
    return "Yes";
  } else {
    return "No";
  }
}
console.log(angryProfessor(k, students));
