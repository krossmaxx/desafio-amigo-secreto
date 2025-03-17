let amigos = [];

// Adicionar um nome à lista
function adicionarAmigo() {
  const nomeInput = document.getElementById('amigo'); // Pega dados de entrada
  const nome = nomeInput.value.trim(); // Tira espaços extras do nome

  // Confirma se o campo do nome não está vazio
  if (nome === '') {
    alert('Por favor, insira um nome válido!');
    return;
  }

  // Adiciona um nome a lista
  amigos.push(nome);

  // Atualizar a lista
  atualizarLista();

  // Limpa a entrada
  nomeInput.value = '';
}

// Função que atualiza a lista de amigos
function atualizarLista() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = ''; // Limpa a lista existente

  // Adiciona cada nome à lista
  amigos.forEach((nome) => {
    const li = document.createElement('li');
    li.textContent = nome;
    listaAmigos.appendChild(li);
  });
}

// Sortear um amigo aleatoriamente
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('A lista de amigos está vazia! Adicione nomes primeiro.');
    return;
  }

  // Sorteia um índice aleatório
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostra o nome sorteado
  const resultadoSorteio = document.getElementById('resultado');
  resultadoSorteio.innerHTML = ''; // Limpa o resultado anterior

  const li = document.createElement('li');
  li.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
  resultadoSorteio.appendChild(li);
}