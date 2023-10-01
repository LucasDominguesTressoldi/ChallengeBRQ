const loginButton = document.querySelector(".login-button");
const loginScreen = document.querySelector(".login-container");
const loginCloseButton = document.querySelector(".login-close-icon");

loginButton.addEventListener("click", () => {
  if (loginScreen.classList.contains("invisible")) {
    loginScreen.classList.remove("invisible");
  }
});

loginCloseButton.addEventListener("click", () => {
  if (!loginScreen.classList.contains("invisible")) {
    loginScreen.classList.add("invisible");
    console.log("Entrei");
  }
});
