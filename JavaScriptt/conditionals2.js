//Q.1) Check the number is greater than 100?

let num= prompt("Enter a number to check if it is greater than 100 or  not :)")
if (num>=100) {
    alert(num+" is greater than 100 ;)")
} else {
    alert(num+ " is not greater than 100 :(")
}


//Q.2) Check the two numbers are equal or not

let num1 = prompt("Enter the first number")
let num2= prompt("Enter the second number")

if (num1==num2) {
    alert("Both the entered number are same")
} else {
    alert("Entered Number is not same")
}


// Q.3) Print Grade A if marks>90
// Grade B if marks >75
// Grade C if marks >60
// Grade D if marks >40
// fail if marks <28


let marks= prompt("Enter your marks to check the grade...")

if (marks>90) {
    alert("Congratulations!! You got grade A")
}
else if(marks>75){
    alert("Well Done!! You got grade B")
}
else if(marks>60){
    alert("YOu got grade C. You can do better :) ")
}else if(marks>40){
    alert("You got grade D. You need To Study Hard")
}
else if(marks<28){
    alert("You Are a FAILURE!!")
}


// Q.4) Check if username & password matches then login successful otherwise invalid Credentials.

let username = "M"
let password = "q"

let user = prompt("Enter the username")
let pass = prompt("Enter the password")

if (user == username && password == "q") {
    alert("Login Successful")
} 
else {
    alert("Wrong Credentials")
}