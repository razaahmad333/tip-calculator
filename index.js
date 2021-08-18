let bill;
let selectedTipPercent = 5;
let numberOfPeople;

const billInput = document.querySelector("#bill");
billInput.addEventListener("keyup", (e) => {
  bill = e.target.value;
  billInput.style.border = "2px solid hsl(172, 67%, 45%)";
  updateTipAmount();
});

const buttons = document.querySelectorAll(".button");

buttons[0].style.backgroundColor = "hsl(172, 67%, 45%)";
buttons[0].style.color = "hsl(183, 100%, 15%)";

for (let b of buttons) {
  b.addEventListener("click", (e) => {
    for (let bo of buttons) {
      bo.style.backgroundColor = "hsl(183, 100%, 15%)";
      bo.style.color = "white";
    }
    document.querySelector("#customTip").value = null;
    document.querySelector("#customTip").placeholder = "Custom";

    e.target.style.backgroundColor = "hsl(172, 67%, 45%)";
    e.target.style.color = "hsl(183, 100%, 15%)";
    selectedTipPercent = e.target.innerText.split("");
    selectedTipPercent.splice(selectedTipPercent.indexOf("%"), 1);
    selectedTipPercent = selectedTipPercent.join("");
    updateTipAmount();
  });
}
const customTip = document.querySelector("#customTip");
document.querySelector("#customTip").onkeyup = (e) => {
  selectedTipPercent = e.target.value;
  customTip.border = "2px solid hsl(172, 67%, 45%)";
  for (let bo of buttons) {
    bo.style.backgroundColor = "hsl(183, 100%, 15%)";
    bo.style.color = "white";
  }
  updateTipAmount();
};
document.querySelector("#customTip").onclick = (e) => {
  e.target.placeholder = "";

  e.target.border = "2px solid hsl(172, 67%, 45%)";
};

const updateTipAmount = () => {
  let condition = [false, false, false];
  if (bill !== undefined) {
    //  billInput.classList.
    condition[0] = true;
  } else {
    billInput.style.border = "2px solid red";
  }

  if (selectedTipPercent !== undefined) {
    condition[1] = true;
  } else {
  }

  if (Number(numberOfPeople) === 0 || numberOfPeople === undefined) {
    document.querySelector(".message").style.display = "block";
  } else {
    condition[2] = true;

    document.querySelector(".message").style.display = "none";
  }

  if (condition[0] && condition[1] && condition[2]) {
    let tipPerPerson =
      (Number(bill) * Number(selectedTipPercent) * 0.01) /
      Number(numberOfPeople);
    document.querySelector("#tipPerPerson").innerText =
      "$ " + Math.round(tipPerPerson * 100) / 100;

    let totalAmountPerPerson =
      tipPerPerson + Number(bill) / Number(numberOfPeople);

    document.querySelector("#totalAmountPerPerson").innerText =
      "$ " + Math.round(totalAmountPerPerson * 100) / 100;
  }
};

document.querySelector("#nPeople").onkeyup = (e) => {
  numberOfPeople = e.target.value;
  updateTipAmount();
};

document.querySelector("#resetButton").onclick = () => {
  bill = undefined;
  selectedTipPercent = 5;
  for (let bo of buttons) {
    bo.style.backgroundColor = "hsl(183, 100%, 15%)";
    bo.style.color = "white";
  }
  buttons[0].style.backgroundColor = "hsl(172, 67%, 45%)";
  buttons[0].style.color = "hsl(183, 100%, 15%)";

  numberOfPeople = undefined;
  document.querySelector("#totalAmountPerPerson").innerText = "$ 0.00";
  document.querySelector("#tipPerPerson").innerText = "$ 0.00";

  billInput.style.border = "2px solid hsl(172, 67%, 45%)";
  document.querySelector(".message").style.display = "none";

  document.querySelector("#bill").value = null;
  document.querySelector("#customTip").value = null;
  document.querySelector("#customTip").placeholder = "Custom";
  document.querySelector("#nPeople").value = null;
};
