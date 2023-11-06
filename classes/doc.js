class Doc {
    constructor(txtCompleto){
        this.txtCompleto = txtCompleto.toLowerCase() //Deixando os caracters minúsculos
    }

    processarTexto(){
        //Expressões regulares:
        const pontVirg = /[,;]/g //RegExp para encontrar "," e ";" .
        const pontos = /[.!?][\s\n]+/g; // RegExp para encontrar os pontos que delimitam frases.
        const artigos = /\b(?:u[mn][as]?[s]?|[ao][s]?)\.?\b\s?/gi; //RegExp que identifica artigos.
        const preposicoes = /\b(de|em|a|para|por|com|sem|sob|sobre|entre|até|ante|apos|durante|depois)\b/g; //RgExp que identifica preposições.
        const conjuncoes = /\b(e|ou|mas|porque|se|quando|embora|como)\b/g; //RegExp que identifica conjunções.
        // const artigosDef =/\b[ao][s]?)\.?\b\s?/gi
        // const artigosIndef = /\b?:u[mn][as]?[s]?|)\b\s/gi;
        
        let txtProcessado = this.txtCompleto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");//Retirando a acentuação do texto.
        txtProcessado = txtProcessado.replace(pontVirg, "") //Retirando as vírgulas e ponto e vígulas do texto.
        txtProcessado = txtProcessado.replace(artigos, "") //Retirando os artigos do texto.
        txtProcessado = txtProcessado.replace(preposicoes, "") // Retirando as preposições do texto.
        txtProcessado = txtProcessado.replace(conjuncoes, "") // Retirando as conjunções do texto.

        const frases = txtProcessado.split(pontos)//Dividindo o texto em frases.

        for (let i =0; i<frases.length; i++){ //Percorrendo o array frases.
            if(i+1==frases.length) //Se a frase iterada, for a última frase...
                frases[i]=frases[i].replace(".","") //Retira o último ponto final.
        }

        let palavras = [] //Criando a matriz que armazenará as palavras.

        for (let frase of frases) { //Percorrendo as frases.
            let palavrasFrase = frase.split(" ") //Criando um array com as palavras de cada frase.
            palavras.push(palavrasFrase); //Incluindo estas palavras no array de palavras, que agora passa a ser uma matriz.
        }

        return palavras //Retornando as palavras.
        
    }

}

module.exports = Doc

