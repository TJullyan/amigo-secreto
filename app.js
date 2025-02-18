//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];


function adicionarAmigo() {
    const campoNome = document.getElementById('amigo');
    const nome = campoNome.value.trim(); // Remove espaços em branco no início e no fim

    // Validação: verifica se o campo está vazio
    if (nome === '') {
        alert('Por favor, insira um nome.'); 
        return; // Interrompe a execução da função
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada
    campoNome.value = '';

    var listaDeAmigos = document.getElementById('listaAmigos');
    
    listaDeAmigos.innerHTML = "";
    for ( var a in amigos){
        listaDeAmigos.innerHTML += `<li>${amigos[a]}</li>`;
    };
        
}
function sortearAmigo(){
    if(amigos.length != 0){
        var amigoEscolhido = Math.floor(Math.random() * amigos.length);
        console.log(`O amigo escolhido foi ${amigos[amigoEscolhido]}`);
        document.getElementById('resultado').innerHTML = `<li>Seu amigo sorteado é: ${amigos[amigoEscolhido]}</li>`;
    }else{
        alert("Lista de amigos está vazia");
    }
}