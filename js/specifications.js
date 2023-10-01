const searchButton = document.querySelector(".search-button");
const specificationsScreen = document.querySelector(
  ".specifications-container"
);
const closeSpecificationScreen = document.querySelector(
  ".specifications-close-icon"
);

function open_close_screen() {
  if (specificationsScreen.classList.contains("specifications-invisible")) {
    specificationsScreen.classList.remove("specifications-invisible");
  } else {
    specificationsScreen.classList.add("specifications-invisible");
  }
}

searchButton.addEventListener("click", open_close_screen);
closeSpecificationScreen.addEventListener("click", open_close_screen);
