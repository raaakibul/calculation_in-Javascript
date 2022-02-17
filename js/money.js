// function for income  
function getIncomeValue(income){
    const incomeInputField = document.getElementById('incomeInput');
    const inputValueText = incomeInputField.value;
    const incomeValue = parseFloat(inputValueText);
    // incomeInputField.value = '';
    
    return incomeValue;
}
// function for expense 

function getExpensesInput(food,rent,clothes){

    // for food input
    const foodInputField = document.getElementById('food-input');
    const foodValueText = foodInputField.value;
    const foodValue = parseFloat(foodValueText);
    // foodInputField.value= '';

    // for rent input
    const rentInputField = document.getElementById('rent-input');
    const rentValueText = rentInputField.value;
    const rentValue = parseFloat(rentValueText);
    // rentInputField.value = '';

    // for clothes input 
    const clothesInputField = document.getElementById('clothes-input');
    const clothesValueText = clothesInputField.value;
    const clothesValue = parseFloat(clothesValueText);
    // clothesInputField.value = '';

    const totalExpenses = foodValue + rentValue + clothesValue;
    
    return totalExpenses;

}

// calculation for calculate button 
document.getElementById('calculate-button').addEventListener('click',function(){
    const showExpensesInput = getExpensesInput();
    // console.log(showExpensesInput);


     const totalExpensesValue = document.getElementById('show_total_expenses');
    //  console.log(totalExpensesValue);
     
     totalExpensesValue.innerHTML = showExpensesInput;

     const remainingBalance = getIncomeValue() - showExpensesInput;
    // console.log(remainingBalance);  

    const UserBalance = document.getElementById('show_balance');
    // console.log(UserBalance);
     UserBalance.innerHTML = remainingBalance;
})


// for saving function 
function getSaveValue(){
    const saveInputField = document.getElementById('saving');
    const saveValueText = saveInputField.value;
    const saveValue = parseFloat(saveValueText);
    // incomeInputField.value = '';
    
    return saveValue;
}

// for save button
document.getElementById('save-button').addEventListener('click', function(){
    const savingPercent = getIncomeValue() * getSaveValue()/100;
    // console.log(savingPercent);
    const saveMoney = document.getElementById('saving_amount');
    saveMoney.innerHTML =savingPercent;
    
    // for saving amount
    const savingBalance = getIncomeValue() - getExpensesInput();
    // console.log(savingBalance);
    const savingAmount = savingBalance - savingPercent;
    // console.log(savingAmount);
    const remainingMoney = document.getElementById('remaining_balance');
    remainingMoney.innerHTML = savingAmount;

})

//Grab the error message

// const error=document.getElementById('error');
 