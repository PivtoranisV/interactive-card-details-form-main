//variable declaration
const inputName = document.querySelector("#inputName");
const nameOnTheCard = document.querySelector(".card-img__front__text__name");
const inputNumber = document.querySelector("#inputNumber");
const numberOnTheCard = document.querySelector(
  ".card-img__front__text__number"
);
const inputMonth = document.querySelector("#inputExpDate");
const monthOnTheCard = document.querySelector(".mm");
const inputYear = document.querySelector("#inputDate");
const yearOnTheCard = document.querySelector(".yy");

// Event Listeners
inputName.addEventListener("keyup", () => {
  nameOnTheCard.innerHTML = inputName.value;
});

inputNumber.addEventListener("keyup", displayNumber);

inputMonth.addEventListener("keyup", () => {
  monthOnTheCard.innerHTML = inputMonth.value;
});

inputYear.addEventListener("keyup", () => {
  yearOnTheCard.innerHTML = inputYear.value;
});

// Helper function

function displayNumber() {
  let cardNumber = inputNumber.value;
  let format = [...cardNumber].map((el, index) => {
    if ((index + 1) % 4 === 0) {
      el = el + " ";
    }
    return el;
  });
  numberOnTheCard.innerHTML = format.join("");
}
