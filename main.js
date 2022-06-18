let userInput = document.getElementById("inputUser");
let resultA;

let resultType;
let resultSum = document.getElementById("result")
let buttonEssay = document.getElementById("EssayButton");
let buttonSubtraction = document.getElementById("SubtractionButton");
let buttonMultiplication = document.getElementById("multiplication");
let buttonDivision = document.getElementById("Division");
let buttonReset = document.getElementById("reset");
let signe;


buttonReset.addEventListener('click', function () {
    userInput.value = ''
    userInput.innerHTML = ''

})
buttonEssay.addEventListener('click', () => {
    resultA = userInput.value
    userInput.value = '';
    signe = '+';

})
buttonSubtraction.addEventListener('click', () => {
    resultA = userInput.value
    userInput.value = '';
    signe = '-';

})
multiplication.addEventListener('click', () => {
    resultA = userInput.value
    userInput.value = '';
    signe = '*';

})
buttonDivision.addEventListener('click', () => {
    resultA = userInput.value
    userInput.value = '';
    signe = '/';

})
resultSum.addEventListener('click', () => {
    switch (signe) {
        case "+":
            userInput.value = Number(userInput.value) + Number(resultA);
            break;
        case "-":
            userInput.value = Number(resultA) - Number(userInput.value);
            break;
        case "*":
            userInput.value = Number(userInput.value) * Number(resultA);
            break;
        case "/":
            userInput.value = Number(resultA) / Number(userInput.value);
            break;
    }


})

function getInput(number) {
    userInput.value += number;
}

