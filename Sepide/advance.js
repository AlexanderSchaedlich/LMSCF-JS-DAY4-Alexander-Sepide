var Calculator = {

add : document.getElementById("add"),
sub : document.getElementById("sub"),
mult : document.getElementById("mult"),
div : document.getElementById("div"),
num1 : document.getElementById("num1"),
num2 : document.getElementById("num2"),
result : document.getElementById("result"),
calculate : document.getElementById("calculate"),

    init : function(){

        obj.calculate.onclick = obj.resultArea;

    },

    resultArea : function(){

        var num1Value = parseFloat(num1.value);
        var num2Value = parseFloat(num2.value);

        if (!isNaN(obj.num1Value) = true || !isNaN(obj.num2Value) = true){
            alert("Please enter only numbers in the First Number and Second Number fields!");
            return;
        }

        switch(true){
            case Calculator.add.checked : var ans = (num1Value + num2Value); break;
            case Calculator.sub.checked : var ans = (num1Value - num2Value); break;
            case Calculator.mult.checked : var ans = (num1Value * num2Value); break;
            case Calculator.div.checked && num2Value != 0 : var ans = (num1Value / num2Value); break;
            case Calculator.div.checked && num2Value = 0 : alert("cannot divide by zero"); break;
        }


        var p = document.createElement("p");
        p.appendChild(document.createTextNode("The answer is" + ans));
        obj.result.appendChild(p);
    },

}