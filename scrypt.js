const textAreaElement = document.querySelector(".textAreaCount");
const errorElement = document.querySelector(".error");
const warningElement = document.querySelector(".warning");
const progressElement = document.querySelector("#file");
const buttonElement = document.querySelector("#btn");
const containerElement = document.querySelector(".container");
const msgElement = document.createElement("p");
const maxLengthElement = progressElement.getAttribute("max");
const btn2Element = document.querySelector(".btn-2");

msgElement.classList.add("text");

textAreaElement.addEventListener("keydown", count);
textAreaElement.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    buttonElement.click();
  }
});

buttonElement.addEventListener("click", displayMessage);

btn2Element.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hello");
  window.location.reload();
});

function count(e) {
  let num = textAreaElement.value.length;

  if (e.keyCode === 8 || e.keyCode === 46) {
    num = textAreaElement.value.length - 1;
  } else {
    num = textAreaElement.value.length + 1;
  }

  console.log(num);

  if (num > 30) {
    warningElement.classList.remove("hidden");
    warningElement.textContent = `${num}/40 characters left`;
  }
  if (num < 30) warningElement.classList.add("hidden");

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
  progressElement.setAttribute("value", `${num}`);
}

function displayMessage(e) {
  e.preventDefault();
  containerElement.style.visibility = "hidden";
  document.body.prepend(msgElement);
  btn2Element.classList.remove("hidden");
  if (textAreaElement.value === "") {
    msgElement.textContent = `The message can not be empty!`;
  } else {
    msgElement.textContent = `Your message: "${textAreaElement.value}" is succesfully submited!`;
  }
}
