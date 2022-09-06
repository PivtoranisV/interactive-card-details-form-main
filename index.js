const inputName = document.querySelector("#inputName");
const nameOnTheCard = document.querySelector(".card-img__front__text__name");

inputName.addEventListener("keyup", () => {
  nameOnTheCard.innerHTML = inputName.value;
});
