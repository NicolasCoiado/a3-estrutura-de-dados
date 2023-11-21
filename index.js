 const fs = require('fs')
 const Doc = require('./classes/doc.js')
 const Grafo = require('./classes/grafo.js')

try {
    const txtCompletoD1 = fs.readFileSync('./textos/arq_1.txt', 'utf-8')
    const documentoD1 = new Doc(txtCompletoD1) 
    const frasesD1 = documentoD1.processarTexto()
    const grafo1 = grafoDoc(frasesD1)
    const topicosD1 = grafo1.encontrarTopicos()
    const referenciasD1 = documentoD1.encontrarRefs()
    
    const txtCompletoD2 = fs.readFileSync('./textos/arq_2.txt', 'utf-8')
    const documentoD2 = new Doc(txtCompletoD2) 
    const frasesD2 = documentoD2.processarTexto()
    const grafo2 = grafoDoc(frasesD2)
    const topicosD2 = grafo2.encontrarTopicos()
    const referenciasD2 = documentoD2.encontrarRefs()

    const refGerais = []
    refGerais.push(referenciasD1)
    refGerais.push(referenciasD2)

    const grafoRef = grafoRefe(refGerais)
    
    console.log(grafoRef)

    function grafoRefe (allRef){
        let contadorVertices=0
        const grafoAut = new Grafo(contadorVertices)

        for(const referencia of allRef){
            contadorVertices++
            const referenciados = referencia.listaRef 
            
            for(autorRef of referenciados){
                contadorVertices++
            }
        }

        for(const referencia of allRef){
            const autor = referencia.autor
            const referenciados = referencia.listaRef 
            
            let vertice1 = grafoAut.addVertice(autor)
            for(autorRef of referenciados){
                let vertice2 = grafoAut.addVertice(autorRef)
                grafoAut.addAresta(vertice1, vertice2)
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
 
