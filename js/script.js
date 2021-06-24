function getDivisors(num) {
    for(let i = num; i >= 0; i--) {

        num % i === 0 ? console.log(i) : null;

    }
}

getDivisors(100)