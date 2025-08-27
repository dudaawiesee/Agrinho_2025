// Definindo as perguntas e respostas
let perguntas = [
  {
    pergunta: "Qual é a principal conexão entre o campo e a cidade?",
    alternativas: ["Comércio de produtos agrícolas", "Indústria", "Turismo", "Cultura e tradições"],
    resposta: 0 // O índice da alternativa correta
  },
  {
    pergunta: "Qual é um dos maiores desafios do campo ao se conectar com a cidade?",
    alternativas: ["Falta de infraestrutura", "Falta de comida", "Falta de empregos", "Desigualdade de gênero"],
    resposta: 0
  },
  {
    pergunta: "A que evento cultural é comum ver a integração entre o campo e a cidade?",
    alternativas: ["Festas juninas", "Carnaval", "Festival de Música Rock", "Feiras de arte e gastronomia"],
    resposta: 0
  },
  {
    pergunta: "Como as novas tecnologias ajudam no campo a cidade?",
    alternativas: ["Melhorando a comunicação", "Aumentando o número de indústrias", "Promovendo a educação rural", "Melhorando o transporte"],
    resposta: 0
  },
  {
    pergunta: "Qual é o principal produto que conecta o campo à cidade?",
    alternativas: ["Café", "Carnes", "Frutas e hortaliças", "Grãos como soja e milho"],
    resposta: 3
  }
];

let perguntaAtual = 0;
let respostasCertas = 0;
let feedback = ""; // Feedback de acerto ou erro

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  noLoop();
  displayPergunta();
}

function draw() {
  background(240);

  // Exibe título
  textSize(24);
  fill(0);
  text("Festejando Conexões: Campo e Cidade", width / 2, 50);

  // Exibe a pergunta
  textSize(18);
  textAlign(LEFT, TOP);
  text(perguntas[perguntaAtual].pergunta, 20, 100, width - 40, 100);

  // Exibe as alternativas
  for (let i = 0; i < perguntas[perguntaAtual].alternativas.length; i++) {
    let y = 170 + i * 50;
    fill(255);
    stroke(0);
    rect(50, y, width - 100, 40, 10); // Botões de alternativa
    fill(0);
    noStroke();
    textSize(16);
    text(perguntas[perguntaAtual].alternativas[i], width / 2, y + 25);
  }

  // Exibe o feedback (acertou ou errou)
  if (feedback !== "") {
    textSize(20);
    fill(feedback === "Certo" ? "green" : "red");
    text(feedback, width / 2, height - 50);
  }
}

function mousePressed() {
  // Verifica qual alternativa o mouse clicou
  for (let i = 0; i < perguntas[perguntaAtual].alternativas.length; i++) {
    let y = 170 + i * 50;
    if (mouseY > y && mouseY < y + 40) {
      // Verifica se a resposta está certa ou errada
      if (i === perguntas[perguntaAtual].resposta) {
        respostasCertas++;
        feedback = "Certo";
      } else {
        feedback = "Errado";
      }
      perguntaAtual++;

      if (perguntaAtual < perguntas.length) {
        setTimeout(displayPergunta, 1000); // Espera 1 segundo para mostrar a próxima pergunta
      } else {
        setTimeout(mostrarResultado, 1000); // Espera 1 segundo para mostrar o resultado final
      }
      break;
    }
  }
}

function displayPergunta() {
  clear();
  feedback = ""; // Reseta o feedback de acerto/erro
  redraw();
}

function mostrarResultado() {
  clear();
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  text(`Você acertou ${respostasCertas} de ${perguntas.length} perguntas!`, width / 2, height / 2);
  textSize(20);
  text("Obrigado por participar!", width / 2, height / 2 + 40);
}
