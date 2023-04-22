function factorial() {
    let product = 1;
    for (let i = 1; i <= 12; i++) {
        product *= i;
    }
    return product
}

console.log(factorial())