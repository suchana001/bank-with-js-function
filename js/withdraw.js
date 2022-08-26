document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const nweWithdrawAmountstring = withdrawField.value;
    const nweWithdrawAmount = parseFloat(nweWithdrawAmountstring);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
    const currentWithdrawTotal = previousWithdrawTotal + nweWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal - nweWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

    withdrawField.value = '';
})