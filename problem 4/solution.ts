//---------Lặp-------------
function sum_to_n_a(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//---------Using Arithmetic Progression Formula-------------
function sum_to_n_b(n: number): number {
    return (n * (n + 1)) / 2;
}

//---------Đệ Quy-------------
function sum_to_n_c(n: number): number {
    if (n === 1) {
        return 1;
    }
    return n + sum_to_n_c(n - 1);
}

console.log("Sum using sum_to_n_a:", sum_to_n_a(5));

console.log("Sum using sum_to_n_b:", sum_to_n_b(5));

console.log("Sum using sum_to_n_c:", sum_to_n_c(5));