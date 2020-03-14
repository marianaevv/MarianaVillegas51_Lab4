var number = document.getElementsByClassName("inputNumber");
var operador = "";

var add = document.getElementById("addButton");
add.onclick = function ()
{
     operador += [number[0].value + " + "];
     number[0].value = "";
     console.log(operador);
};
var substract = document.getElementById("substractButton");
substract.onclick = function()
{
        operador += [number[0].value + " - "];
        number[0].value = "";
        console.log(operador);
};
var div = document.getElementById("divisionButton");
div.onclick = function()
{
    operador += [number[0].value + " / "];
    number[0].value = "";
    console.log(operador);
};
var mult = document.getElementById("multiplicationButton");
mult.onclick = function()
{
    operador += [number[0].value + " * "];
    number[0].value = "";
    console.log(operador);

};

var resetB = document.getElementsByClassName("resetButton");
var log = document.getElementById("logInformation");
var result = document.getElementById("resultValue");
resetB[0].onclick = function()
{
    number[0].value = "";
    log.value = "";
    result.value = "";
};
var equalButton = document.getElementsByClassName("equalButton");
equalButton[0].onclick = function()
{
        operador += [number[0].value];
        number[0].value = "";
        var res = eval(operador);
        console.log(res);
        log.value = operador + " = " + res;
        result.value = res;
        number[0].value = "";
        operador = "";
   
};