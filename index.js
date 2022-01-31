let tip = 0.00;
let total = 0.00;
let bill = document.getElementsByClassName("bill-el")[0].value;
let noOfPeople = document.getElementsByClassName("people-el")[0].value;
let tipResultEl = document.getElementById("tip-result-el");
let totalResultEl = document.getElementById("total-result-el");


function getTip(percentage) {
  let tip = bill * percentage / 100;
  let tipPerPerson = tip / noOfPeople;
  let totalPerPerson = parseInt(bill) + tipPerPerson;

  tipResultEl.textContent = "$ " + tip;
  totalResultEl.textContent = "$ " + totalPerPerson;
}

function reset() {
  tipResultEl.textContent = "$ 0.00";
  totalResultEl.textContent = "$ 0.00";
}


/* 
no of people shouldnt be less than 1

show result after user has clicked one of the percentage btns
for custom btn dispaly an alert dialoge box and obtain value from that
tip is gotten by getting the percentage from bill and dividing it by no of people 

total give by adding tip to bill

*/