let valorConta = document.querySelector('.valor.conta') as HTMLInputElement;
let valorGorjeta = document.querySelector('.valor.gorjeta') as HTMLInputElement;
let valorNaTela = document.querySelector('.valor--completo') as HTMLElement;

document.querySelectorAll('.valor').forEach(item => {
    item.addEventListener('input', () => somar(Number(valorConta.value),Number(valorGorjeta.value)));
});

function somar(conta: number,gorjeta: number | 10) {
    if (conta !== 0 && gorjeta == 0) {
        valorNaTela.innerHTML = `R$${conta}`;
    } else if (conta !== 0 && gorjeta !== 0) {
        let gorjetaCalc = (conta * gorjeta) / 100;
        valorNaTela.innerHTML = `R$${(conta + gorjetaCalc).toFixed(2)}`;
    } else {
        valorNaTela.innerHTML = `R$0,00`;
    }
};