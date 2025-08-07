// function greet(name) {
//     alert(`Hello ${name}! How are you?`)
// }

// function call_user_data(user) {
//     let name=prompt("Please Enter Your Name..")
//     user(name)
// }

// call_user_data(greet)

let add=function(a,b){
    alert(`The Sum is ${a+b}`)
}
let subtract=function(a,b){
    alert(`The Diffrence is${a-b}`)
}

let multiply=function(a,b){
    alert(`The product is ${a*b}`)
}
let division=function(a,b){
    alert(`The division is ${a/b}`)
}
function calculate(task){
    let x=prompt("Enter the first number: ")
    let y=prompt("Enter the second bnumber")
    add(x,y)
}
let task=prompt("Enter the task to perform -"); 
calculate(task);