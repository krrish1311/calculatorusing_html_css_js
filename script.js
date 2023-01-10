let screen = document.querySelector("#screen");
let btnVal = document.querySelectorAll(".btn");

for (i of btnVal) {
  i.addEventListener("click", (e) => {
    btntext = e.target.innerText;

    screen.value += btntext;
    console.log(screen.value);
  });
}
function backspc() {
  screen.value = screen.value.substr(0, screen.value.length - 1);
}
