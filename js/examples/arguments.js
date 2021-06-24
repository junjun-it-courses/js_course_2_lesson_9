function sum() {
    let result = 0;

    for(let i = 0; i <= arguments.length - 1; i++) {
        result += arguments[i]
    }

    return result;
}

console.log(
    sum(10, 20, 30, 40, 50, 60, 70, 80, 90, 0)
);