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
const inputCVC = document.querySelector("#inputCVC");
const CvcOnTheCard = document.querySelector(".card-img__back__text");
const confirmBtn = document.querySelector(".confirm");
const completeWindow = document.querySelector(".complete-state");
const formWindow = document.querySelector(".form-window");
const nameError = document.querySelector(".name-error");
const numberError = document.querySelector(".number-error");
const monthError = document.querySelector(".date-error");
const yearError = document.querySelector(".year-error");
const cvcError = document.querySelector(".cvc-error");

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

inputCVC.addEventListener("keyup", () => {
  CvcOnTheCard.innerHTML = inputCVC.value;
});

confirmBtn.addEventListener("click", validation);

// Helper function
function displayNumber() {
  const cardNumber = inputNumber.value;
  const format = [...cardNumber].map((el, index) => {
    if ((index + 1) % 4 === 0) {
      el = el + " ";
    }
    return el;
  });
  numberOnTheCard.innerHTML = format.join("");
}

function validation() {
  if (inputName.value.length === 0) {
    nameError.innerHTML = `Can't be blank`;
    inputName.style.border = "1px solid var(--red)";
  } else if (
    inputNumber.value.length !== 16 ||
    inputNumber.value.match(/^[0-9]+$/) === null
  ) {
    numberError.innerHTML = "Please, provide correct card number";
    inputNumber.style.border = "1px solid var(--red)";
  } else if (
    inputMonth.value.length !== 2 ||
    inputMonth.value.match(/^[0-9]+$/) === null ||
    inputMonth.value > 12
  ) {
    monthError.innerHTML = "Please, provide correct exp. month";
    inputMonth.style.border = "1px solid var(--red)";
  } else if (
    inputYear.value.length !== 2 ||
    inputYear.value.match(/^[0-9]+$/) === null
  ) {
    yearError.innerHTML = "Please, provide correct exp. year";
    inputYear.style.border = "1px solid var(--red)";
  } else if (
    inputCVC.value.length !== 3 ||
    inputCVC.value.match(/^[0-9]+$/) === null
  ) {
    cvcError.innerHTML = "Please, provide correct CVC";
    inputCVC.style.border = "1px solid var(--red)";
  } else {
    formWindow.classList.add("hidden");
    completeWindow.classList.remove("hidden");
    document.querySelector(".card-img__front__absolute").style.top = "39%";
  }
}
