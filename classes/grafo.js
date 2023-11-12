class Grafo {
    constructor(nVertices){
        this.nVertices = nVertices; //Número de vértices
        this.listaAdj = new Map(); //Lista de adjacências
    }
    addVertice(vertice){
        let chavesVertice = this.listaAdj.keys()
        let verticeRepetido

        for (let verticeMapa of chavesVertice){ //Percorrendo chaves de Vértices, vértice a vértice
            if(vertice===verticeMapa)
                verticeRepetido=true
        }

        if(!verticeRepetido){
            this.listaAdj.set(vertice, []);
            return vertice
        }else{
            return vertice
        }
    }
    addAresta(vertice1, vertice2){
        let arestaExistente
        
        let chavesVertice = this.listaAdj.keys() //Listando chaves de Vértices

        for (let vertice of chavesVertice){ //Percorrendo chaves de Vértices, vértice a vértice
            let arestas = this.listaAdj.get(vertice) //Entrando no array de arestas do vértice

            for (let aresta of arestas){//Percorrendo as arestas do vértice, aresta a aresta
                if(vertice===vertice1 && aresta.verticeDestino===vertice2){
                    arestaExistente=true
                    aresta.peso++
                }else if(vertice===vertice2 && aresta.verticeDestino===vertice1){
                    arestaExistente=true
                    aresta.peso++
                }
            } 
        }
        
        if(arestaExistente){
    
        }else{
            this.listaAdj.get(vertice1).push({verticeDestino: vertice2, peso: 1})
            this.listaAdj.get(vertice2).push({verticeDestino: vertice1, peso: 1})
        
       
        }
    }
    mostrarGrafo(){
    let chavesVertice = this.listaAdj.keys();
        for (let vertice of chavesVertice){
            let arestas = this.listaAdj.get(vertice);
            console.log(vertice + " ")
            for (let aresta of arestas){
                
                console.log(aresta)
            }
        }
    }


}

module.exports = Grafo