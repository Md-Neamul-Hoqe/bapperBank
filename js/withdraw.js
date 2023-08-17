/**
 * 1. set event listener to the withdraw button
 * 2. get the amount from the withdraw input field
 * 3. Convert amount string to number type
 * 4. get the prev withdraw total & convert to number type
 * 5. Calculate total withdraw total
 * 6. update balance
 */

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawAmount = getInputValue("withdraw-input");

    const prevWithdrawTotal = getPrevTotalAmount("withdraw-total");

    const withdrawTotal = prevWithdrawTotal + withdrawAmount;
    setElementValueById("withdraw-total", withdrawTotal);

    const prevBalance = getPrevTotalAmount("balance-total");

    const Balance = prevBalance - withdrawAmount;
    setElementValueById("balance-total", Balance);

    console.log(Balance);
    return Balance;
  });
