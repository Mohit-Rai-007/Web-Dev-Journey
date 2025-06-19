let age=20;
// Simple If Statement
if(age>18){
    console.log("You Are not eligible for Driving")
}


// If-else Statement
if(age>18){
    console.log("You are ADULT!!")
}
else{
    console.log("You are not Adult")
}

// If-else-if-else Statement
if(age>18){
    console.log("You are ADULT")
}
else if(age==18){
    console.log("You are about to be adult")
}
else if(age>20){
    console.log("You are no longer a teenager")
}
else{
    console.log("You are a Minor")
}

// Nested If-else Statement

let hasLicense=true
if (age>18) {
    if (hasLicense==true) {
        console.log("You are Eligible for driving")
    } else {
        console,log("You Can Apply for driving license")
    }
} else {
    console.log("Go, Ride a bicycle kid!!")
}