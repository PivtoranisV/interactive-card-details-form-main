const inputName = document.querySelector("#inputName");
const nameOnTheCard = document.querySelector(".card-img__front__text__name");
const inputNumber = document.querySelector("#inputNumber");
const numberOnTheCard = document.querySelector(
  ".card-img__front__text__number"
);

inputName.addEventListener("keyup", () => {
  nameOnTheCard.innerHTML = inputName.value;
});

inputNumber.addEventListener("keyup", displayNumber);

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
