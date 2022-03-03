let tip = 0.00;
let total = 0.00;
let bill = document.getElementById("bill-el").value;
let noOfPeople = document.getElementById("people-el").value;
let tipResultEl = document.getElementById("tip-result-el");
let totalResultEl = document.getElementById("total-result-el");


function getTip(percentage) {
  let tip = parseInt(bill) * percentage / 100;
  let tipPerPerson = tip / noOfPeople;
  let totalPerPerson = parseInt(bill) + tipPerPerson;

  tipResultEl.textContent = "$ " + tip;
  totalResultEl.textContent = "$ " + totalPerPerson;
}

function reset() {
  tipResultEl.textContent = "$ 0.00";
  totalResultEl.textContent = "$ 0.00";
}
