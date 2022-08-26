document.getElementById('btn-withdraw').addEventListener('click', function(){
    const nweWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const nweWithdrawTotal = previousWithdrawTotal + nweWithdrawAmount;
    setTextElementValueById('withdraw-total', nweWithdrawTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - nweWithdrawTotal;
    setTextElementValueById('balance-total', newBalanceTotal);
})
