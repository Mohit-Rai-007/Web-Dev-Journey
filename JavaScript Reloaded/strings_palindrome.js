// let word= "👌😁"

// console.log(word.charAt(1));


// console.log("a".charCodeAt(0));
// console.log(word.codePointAt(1));

// let sentence="An elephant is a big mammal"
// console.log(sentence.lastIndexOf("m"));
// console.log(sentence.startsWith("An"));
// console.log(sentence.endsWith("king"));
// console.log(sentence.slice(0,4));
// console.log(sentence.slice(-6));
// console.log(sentence.slice(4));
// console.log(sentence.slice(1,-6));

// console.log(sentence.substring(4,6));

// console.log("mohit".toUpperCase());


// let chars=["a","z","g","b","y","j","j"]
// console.log(chars.sort());

// console.log(sentence.replace("elephant","Mohit"));


let given_string = "Hello, this is JS class"
let vowel_count = 0
let consonat_count = 0
let lower_case_string = given_string.toLowerCase()
// console.log(lower_case_string);

vowels = "aeiou"

for (let i = 0; i < lower_case_string.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (lower_case_string[i] == vowels[j]) {
            vowel_count += 1
        }
        if (lower_case_string[i] != vowels[j]) {
            consonat_count+=1
        }
    }
    
    
}

console.log(vowel_count);
console.log(consonat_count);




