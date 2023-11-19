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

    addAresta(vertice1, vertice2){ //Método para adição de arestas ao grafo.
        let arestaExistente //Variável que armazenará a possibilidade da aresta já existir.
        
        const chavesVertice = this.listaAdj.keys() //Listando chaves de vértices.

        for (let vertice of chavesVertice){ //Percorrendo chaves de vértices.
            let arestas = this.listaAdj.get(vertice) //Armazenando as arestas de um vértice.

            for (let aresta of arestas){//Percorrendo as arestas do vértice.
                if(vertice===vertice1 && aresta.verticeDestino===vertice2){ //Caso a aresta exista...
                    arestaExistente=true //A variável "arestaExistente" recebe "true".
                    aresta.peso++ //A aresta em questão ganha +1 de peso.
                }else if(vertice===vertice2 && aresta.verticeDestino===vertice1){//Caso a aresta exista...
                    arestaExistente=true //A variável "arestaExistente" recebe "true".
                    aresta.peso++ //A aresta em questão ganha +1 de peso.
                }
            } 
        }
        
        if(!arestaExistente){ //Caso a aresta ainda não exista...
            this.listaAdj.get(vertice1).push({verticeDestino: vertice2, peso: 1}) //Adiconando a adjacência no primeiro vértice.
            this.listaAdj.get(vertice2).push({verticeDestino: vertice1, peso: 1}) //Adiconando a adjacência no segundo vértice.
        }
    }

    encontrarTopicos(){
        const listaAdj = this.listaAdj
        
        let mediaGraus = calcMediaGraus(listaAdj)
        let mediaPeso = calcMediaPeso(listaAdj)

        const maioresVertices = encontrarGraus(mediaGraus, listaAdj)
        
        const arestasPesadas  = encontrarPesos(mediaPeso, listaAdj)

        const topicos = comparacao(maioresVertices, arestasPesadas)
        
        return topicos
        
        function encontrarPesos(mediaPeso, listaAdj){
            const arestasPesadas = []
            for(let vertice of listaAdj.keys()){
                let arestas = listaAdj.get(vertice)
                
                for (let aresta of arestas){
                    if(aresta.peso>mediaPeso){
                        arestasPesadas.push({vertice1: vertice, vertice2:aresta.verticeDestino})
                    }
                }
            }
            return arestasPesadas
        }

        function calcMediaPeso (listaAdj) {
            let pesoTotal=0
            let totalArestas=0

            for(let vertice of listaAdj.keys()){
                let arestas = listaAdj.get(vertice)
                totalArestas+=arestas.length
                for (let aresta of arestas){
                    pesoTotal += aresta.peso
                }
            }
            return pesoTotal/totalArestas
        }
        
        function encontrarGraus (mediaGraus, listaAdj){
            const maioresVertices = []
            for(let vertice of listaAdj.keys()){
                let arestas = listaAdj.get(vertice)
                if(arestas.length>mediaGraus){
                    maioresVertices.push(vertice)
                }
            }
            return maioresVertices
        }

        function calcMediaGraus  (listaAdj) {
            let somasGraus = 0
            let qtdVertices = listaAdj.size
            const chavesVertice = listaAdj.keys()

            for (let vertice of chavesVertice){
                let arestas = listaAdj.get(vertice)
                somasGraus += arestas.length
            }        
            
            return somasGraus/qtdVertices
            
        }

        function comparacao  (maioresVertices, arestasPesadas) {
            const topicos = []
            for(const vertice of maioresVertices){
                for(const aresta of arestasPesadas){
                    if(vertice === aresta.vertice1 || vertice === aresta.vertice2){
                        if(!topicos.includes(vertice)){
                            topicos.push(vertice)
                        }
                    }
                }
            }
            return topicos
        }
    }


    mostrarGrafo(){
    const chavesVertice = this.listaAdj.keys()
        for (let vertice of chavesVertice){
            let arestas = this.listaAdj.get(vertice)
            console.log(vertice + " ")
            for (let aresta of arestas){
                
                console.log(aresta)
            }
        }
    }


}

module.exports = Grafo