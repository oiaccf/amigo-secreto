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
    atualizarLista();
    nome.value = '';
    nome.focus();
}

function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML =`O amigo sorteado foi: ${amigoSorteado}`;

    let limparLista = document.getElementById('listaAmigos');
    limparLista.innerHTML = ''; 
}
