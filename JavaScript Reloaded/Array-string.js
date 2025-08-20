let sentence = "this is mohit kumar rai"

let lst = sentence.split(" ")

for (let i = 0; i < lst.length; i++) {
    lst[i] = lst[i].charAt(0).toUpperCase() + lst[i].slice(1)

}

console.log(lst.join(" "));


// VOWEL AND CONSONANT COUNT:-

let string = "This is JS class";
let string_lowercase = string.toLowerCase();
let vowel_count = 0;
let consonant_count = 0;
let vowel_lst = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < string_lowercase.length; i++) {
    let ch = string_lowercase[i];
    if (vowel_lst.includes(ch)) {
        vowel_count += 1;
    } else if (ch >= 'a' && ch <= 'z') {
        consonant_count += 1;
    }
}

console.log("Vowels:", vowel_count);
console.log("Consonants:", consonant_count);


// Longest Word in A sentence 

let longest = "This is JavaScript class at hanumant technologyy"
let longest_lst = longest.split(" ")
console.log(longest_lst);
let longest_word = ""
let max = 0

for (let i = 0; i < longest_lst.length; i++) {
    
    if (longest_lst[i].length > max) {
        
        longest_word = longest_lst[i]
    }

}
console.log(longest_word);


// ONLY UNIQUE ELEMENTS-->

let s = "This is javascript class class class is is class"
let s_lst= s.split(" ")
let result = []

for (let i = 0; i < s_lst.length; i++) {
    
    if (result.includes(s_lst[i])) {
        continue
    } else {
        result.push(s_lst[i])
    }
    
}
console.log(result.join(" "));

