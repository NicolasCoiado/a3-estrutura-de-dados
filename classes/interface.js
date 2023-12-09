const readline = require("readline");

async function interface(topicos, autores, autInfluentes, grafoSimilaridades) {
    console.log("Este software é capaz de ler resumos de artigos científicos e fornecer algumas informações sobre eles.");
    console.log("Escolha o que deseja saber:");
    console.log("Digite 1 para saber os principais tópicos de um artigo.");
    console.log("Digite 2 para saber quem são os autores de um artigo.");
    console.log("Digite 3 para saber quem são os autores mais influentes da nossa base de artigos.");
    console.log("Digite 4 para visualizar o grafo de similaridade entre os artigos.");

    const resOpcoes = await pergunta();
    let artigo

    switch (resOpcoes) {
      case "1":
          console.log("Você escolheu a opção 1. Digite um número (1-60) para selecionar o artigo desejado:")
          artigo = await pergunta()
          console.log(`Os principais tópicos do artigo ${artigo} são:`)
          percorrer(topicos[artigo-1])
          break;
      case '2':
          console.log('Você escolheu a opção 2. Digite um número (1-60) para selecionar o artigo desejado:')
          artigo = await pergunta();
          console.log(`Os autores do artigo ${artigo} são:`)
          percorrer(autores[artigo-1])
          break
      case '3':
          console.log('Os autores mais influentes da nossa base de artigos são:')
          percorrer(autInfluentes)
          break
      case '4':
          console.log('O grafo de similaridade entre os artigos é o seguinte:')
          grafoSimilaridades.mostrarGrafo()
          break
      default:
          console.log('Opção inválida.');
          break;
  }
}

function pergunta() {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('=>', (nEscolha) => {
            rl.close();
            resolve(nEscolha.trim());
        });
    });
}

function percorrer(arr){
    for(let item of arr){
        const formatado = item.trim();
        console.log(`- ${formatado}`);
    }
}

module.exports = interface;
