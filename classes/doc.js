const stopwords = require('../stopwords.json') 

class Doc {
    constructor(txtCompleto){
        this.txtCompleto = txtCompleto
    }
    encontrarAutores(){
        const txtCompleto = this.txtCompleto
        const quebra = /\r\n/g
        const partes = txtCompleto.split(quebra)
        const txtAutores = partes[partes.length-1].toUpperCase()
        const autores = txtAutores.split(",")
        return autores
    }
    processarTexto(){
        const txtCompleto = this.txtCompleto
        const quebra = /\r\n/g
        const partes = txtCompleto.split(quebra)
        partes.pop()
        let txtResumo = ''
        for(const paragrafo of partes){
            if (txtResumo === '')
                txtResumo+=paragrafo
            else
                txtResumo+=`\n${paragrafo}`
        }
        const txtMinusculo = txtResumo.toLowerCase()
        const pontVirg = /[,;\[\]\{\}\(\)\-\n]/g
        const pontos = /[.!?][\s\n]+/g
        const numeros = /[0-9]+/g
        const formattedStopwords = new RegExp('\\b(' + stopwords.palavras.join('|') + ')' +'\\b', 'g');

        let txtProcessado = txtMinusculo.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
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
