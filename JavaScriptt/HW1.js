// ADDITION

document.getElementById("add").onclick = function(){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let calculation = num1+num2;
    document.getElementById("result").textContent= "Addition of the two number is: " + calculation
}

// SUBTRACTION

document.getElementById("sub").onclick = function(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let calculation = num1-num2;
    document.getElementById("result").textContent= "Addition of the two number is: " + calculation
}