/**
 * 1. Add event listener to the deposit button
 * 2. Get deposit amount from the deposit input field
 * 3. Convert Deposit Amount String to a number type
 * 4. Clear The deposti input field after getting the value
 *
 * 5. Get the previous deposit total
 * 6. Get the new deposit total & set the value to the deposit total
 * 7. Get current balance
 */
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-input");

    const depositPrevTotal = getPrevTotalAmount("deposit-total");

    const depositTotal = depositPrevTotal + depositAmount;
    
    setElementValueById("deposit-total", depositTotal);
    
    const prevBalance = getPrevTotalAmount("balance-total");
    
    const Balance = prevBalance + depositTotal;
    console.log(Balance);
    setElementValueById("balance-total", Balance);

    return Balance;
  });
