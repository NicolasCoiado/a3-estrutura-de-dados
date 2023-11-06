const Vertice = require('./vertice.js') //Importando a classe Vértice
const Aresta = require('./aresta.js') //Importando a classe Aresta


class Grafo {
    criarGrafo(palavras){ 
        const vertices = [] //Criando um array que armazenará objetos do tipo vertice
        const arestas = [] //Criando um array que armazenará objetos do tipo aresta

        for (let i=0; i<palavras.length; i++){ //Percorrendo as frases
            for(let i2=0; i2<palavras[i].length; i2++){ //Percorrendo as palavras

                const verticeAnterior = criarVertice(palavras[i][i2]) //Definindo um vértice (inciando pelo primeiro) como "Anterior"
                const verticeAtual = (palavras[i][i2+1])? criarVertice(palavras[i][i2+1]):false //Definindo o vértice atual, que sempre será o vértice posterior ao "Superior"
                if(verticeAnterior && verticeAtual){ //Se os dois vértices existirem
                    criarAresta(verticeAnterior, verticeAtual) //É criada a aresta entre eles
                }
                    
            }
        } 

        function criarVertice (palavra){ //Criando uma função para criar um vértice
            if(vertices.length>0){ //Caso já exista algum registro no array "vertices"
                let verticeExistente //Variável booleana que verificará se o vértice já não foi criado
                let localDoVertice //Variável que armazenará o local do vértice "repetido"

                for(let i=0; i<vertices.length; i++){ //Percorrendo os vértices já armazenados
                    if(vertices[i].palavra === palavra){ //Caso a palavra já tenha sido transformada em um vértice...
                        verticeExistente = vertices[i].palavra === palavra //verticeExistente recebe true
                        localDoVertice = vertices[i] //É armazenado o local do vértice que possui a palavra desejada
                    }
                }

                if(verticeExistente){ //Caso o vértice seja repetido
                    return localDoVertice //Retórna-se o local do vertice
                }else{ //Caso o vértice não seja repetido
                    const novoVertice = new Vertice(palavra, 0) //Cria-se um novo vértice
                    vertices.push(novoVertice) //O novo vértice é adicionado ao array de vértices
                    return novoVertice //O novo vértice é retornado para que possa se tornar o "Vértice anterior" na próxima iteração
                }

            }else{ //Caso não exista algum registro no array "vertices"
                const novoVertice = new Vertice(palavra, 0)//Cria-se um novo vértice
                vertices.push(novoVertice)//O novo vértice é adicionado ao array de vértices
                return novoVertice //O novo vértice é retornado para que possa se tornar o "Vértice anterior" na próxima iteração
            }
        }
        
        function criarAresta (v1Fora, v2Fora){ //Criando uma função para criar arestas
            if(arestas.length>0){ //Caso já exista algum registro no array "arestas"
                let arestaRepetida //Variável booleana que verificará se a aresta já não foi criada
                let localAresta //Variável que armazenará o local da aresta "repetida"
                for(let i=0; i<arestas.length; i++){//Percorrendo as arestas já armazenadas
                    if(arestas[i].pVertice.palavra === v1Fora.palavra && arestas[i].sVertice.palavra === v2Fora.palavra){ //Caso a aresta já exista em uma ordem
                        localAresta = i //O local da aresta é armazenado
                        arestaRepetida =true //arestaRepetida recebe true
                    }else if(arestas[i].pVertice.palavra === v2Fora.palavra && arestas[i].sVertice.palavra === v1Fora.palavra){ //Caso a aresta já exista em outra ordem
                        localAresta = i //O local da aresta é armazenado
                        arestaRepetida =true //arestaRepetida recebe true
                    }
                }    

                if(!arestaRepetida){ //Caso a aresta não seja repetida
                    v1Fora.grau++ //O grau do primeiro vértice da aresta é aumentado
                    v2Fora.grau++ //O grau do segundo vértice da aresta é aumentado
                    const novaAresta = new Aresta(v1Fora, v2Fora, 1) //A aresta é criada
                    arestas.push(novaAresta) //A aresta é adicionada ao array "arestas"
                }else{ //Caso a aresta seja repetida, e já exista no array "arestas"
                    arestas[localAresta].peso++ //A aresta recebe mais peso
                }
                
            }else{ //Caso não exista algum registro no array "arestas"
                v1Fora.grau++ //O grau do primeiro vértice da aresta é aumentado
                v2Fora.grau++ //O grau do segundo vértice da aresta é aumentado
                const novaAresta = new Aresta(v1Fora, v2Fora, 1) //A aresta é criada
                arestas.push(novaAresta) //A aresta é adicionada ao array "arestas"
            } 
        }
        
        //Exibindo o grafo:
        console.log("VERTICES:")
        console.log(vertices)
        console.log("===========")
        console.log("ARESTAS:")
        console.log(arestas)
        console.log("===========")
    }
    
}

module.exports = Grafo