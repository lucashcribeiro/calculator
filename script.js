function calcular(operacao) {
    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;

    const resultDiv = document.getElementById('resultado');
    resultDiv.innerText = (valor1 === '' || valor2 === '')
        ? 'Dados em branco, favor digitar algo!'
        : executeCalculation(operacao, parseFloat(valor1), parseFloat(valor2));
}

function executeCalculation(operacao, num1, num2) {
    let resultado;
    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'multiplicar':
            resultado = num1 * num2;
            break;
        case 'subtrair':
            resultado = num1 - num2;
            break;
        case 'dividir':
            resultado = num2 !== 0 ? num1 / num2 : 'Não há divisão por zero';
            break;
        default:
            resultado = 'Operação inválida';
            break;
    }
    return 'Resultado: ' + resultado;
}