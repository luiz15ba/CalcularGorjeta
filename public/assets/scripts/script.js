var valorConta = document.querySelector('.valor.conta');
var valorGorjeta = document.querySelector('.valor.gorjeta');
var valorNaTela = document.querySelector('.valor--completo');
document.querySelectorAll('.valor').forEach(function (item) {
    item.addEventListener('input', function () { return somar(Number(valorConta.value), Number(valorGorjeta.value)); });
});
function somar(conta, gorjeta) {
    if (conta !== 0 && gorjeta == 0) {
        valorNaTela.innerHTML = "R$".concat(conta);
    }
    else if (conta !== 0 && gorjeta !== 0) {
        var gorjetaCalc = (conta * gorjeta) / 100;
        valorNaTela.innerHTML = "R$".concat((conta + gorjetaCalc).toFixed(2));
    }
    else {
        valorNaTela.innerHTML = "R$0,00";
    }
}
;
