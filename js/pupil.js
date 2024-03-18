// var result = document.getElementById("display").textContent
// const equal = document.getElementById("equal").textContent
// const num_1 = document.getElementById("1").textContent
// const num_2 = document.getElementById("2").textContent
// const num_3 = document.getElementById("3").textContent
// const num_4 = document.getElementById("4").textContent
// const num_5 = document.getElementById("5").textContent
// const num_6 = document.getElementById("6").textContent
// const num_7 = document.getElementById("7").textContent
// const num_8 = document.getElementById("8").textContent
// const num_9 = document.getElementById("9").textContent
// const minus = document.getElementById("-").textContent
// const num_0 = document.getElementById("0").textContent
// const plus = document.getElementById("+").textContent
// const mult = document.getElementById("×").textContent
// const div = document.getElementById("÷").textContent
// const mod = document.getElementById("%").textContent




// function add(a,b){
//     return a+b;
// }

// console.log(add(1,2))



// function display1(){
//     document.getElementById("display").textContent = num_1;
// }
// function display2(){
//     document.getElementById("display").textContent = num_2;
// }
// function display3(){
//     document.getElementById("display").textContent = num_3;
// }
// function display4(){
//     document.getElementById("display").textContent = num_4;
// }
// function display5(){
//     document.getElementById("display").textContent = num_5;
// }
// function display6(){
//     document.getElementById("display").textContent = num_6;
// }
// function display7(){
//     document.getElementById("display").textContent = num_7;
// }
// function display8(){
//     document.getElementById("display").textContent = num_8;
// }
// function display9(){
//     document.getElementById("display").textContent = num_9;
// }
// function displayMinus(){
//     document.getElementById("display").textContent = minus;
// }
// function display0(){
//     document.getElementById("display").textContent = num_0;
// }
// function displayPlus(){
//     document.getElementById("display").textContent = plus;
// }
// function displayMult(){
//     document.getElementById("display").textContent = mult;
// }
// function displayDiv(){
//     document.getElementById("display").textContent = div;
// }
// function displayMod(){
//     document.getElementById("display").textContent = mod;
// }

// document.getElementById("equal").onclick = function() {
    
// }

let currentDisplay = "0";
let resultDisplay = false;

function appendToDisplay(value){
    if (currentDisplay==="0" || resultDisplay){
        currentDisplay = value;
    }
    else{
        currentDisplay += value;
    }
    resultDisplay = false;

    updateDisplay();
}

function updateDisplay(){
    const displayElement = document.getElementById('display');
    displayElement.textContent = currentDisplay;
}

function calculateResult(){
    try{
        const result = eval(currentDisplay);

        currentDisplay += "\n\n= " + result.toString();

        updateDisplay();
    }
    catch (error) {
        currentDisplay += '\nError';
        updateDisplay();
    }

    resultDisplay = true;
}
function clearLastElement() {
    currentDisplay = currentDisplay.slice(0,-1);

    if (currentDisplay == ""){
        currentDisplay = "0";
    }

    updateDisplay();
}
function clearDisplay() {
    currentDisplay = '0';
    resultDisplay = false;

    updateDisplay();
}
