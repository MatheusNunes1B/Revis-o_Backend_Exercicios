//Exercício 2


// calculadora.js

// Crie função de soma
function somar(num1, num2) {
    return num1 + num2;
}

// Crie função de subtração
function subtrair(num1, num2) {
    return num1 - num2;
}

// Crie função de multiplicação
function multiplicar(num1, num2) {
    return num1 * num2;
}

// Crie função de divisão com verificação de divisão por zero
function dividir(num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    }
    return 'Erro: Divisão por zero!';
}




// Teste das funções
const num1 = 10;
const num2 = 5;

console.log('Soma:', somar(num1, num2));
console.log('Subtração:', subtrair(num1, num2));
console.log('Multiplicação:', multiplicar(num1, num2));
console.log('Divisão:', dividir(num1, num2));