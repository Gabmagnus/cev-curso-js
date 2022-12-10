a = document.querySelector('#button')
a.addEventListener('click', troco)

function troco() {
    prod = window.prompt('Qual produto você está comprando?')
    price = window.prompt(`Quanto custa o ${prod} que você está comprando?`)
    pay = window.prompt(`Qual o valor que você deu para pagar o ${prod}?`)
    troco = Number(pay) - Number(price);

    if(pay == '' || pay < price) {
        window.alert('O Pagamento nao pode ser vazio ou menor que o valor do produto!')
    } else {
    document.querySelector('#res').style.display = "block";
    document.getElementById('res').innerHTML = `Você comprou um ${prod} que custou ${price}<br>Deu R$${pay} em dinheiro e vai receber ${troco}`;
    }
}