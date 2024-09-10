function isFibonacci(num) {
    function isPerfectSquare(x) {
        const s = Math.sqrt(x);
        return s === Math.floor(s);
    }

    function checkFibonacci(n) {
        return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4);
    }

    return checkFibonacci(num)
        ? `${num} pertence à sequência de Fibonacci.`
        : `${num} não pertence à sequência de Fibonacci.`;
}

const num = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"), 10);
console.log(isFibonacci(num));

