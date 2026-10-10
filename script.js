
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");
const error = document.getElementById("error");

function money(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
  }).format(value);
}

function calculate() {
  const bill = Number(billInput.value);
  const tipPercent = Number(tipInput.value);
  const people = Number(peopleInput.value);

  if (
    billInput.value.trim() === "" ||
    !Number.isFinite(bill) ||
    bill < 0
  ) {
    error.textContent = "Enter a valid bill amount.";
    return;
  }

  if (!Number.isInteger(people) || people < 1) {
    error.textContent = "Enter at least 1 person.";
    return;
  }

  error.textContent = "";

  const tipAmount = bill * tipPercent / 100;
  const total = bill + tipAmount;
  const perPerson = total / people;

  document.getElementById("tipAmount").textContent =
    money(tipAmount);

  document.getElementById("total").textContent =
    money(total);

  document.getElementById("perPerson").textContent =
    money(perPerson);
}

document.getElementById("calculate")
  .addEventListener("click", calculate);

calculate();
