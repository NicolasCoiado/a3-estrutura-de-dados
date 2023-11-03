 const fs = require('fs')
 const Doc = require('./doc.js')


try {
    const txtCompleto = fs.readFileSync('./test.txt', 'utf-8')

    const docx = new Doc(txtCompleto)
    
    const conteudo = docx.processarTexto()

    conteudo.palavras.forEach((frase)=>gerar(frase));

    function gerar(frase){
        frase.forEach((palavra)=>console.log(palavra));
        console.log("====")
    }
} catch (err) {
    console.error(err)
}
 

/*
vertices possuem palavras
vertices possuem arestas / arestas possuem vértices
arestas ligam vértices 
arestas possuem peso
vértices possuem grau

Se elas estão na mesma coluna na matriz (frase):
    Se as palavras estão uma ao lado da outra:
        Se uma ou as duas palavras já existem:
            Se aresta já existe:
                Aumente o peso da aresta
            Se não:
                Crie uma aresta que ligue as duas palavras
        Se não:
            Crie um ou dois vértices
    Se não:
        Não ligue as palavras
Se não:
        Não ligue as palavras


Grafo = [
	{aresta=> vertice1, vertice2, peso},
	{aresta=> vertice1, vertice2, peso},
	{aresta=> vertice1, vertice2, peso}
]

Aresta = {
	Vertice1 = {
		Palavra = ""
		Grau = 1
	}
	Vertice2 = {
		Palavra = ""
		Grau = 4
	}
	Peso = 4
}
*/