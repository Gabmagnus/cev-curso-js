a = document.querySelector('#button')
a.addEventListener('click', antesuc)

function antesuc() {
    n = window.prompt('Digite um numero!');
    nmais = Number(n) + 1
    nmenos = Number(n) - 1
    window.alert(`Foi escolhido o numero ${n}, seu antecessor é ${nmenos} e seu sucessor é ${nmais}\n ${nmenos} > ${n} > ${nmais}`)
}