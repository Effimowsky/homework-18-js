// Homework-1

function startClock() {
  var currentDate = new Date();

  time =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();

  document.getElementById("p").innerHTML = time;

  setTimeout(startClock, 1000);
}

startClock();

// Homework-2
