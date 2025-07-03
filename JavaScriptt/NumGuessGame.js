let min = 1
let max = 100

let randomNum = Math.floor(Math.random() * (max - min) + 1) + min
console.log(randomNum)

let attempts = 0;
let running = true;

while (running) {
    let guessNum = parseInt(prompt('Enter the Number Between' + min + '-' + max))

    if (isNaN(guessNum)) {
        alert('Enter only the Number Characters are not Allowed..')
    }
    else if (guessNum < min || guessNum > max) {
        alert('Enter the Only Numbers Between 1-100')
    }
    else {
        attempts++;
        if (guessNum < randomNum) {
            alert('Too Low!! Try Again..')
        }
        else if (guessNum > randomNum) {
            alert('Too High! Try Again')
        }
        else {
            alert(guessNum + ' was a correct Number And You took' + attempts + ' attempts..')
            running = false
        }
    }
}
