const balanceElement = document.getElementById("balance");
const addFundsForm = document.getElementById("add-funds-form");

let balance = 0;

function updateBalance() {
  balanceElement.innerText = `$${balance.toFixed(2)}`;
}

addFundsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const amount = Number(event.target.amount.value);
  balance += amount;
  updateBalance();
  event.target.reset();
});
