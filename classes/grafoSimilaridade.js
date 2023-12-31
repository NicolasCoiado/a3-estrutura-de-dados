class Grafo {

    constructor(nVertices){
        this.nVertices = nVertices; //Número de vértices.
        this.listaAdj = new Map(); //Lista de adjacências.
    }

    addVertice(vertice){ //Método para adição de vértices ao grafo.
        const chavesVertice = this.listaAdj.keys() //Variável que armazenará as chaves do mapa.
        let verticeRepetido //Variável que armazenará a possibilidade do vértice já existir.
        for (let verticeMapa of chavesVertice){ //Percorrendo chaves de vértices.
            if(vertice===verticeMapa) //Se o vértice que desejamos criar, já existir...
                verticeRepetido=true //A variável "Vertice repetido" recebe "true".
        }

        if(!verticeRepetido){ //Caso o vértice não exista...
            this.listaAdj.set(vertice, []) //O vértice é adicionado à lista de adjacências.
            return vertice //Retornam o vértice.
        }else{ //Caso o vértice já exista.
            return vertice //Retornam o vértice.
        }
    }

    addAresta(vertice1, vertice2, similaridadeGrafos){ //Método para adição de arestas ao grafo.
        let arestaExistente //Variável que armazenará a possibilidade da aresta já existir.
        
        const chavesVertice = this.listaAdj.keys() //Listando chaves de vértices.

        for (let vertice of chavesVertice){ //Percorrendo chaves de vértices.
            let arestas = this.listaAdj.get(vertice) //Armazenando as arestas de um vértice.
            for (let aresta of arestas){//Percorrendo as arestas do vértice.
                if(vertice===vertice1 && aresta.verticeDestino===vertice2){ //Caso a aresta exista...
                    arestaExistente=true //A variável "arestaExistente" recebe "true".
                }else if(vertice===vertice2 && aresta.verticeDestino===vertice1){//Caso a aresta exista...
                    arestaExistente=true //A variável "arestaExistente" recebe "true".
                }
            } 
        }
        
        if(!arestaExistente){ //Caso a aresta ainda não exista...
            this.listaAdj.get(vertice1).push({verticeDestino: vertice2, peso: similaridadeGrafos}) //Adiconando a adjacência no primeiro vértice.
            this.listaAdj.get(vertice2).push({verticeDestino: vertice1, peso: similaridadeGrafos}) //Adiconando a adjacência no segundo vértice.
        }
    }

    mostrarGrafo(){
        const chavesVertice = this.listaAdj.keys()
            for (let vertice of chavesVertice){
                let arestas = this.listaAdj.get(vertice)
                console.log("Vértice: "+vertice)
                for (let aresta of arestas){                    
                    console.log("Aresta com: "+aresta.verticeDestino)
                    console.log("Peso da aresta: "+aresta.peso)
                    console.log("------------------------------")
                }
                console.log(" ")
            }
        }
}

module.exports = Grafo