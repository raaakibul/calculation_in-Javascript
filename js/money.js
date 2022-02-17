// function for income  
function getIncomeValue(income){
    const incomeInputField = document.getElementById('incomeInput');
    const inputValueText = incomeInputField.value;
    const incomeValue = parseFloat(inputValueText);
    incomeInputField.value = '';
    
    return incomeValue;
}
// function for expense 

function getExpensesInput(income,food,rent,clothes){

    // for food input
    const foodInputField = document.getElementById('food-input');
    const foodValueText = foodInputField.value;
    const foodValue = parseFloat(foodValueText);
    foodInputField.value= '';

    // for rent input
    const rentInputField = document.getElementById('rent-input');
    const rentValueText = rentInputField.value;
    const rentValue = parseFloat(rentValueText);
    rentInputField.value = '';

    // for clothes input 
    const clothesInputField = document.getElementById('clothes-input');
    const clothesValueText = clothesInputField.value;
    const clothesValue = parseFloat(clothesValueText);
    clothesInputField.value = '';

    const totalExpenses = foodValue + rentValue + clothesValue;
    
    return totalExpenses;

}
document.getElementById('calculate-button').addEventListener('click',function(){
    // console.log("clicked");
    const showExpensesInput = getExpensesInput('show_total_expenses');

    console.log(showExpensesInput);
    const totalValue = getElementById('show_total_expenses')
    totalValue.innerText = showExpensesInput;
    console.log(totalValue);


})