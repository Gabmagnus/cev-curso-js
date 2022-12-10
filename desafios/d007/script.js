val_dol = prompt('Antes de mais nada, quanto está a cotaçao do dólar agora?')



a = document.querySelector('#button')
a.addEventListener('click', conversorMonetario)

function conversorMonetario() {
    brl = prompt('Quantos BRL você tem na carteira?')


    document.querySelector('#convertido').innerHTML = `O valor convertido foi de R$${(Number(brl) / val_dol).toFixed(2)}`
    
}