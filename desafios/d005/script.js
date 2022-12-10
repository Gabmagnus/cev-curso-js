a = document.querySelector('#button')
a.addEventListener('click', convdemedidas)

function convdemedidas() {
    m = window.prompt('Digite o valor em metros: ')
    km = Number(m) / 1000 
    hm = Number(m) / 100
    dam = Number(m) / 10
    dm = Number(m) * 10
    cm = Number(m) * 100
    mm = Number(m) * 1000

    document.querySelector('#m').style.display = "block";
    document.querySelector('#m').innerHTML = `A Distancia de ${m} metros, corresponde a..`;
    document.querySelector('#medidas').style.display = "block"
    document.querySelector('#medidas').innerHTML = `
    ${km} quilômetros (Km)<br>
    ${hm} hectômetros (Hm)<br>
    ${dam} decâmetros (Dam)<br>
    ${dm} decimetros (dm)<br>
    ${cm} centimetros (cm)<br>
    ${mm} milimetros (mm)<br>`;
}