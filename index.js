 const fs = require('fs')
 const Doc = require('./classes/doc.js')
 const Grafo = require('./classes/grafo.js')

try {
    const txtCompletoD1 = fs.readFileSync('./textos/artigo_1.txt', 'utf-8')
    const documentoD1 = new Doc(txtCompletoD1) 
    const frasesD1 = documentoD1.processarTexto()
    const grafo1 = grafoDoc(frasesD1)
    const topicosD1 = grafo1.encontrarTopicos()
    const coatoresD1 = documentoD1.encontrarAutores()
    
    const txtCompletoD2 = fs.readFileSync('./textos/artigo_2.txt', 'utf-8')
    const documentoD2 = new Doc(txtCompletoD2) 
    const frasesD2 = documentoD2.processarTexto()
    const grafo2 = grafoDoc(frasesD2)
    const topicosD2 = grafo2.encontrarTopicos()
    const coatoresD2 = documentoD2.encontrarAutores()

    const txtCompletoD3 = fs.readFileSync('./textos/artigo_2.txt', 'utf-8')
    const documentoD3 = new Doc(txtCompletoD3) 
    const frasesD3 = documentoD3.processarTexto()
    const grafo3 = grafoDoc(frasesD3)
    const topicosD3 = grafo3.encontrarTopicos()
    const coatoresD3 = documentoD3.encontrarAutores()

    const autoresGerais = [coatoresD1, coatoresD2, coatoresD3]

    const grafoCoatoria = grafoAut(autoresGerais)

    const principaisAutores = grafoCoatoria.encontrarTopicos()
    console.log(principaisAutores)

    function grafoAut (autoresGerais){
        let contadorVertices = 0
        for(const autoresArtigo of autoresGerais){
            contadorVertices+=autoresArtigo.length
        }

        const grafo = new Grafo(contadorVertices)

        for (let autoresArtigo of autoresGerais){
            autoresArtigo.map(popularGrafo)
        }

        return grafo
        function popularGrafo(autor, indice, autoresArtigo){
            let vertice1 = grafo.addVertice(autor)
            if(autoresArtigo[indice+1]!=undefined){
                let vertice2 = grafo.addVertice(autoresArtigo[indice+1])
                grafo.addAresta(vertice1, vertice2)
            }
        }
    }
    function grafoDoc (frases){
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
 
