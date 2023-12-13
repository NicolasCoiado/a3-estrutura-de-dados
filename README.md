# LEITOR DE ARTIGOS
## Estrutura de dados e algoritmos

### Resumo
Este projeto trata-se de um software capaz de ler resumos de artigos ciêntíficos, e identificar:
* Os principais tópicos (assuntos) de casa resumo;
* Os autores de cada resumo;
* Os autores mais influentes da base de resumos;
* A similaridade entre dois resumos.

### Objetivo
Este projeto foi desenvolvido como uma atividade avaliativa para a matéria de **Estrutura de Dados e Algoritmos**, do curso de **Ciência da Computação**. Seu objetivo é a implementação de grafos e a avaliação da performance apresentada pelas soluções desenvolvidas.

### Notações Big O
Não seria possível identificar a eficiência do software por inteiro, por isso, dividi o programa em 3 funções, sendo elas: **Identificação dos tópicos** de cada artigo, **Identificação dos autores** mais influentes e a **Medição de similaridade** entre resumos.


#### Identificação dos tópicos
Para a identificação dos tópicos de cada resumo, o texto passa por diversas etapas, como:
* Tokenização;
* Remoção de stopwords;
* Construção do grafo (Que será abordada melhor no decorrer da leitura);
* E a comparação entre vértices.

Na etapa de comparação entre vértices, a condição usada para determinar o que é tópico importante para o resumo é a seguinte:

`A palavra deve ter um grau maior que o grau médio das outras palavras; E a palavra deve ter ao menos uma aresta mais pesada em comparação com o peso médio das arestas em geral`.

Para a implementação desta lógica, utilizei o algoritmo de busca simples, ou seja, a notação big O para esta função é **O(n)**. E isto ocorre pois para aplicar as condições necessárias, o programa visita e compara todas os vértices do grafo.

#### Identificação dos autores mais influentes
Para a identificação dos autores mais influentes, o software constrói um grafo, onde cada autor representa um vértice, e a cada coautoria, este vértice recebe uma aresta. Após a constução do grafo, as condições para determinar que um autor é influente, são muito parecidas com as condições já apresentadas, sendo elas:

`O vértice do autor deve ter um grau maior que o grau médio dos outros autores; E o autor deve ter ao menos uma aresta mais pesada em comparação com o peso médio das arestas em geral`.

Para a implementação desta lógica, utilizei o algoritmo de busca simples, ou seja, a notação big O para esta função é **O(n)**. E isto ocorre pois para aplicar as condições necessárias, o programa visita e compara todas os vértices do grafo.

#### Medição de similaridade 
Para compreender a medição de similaridade entre resumos, devemos entender como os grafos são construídos neste programa. Eles são construídos através de **MAPAS**, onde cada vértice é uma chave, que é capaz de armazenar um array de objetos, que por sua vez, representam as arestas ligadas a aquele vértice.

A medição de similaridade entre os resumos, é feita ao compararmos o peso das arestas de um grafo, grafo este que o próprio software nos retorna.

A notação Big O que representa o retorno de informações em um mapa, é **O(1)** em seu caso médio e **O(n)** em seu pior caso. Pelo fato da função de medição de similiridade ser apenas o retorno das informações de um grafo, podemos afirmar que estas notações também podem ser utilizadas para descrever esta função.

## Agradecimento e Integrantes
Obrigado por ter lido até aqui, os responsáveis pelo desenvolvimento deste projeto são:

Aline de Resende Barbosa - 32225080

Matheus Cruz - 8222243702

Nicolas Mauricio Martins Coiado - 822149637
