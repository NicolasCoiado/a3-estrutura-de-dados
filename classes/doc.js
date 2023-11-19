const stopwords = require('../stopwords.json') 

class Doc {
    constructor(txtCompleto){
        this.txtCompleto = txtCompleto.toLowerCase()
    }

    processarTexto(){
        const pontVirg = /[,;\[\]\{\}\(\)\-\n]/g
        const pontos = /[.!?][\s\n]+/g
        const numeros = /[0-9]+/g
        const formattedStopwords = new RegExp('\\b(' + stopwords.palavras.join('|') + ')' +'\\b', 'g');

        let txtProcessado = this.txtCompleto.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        txtProcessado = txtProcessado.replace(pontVirg, '') 
        txtProcessado = txtProcessado.replace(formattedStopwords, ' ')
        txtProcessado = txtProcessado.replace(numeros, '')
       
        
        const frases = txtProcessado.split(pontos)

        for (let i = 0; i < frases.length; i++){
            if(i + 1 == frases.length)
                frases[i] = frases[i].replace('.', '')
        }

        let palavras = []

        for (let frase of frases) {
            let palavrasFrase = frase.split(' ').filter(palavra => palavra !== '')
            palavras.push(palavrasFrase)
        }
        return palavras
    }
}

module.exports = Doc
