 const fs = require('fs')
 const Doc = require('./classes/doc.js')
 const Grafo = require('./classes/grafo.js')

try {
    const txtCompleto = fs.readFileSync('./textos/arq_4.txt', 'utf-8')
    const documento = new Doc(txtCompleto) 
    const frases = documento.processarTexto()
    const grafo1 = construirGrafo(frases)

    console.log(grafo1.encontrarTopicos())

    function construirGrafo (){
        let contadorVertices = 0

        for (let frase of frases){
            contadorVertices += frase.length
        }

        const grafo = new Grafo(contadorVertices)
        for (let frase of frases){
            frase.map(popularGrafo)
        }
        
        function popularGrafo(palavra, indice, palavras){
            let vertice1 = grafo.addVertice(palavra)
            if(palavras[indice+1]!=undefined){
                let vertice2 = grafo.addVertice(palavras[indice+1])
                grafo.addAresta(vertice1, vertice2)
            }
        }
        return grafo
    }
    
} catch (err) {
    console.error(err)
}
 
