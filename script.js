document.getElementById('generateButton').addEventListener('click', function() {
    const inputNumber = document.getElementById('numberInput').value;
    const result = document.getElementById('result');

    // Validacion
    if (isNaN(inputNumber) || inputNumber === "") {
        result.textContent = 'Error: Por favor, ingresa un número válido';
        return;
    }

    const number = parseInt(inputNumber);

    // Secuencia Fibonacci
    const fibonacciSequence = generateFibonacci(number);

    // Mostrar resultado
    result.textContent = "Secuencia: " + fibonacciSequence.join(', ');
});

function generateFibonacci(n) {
    const sequence = [0, 1];

    if(n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return sequence;
    }

    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence;
};


