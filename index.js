 const fs = require('fs')
 const Doc = require('./classes/doc.js')
 const Grafo = require('./classes/grafo.js')
//  const stopwords = require('./stopwords.json') 

try {
    const txtCompleto = fs.readFileSync('./textos/arq_2.txt', 'utf-8')
    const documento = new Doc(txtCompleto) 
    const frases = documento.processarTexto()
    construirGrafo(frases)

    function construirGrafo (){
        let contadorVertices = 0

        for (let frase of frases){
            contadorVertices += frase.length
        }

        const topicos = new Grafo(contadorVertices)
        for (let frase of frases){
            frase.map(criarGrafo)
        }
        

        function criarGrafo(palavra, indice, palavras){
            let vertice1 = topicos.addVertice(palavra)
            if(palavras[indice+1]!=undefined){
                let vertice2 = topicos.addVertice(palavras[indice+1])
                topicos.addAresta(vertice1, vertice2)
            }
        }

        topicos.encontrarTopicos()
        // topicos.mostrarGrafo()
    }
    
} catch (err) {
    console.error(err)
}
 
