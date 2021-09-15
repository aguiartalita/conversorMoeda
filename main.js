//conversor de real em euro\\

function ConverterEuro() {
    // coletar valor informado no campo\\
    var valor = document.getElementById("botao__valor");
    var moedaReal = valor.value;
    // transformar em valor\\
    var moedaRealNum = parseFloat(moedaReal);
    //converter a moeda real para  o euro\\
    var moedaEuro = moedaRealNum * 0.161030596; // 1/cotação da moeda 6,21\\
    var moedaConvertida = document.getElementById("resultado");
    // mostrar resultado na tela, toFixed o numero de digitos do ponto decimal\\
    var resultado = " Є " + moedaEuro.toFixed(2);
    moedaConvertida.innerHTML = resultado;
}

//converter de Real em Dólar\\

function ConverterDolar() {
    var valor = document.getElementById("botao__valor");
    var moedaReal = valor.value;
    var moedaRealNum = parseFloat(moedaReal);
    var moedaDolar = moedaRealNum * 0.190367;// 1/cotação da moeda 5,26\\
    var moedaConvertida = document.getElementById("resultado");
    var resultado = " U$ " + moedaDolar.toFixed(2);
    moedaConvertida.innerHTML = resultado;
}
