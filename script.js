let screen = document.querySelector("#screen");
let btnVal = document.querySelectorAll(".btn");

for (i of btnVal) {
  i.addEventListener("click", (e) => {
    btntext = e.target.innerText;

    screen.value += btntext;
    console.log(screen.value);
  });
}
function percentage() {
  screen.value = screen.value / 100;
}
function sin() {
  screen.value = Math.sin(screen.value);
}

function cos() {
  screen.value = Math.cos(screen.value);
}

function tan() {
  screen.value = Math.tan(screen.value);
}

function pow() {
  screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value, 2);
}

function log() {
  screen.value = Math.log(screen.value);
}

function pi() {
  screen.value += 3.14159265359;
}

function e() {
  screen.value += 2.71828182846;
}
function divby1() {
  screen.value = 1 / screen.value;
}

function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}
