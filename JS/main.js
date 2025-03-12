let square = document.querySelector("#square");
let shadowBtn = document.querySelector("#shadowBtn");
let circleBtn = document.querySelector("#circleBtn");
let addSize = document.querySelector("#addSize");
let reduceSize = document.querySelector("#reduceSize");

shadowBtn.addEventListener("click", () => {
  if (square.classList.contains("shadow")) {
    square.classList.remove("shadow");
    shadowBtn.innerHTML = "add shadow";
  } else {
    square.classList.add("shadow");
    shadowBtn.innerHTML = "remove shadow";
  }
});

circleBtn.addEventListener("click", () => {
  if (square.classList.contains("circle")) {
    square.classList.remove("circle");
    circleBtn.innerHTML = "reshape to circle";
  } else {
    square.classList.add("circle");
    circleBtn.innerHTML = "reshape to square";
  }
});

addSize.addEventListener("click", () => {
    square.style.width = `${parseInt(getComputedStyle(square).width) + 100}px`;
});

reduceSize.addEventListener("click", () => {
    square.style.width = `${parseInt(getComputedStyle(square).width) - 100}px`;
});
