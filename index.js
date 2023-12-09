const fs = require('fs')
const Doc = require('./classes/doc.js')
const Grafo = require('./classes/grafo.js')
const GrafoSimilaridade = require('./classes/grafoSimilaridade.js')
const interface = require('./classes/interface.js')

try {
    const totalArtigos = 60
    const topicos = []
    const autores = []
    
    for(let i = 1 ; i<=totalArtigos; i++){
        let artigo = lerArtigo(i)
        autores.push(artigo.coatores)
        topicos.push(artigo.topicos)
    }

    const grafoAuto = grafoAut(autores)
    const autInfluentes = grafoAuto.autInfluencia() 
    const grafoSimilaridades = grafoSim(topicos, totalArtigos) 

    interface(topicos, autores, autInfluentes, grafoSimilaridades)

    function lerArtigo(nArtigo){
        const txtCompleto = fs.readFileSync(`./textos/artigo_${nArtigo}.txt`, 'utf-8')
        const documento = new Doc(txtCompleto) 
        const frases = documento.processarTexto()
        const grafo = grafoDoc(frases)
        const topicos = grafo.encontrarTopicos()
        const coatores = documento.encontrarAutores()
        
        return {topicos, coatores}
    }

    function medirSimilaridade(topicos, art1, art2){
        const qtdtArt1 = topicos[art1].length
        const qtdtArt2 = topicos[art2].length
        let iguais1 = 0
        let iguais2 = 0
        for (let tArt1 of topicos[art1]){
            for(let tArt2 of topicos[art2]){
                if(tArt1 === tArt2){
                    iguais1++
                }
            }
        }
        for (let tArt2 of topicos[art2]){
            for(let tArt1 of topicos[art1]){
                if(tArt2 === tArt1){
                    iguais2++
                }
            }
        }
        const similaridade12 = (100*iguais1)/qtdtArt1
        const similaridade21 = (100*iguais2)/qtdtArt2

        const mediaSimilaridade = (similaridade12 + similaridade21) / 2

        return mediaSimilaridade
    }
    function grafoSim(topicos, totalArtigos){
        const grafo = new GrafoSimilaridade(totalArtigos)
        for(let i = 1 ; i < totalArtigos; i++){ 
            for (let i2 = 1 ; i2 < totalArtigos; i2++){
                if(i!=i2){
                    const similaridadeGrafos = medirSimilaridade(topicos, i, i2)
                    if(similaridadeGrafos>0){
                        let vertice1 = grafo.addVertice(topicos[i])
                        let vertice2 = grafo.addVertice(topicos[i2])
                        grafo.addAresta(vertice1, vertice2, similaridadeGrafos)
                    }
                }
    
            }
        }
        return grafo
    }

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
 
