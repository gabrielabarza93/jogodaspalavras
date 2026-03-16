// Lista de palavras simples (5 letras)
const listaPalavras = [
  "cacho", "papai", "mamãe", "amigo", "livro", "carta", "bolas", "nuvem", "casas", "feira",
  "janela", "porta", "banho", "sabao", "leite", "criar", "couro", "cabra", "limao", "roupa",
  "doce", "fruta", "verde", "amora", "pato", "gato", "caome", "pente", "banco", "moeda",
  "clube", "jogo", "vovo", "cesta", "festa", "amiga", "comer", "beber", "andar", "correr",
  "pular", "chefe", "noite", "tarde", "solta", "chuva", "filme", "ideal"
];

// Base da data: 1 de janeiro de 2024
const dataBase = new Date("2024-01-01T00:00:00");
const hoje = new Date();
const diffDias = Math.floor((hoje - dataBase) / (1000 * 60 * 60 * 24));
const palavraSecreta = listaPalavras[diffDias % listaPalavras.length];

let tentativas = 0;
const maxTentativas = 6;

function submitGuess() {
  const input = document.getElementById("guessInput");
  const guess = input.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  if (guess.length !== 5) {
    alert("A palavra deve ter 5 letras.");
    return;
  }

  if (tentativas >= maxTentativas) {
    alert("Fim de jogo! A palavra era: " + palavraSecreta.toUpperCase());
    return;
  }

  mostrarTentativa(guess);
  tentativas++;

  if (guess === palavraSecreta) {
    document.getElementById("mensagem").innerText = "🎉 Parabéns! Você acertou!";
  } else if (tentativas === maxTentativas) {
    document.getElementById("mensagem").innerText = "😢 Fim de jogo. A palavra era: " + palavraSecreta.toUpperCase();
  }

  input.value = "";
}

function mostrarTentativa(guess) {
  const row = document.createElement("div");
  row.classList.add("row");

  for (let i = 0; i < 5; i++) {
    const letra = document.createElement("div");
    letra.classList.add("letter");
    letra.textContent = guess[i].toUpperCase();

    if (guess[i] === palavraSecreta[i]) {
      letra.classList.add("correct");
    } else if (palavraSecreta.includes(guess[i])) {
      letra.classList.add("present");
    } else {
      letra.classList.add("absent");
    }

    row.appendChild(letra);
  }

  document.getElementById("game").appendChild(row);
}
