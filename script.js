function calculateInterest() {
    let amount = parseFloat(document.getElementById('amount').value);
    let interest = parseFloat(document.getElementById('interest').value);

    if (isNaN(amount) || isNaN(interest)) {
        alert('Please enter valid numerical values for amount and interest rate.');
        return;
    }

    let interestAmount = (amount * interest) / 100;
    document.getElementById('result').textContent = `Interest Amount: R${interestAmount.toFixed(2)}`;
}