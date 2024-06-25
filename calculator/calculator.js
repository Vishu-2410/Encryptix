//variable to store value
let displayValue='';

//function to input value
function inputValue(value){
    //values will be added to the display value variable
    displayValue+=value;
    //it update the display window
    updateDisplay();
}

//function to clear the display window
function clearDisplay(){
    //it clear the display value variable
    displayValue='';
    //updates the display window
    updateDisplay();
}

//function to update the display window
function updateDisplay(){
    //it update the display window
    document.getElementById('display').innerText=displayValue||'00';
}

//function to calculate the result
function calculateResult(){
    try{
        if(displayValue==''){
            //if display value is empty
            alert('please enter a valid expression');
        }
        else{
        //it calculate the result
        displayValue=eval(displayValue).toString();
        }
    }
    catch(err){
        //if error occurs
        displayValue='Error';
    }
    //updates the display window
    updateDisplay();
}
