
const stopwords = require('../stopwords.json') 

class Doc {
    constructor(txtCompleto){
        this.txtCompleto = txtCompleto.toLowerCase() //Deixando os caracters minúsculos
    }

    processarTexto(){
        //Expressões regulares:
        const pontVirg = /[,;\n]/g //RegExp para encontrar "," e ";" .
        const pontos = /[.!?][\s\n]+/g; // RegExp para encontrar os pontos que delimitam frases.
        const formattedStopwords = new RegExp('\\b(' + stopwords.words.join('|') + ')' +'\\b', 'g');

        let txtProcessado = this.txtCompleto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');//Retirando a acentuação do texto.
        txtProcessado = txtProcessado.replace(pontVirg, '') //Retirando as vírgulas e ponto e vígulas do texto.
        txtProcessado = txtProcessado.replace(formattedStopwords, '') 
       
        const frases = txtProcessado.split(pontos)//Dividindo o texto em frases.


        for (let i =0; i<frases.length; i++){ //Percorrendo o array frases.
            if(i+1==frases.length) //Se a frase iterada, for a última frase...
                frases[i]=frases[i].replace('.','') //Retira o último ponto final.
        }

        let palavras = [] //Criando a matriz que armazenará as palavras.

        for (let frase of frases) { //Percorrendo as frases.
            let palavrasFrase = frase.split(' ') //Criando um array com as palavras de cada frase.
            for(let i = 0; i<palavrasFrase; i++){
                if(!palavra===''){
                    palavrasFrase.splice(palavrasFrase[i], 1)
                }
            }
            palavras.push(palavrasFrase); //Incluindo estas palavras no array de palavras, que agora passa a ser uma matriz.
        }

        return palavras//Retornando as frases e as palavras.
        
    }

}

module.exports = Doc

