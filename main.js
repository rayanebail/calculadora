function somar(a, b) {
    return a + b; 
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
//observação; evite b=0 para nao dividir por zero
return a / b;
}

function potencia(a, b) {
    return Math.pow(a, b)
}

//defina dois valores para testar:
let x = 8.6;
let y = 2.5;
// mostre os resultados no console:
console.log("=== CALCULADORA BÁSICA ===");
console.log("valores:", x, "e", y);

console.log("Soma:", somar (x, y));
console.log("Subtração;", subtrair(x, y));
console.log("Multiplicação:", multiplicar(x, y));
console.log("Divisão:", dividir(x, y));

console.log("pot:", potencia(x, y));




