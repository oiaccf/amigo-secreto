//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo');
    let nomeAmigo = nome.value;

    if (nomeAmigo == '') {
        alert('Por favor, digite um nome válido.');
        return;
    }   
    amigos.push(nomeAmigo);
    console.log(amigos);
    nome.value = '';
    nome.focus();
}


