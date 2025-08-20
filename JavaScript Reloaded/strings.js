let namec = "      Mohit Rai"

console.log(namec.trim());
console.log(namec.length);

let sentence = "Hello Everyone! My name is Mohit Rai."
console.log(sentence.split(" "))

let count_Words = "this is javascript react class"
let count_words_array = count_Words.split(" ")
console.log(count_words_array.length)

let find_word = "hello hello hello hello hello hello hello hello hello hello"
let find_word_array = find_word.split(" ")
let count = 0
for (let i = 0; i < find_word_array.length; i++) {
    if (find_word_array[i] == "hello") {
        count += 1
    }

}
console.log(count);
