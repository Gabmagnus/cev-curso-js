a = document.querySelector('#button')
a.addEventListener('click', convdemedidas)

function convdemedidas() {
    c = window.prompt('Digite uma temperatura em ºC (Celcius): ')
    f = (Number(c) * 1.8000 + 32.00).toFixed(2)
    k = (Number(c) + 273.15).toFixed(2)


    document.querySelector('#m').style.display = "block";
    document.querySelector('#m').innerHTML = `A temperatura de ${c}ºC, corresponde a..`;
    document.querySelector('#medidas').style.display = "block"
    document.querySelector('#medidas').innerHTML = `
    ${k}ºK (Kelvin)<br>
    ${f}ºF (Fahrenheit)<br>`;
}