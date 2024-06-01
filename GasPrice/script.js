const valores = {
    gasolinaComum: 5.47,
    gasolinaAditivada: 5.77,
    etanol: 3.42,
    oleoDiesel: 5.85,
    oleoDieselS10: 5.94
};

document.getElementById('calcular').addEventListener('click', function() {
    const tipoGasolina = document.getElementById('opcoes').value;
    const litros = parseFloat(document.getElementById('litros').value);

    switch(tipoGasolina) {
        case 'opcao1':
            calcularPreco(valores.gasolinaComum, litros);
            break;
        case 'opcao2':
            calcularPreco(valores.gasolinaAditivada, litros);
            break;
        case 'opcao3':
            calcularPreco(valores.etanol, litros);
            break;
        case 'opcao4':
            calcularPreco(valores.oleoDiesel, litros);
            break;
        case 'opcao5':
            calcularPreco(valores.oleoDieselS10, litros);
            break;
        default:
            mostrarResultado("Tipo de gasolina inválida");
    }
});

function calcularPreco(precoPorLitro, litros) {
    const custoTotal = precoPorLitro * litros;
    mostrarResultado("O custo total é de R$" + custoTotal.toFixed(2));
}

function mostrarResultado(resultado) {
    document.getElementById('resultado').innerHTML = resultado;
}

// Corrigindo a adição do evento para o botão de cálculo da quilometragem
document.getElementById('calcularQuilometragem').addEventListener('click', function(){
    const kmPorLitro = parseFloat(document.getElementById('quilometro').value);
    const litros2 = parseFloat(document.getElementById('litros2').value);
    calcularQuilometragem(kmPorLitro, litros2);
});

function calcularQuilometragem(kmPorLitro, litros2) {
    const kmTotal = kmPorLitro / litros2; // Corrigindo para multiplicação
    mostrarResultadokm("Seu carro tem uma autonomia de " + kmTotal.toFixed(2) + " km por litro");
}

function mostrarResultadokm(result) {
    document.getElementById('result').innerHTML = result;
}
