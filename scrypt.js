const textAreaElement = document.querySelector(".textAreaCount");
const errorElement = document.querySelector(".error");
const warningElement = document.querySelector(".warning");
const progressElement = document.querySelector("#file");
const buttonElement = document.querySelector("#btn");
const containerElement = document.querySelector(".container");
const msgElement = document.createElement("p");
const msgSpanElement = document.createElement("span");
msgElement.classList.add("text");
msgSpanElement.classList.add("spanText");

textAreaElement.addEventListener("keydown", count);
buttonElement.addEventListener("click", displayMessage);

function count(e) {
  let num = textAreaElement.value.length;
  progressElement.setAttribute("value", `${num}`);
  if (num > 30) {
    warningElement.classList.remove("hidden");
    warningElement.textContent = `${num}/40 characters left`;
  }
  if (num >= 40) {
    errorElement.classList.remove("hidden");
    warningElement.classList.add("hidden");
    buttonElement.disabled = true;
    buttonElement.style.background = "#d6e2e2";
    buttonElement.style.cursor = "auto";
  }
  if (num < 40) {
    buttonElement.removeAttribute("disabled");
    buttonElement.style.cursor = "pointer";
    buttonElement.style.background = "";
    errorElement.classList.add("hidden");
  }
  if (num < 30) warningElement.classList.add("hidden");
}

function displayMessage(e) {
  e.preventDefault();
  containerElement.style.visibility = "hidden";
  msgElement.textContent = `Your message: "${textAreaElement.value}" is succesfully submited!`;
  console.log(msgElement);
  document.body.prepend(msgElement);
}
