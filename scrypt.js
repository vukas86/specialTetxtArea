const textAreaElement = document.querySelector(".textAreaCount");
const errorElement = document.querySelector(".error");
const warningElement = document.querySelector(".warning");
const progressElement = document.querySelector("#file");
const buttonElement = document.querySelector("#btn");
const containerElement = document.querySelector(".container");
const msgElement = document.createElement("p");
const maxLengthElement = progressElement.getAttribute("max");
console.log(maxLengthElement);
msgElement.classList.add("text");

const btn2Element = document.querySelector(".btn-2");

textAreaElement.addEventListener("keydown", count);
textAreaElement.addEventListener("keydown", function (e) {
  console.log(e.keyCode);
  if (e.keyCode === 8 || e.keyCode === 13) {
    return false;
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
  let valueElement = textAreaElement.value;
  let remainingValue = 40 - num;
  console.log(num);

  console.log(valueElement);

  if (!!valueElement) console.log(valueElement);
  progressElement.setAttribute("value", `${num}`);

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
