const rButton = document.querySelector("#right");
const lButton = document.querySelector("#left");
const pages = document.querySelectorAll("page");

let index = 0;
window.addEventListener("orientationchange", (event) => {
  let angle = event.target.screen.orientation.angle;

  if (angle == 270 || angle == 90) {
    index = 0;
    lButton.hidden = true;
    rButton.hidden = false;
  }
  if (angle == 0 || angle == 180) {
    lButton.hidden = true;
    rButton.hidden = true;
    pages.forEach((page) => {
      page.hidden = false;
    });
  }
});

rButton.addEventListener("click", () => {
  if (index >= 0) {
    pages[index++].hidden = true;
    pages[index].hidden = false;
    lButton.hidden = false;
  }
  if (index == pages.length - 1) {
    rButton.hidden = true;
  }
});
lButton.addEventListener("click", () => {
  if (index < pages.length) {
    pages[index--].hidden = true;
    pages[index].hidden = false;
    rButton.hidden = false;
  }

  if (index == 0) {
    lButton.hidden = true;
  }
});
