const chatbot = document.querySelector(".chatbot");
const animatedBox = document.querySelector(".animated-chatbot-box");
const closeButton = document.querySelector(".close-button");

function verifyClasses() {
  if (chatbot.classList.contains("open")) {
    chatbot.classList.remove("open");
    chatbot.classList.add("closed");
    setTimeout(() => {
      animatedBox.classList.add("hidden");
    }, 10);
  } else {
    chatbot.classList.remove("closed");
    chatbot.classList.add("open");
    setTimeout(() => {
      animatedBox.classList.remove("hidden");
    }, 10);
  }
}

chatbot.addEventListener("click", verifyClasses);
closeButton.addEventListener("click", verifyClasses);
