function check_Prime_Number() {
    let num = prompt("ENter a Number")
    let count = 0
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            count += 1
        }

    }
    if (count == 2) {
        alert(`${num} is a prime number`)
    } else {
        alert(`${num} is not a prime number`)
    }
}

check_Prime_Number()