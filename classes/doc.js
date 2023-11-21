const stopwords = require('../stopwords.json') 

class Doc {
    constructor(txtCompleto){
        this.txtCompleto = txtCompleto
    }
    encontrarRefs(){
        const txtCompleto = this.txtCompleto
        const quebra = /\r\n/g
        const partes = txtCompleto.split(quebra)
        const localRef = partes.indexOf("Referências bibliográficas:")
        const localAutor = partes.length
        const listaRef = []

        let autor = partes[localAutor-1]
        autor = autor.substr(7, autor.length-1)

        let referencias = []
        for(let i=0; i<partes.length; i++){
            if(i>localRef && i!=partes.length-1){
                referencias.push(partes[i])
            }
        }
        
        for(let referencia of referencias){
            const ref = referencia.split('.', 2)
            const autorRef = ref[0]
            listaRef.push(autorRef)
        }
        return {listaRef, autor}
    }
    processarTexto(){
        const txtCompleto = this.txtCompleto
        const quebra = /\r\n/g
        const partes = txtCompleto.split(quebra)
        const localRef = partes.indexOf("Referências bibliográficas:")
        let texto = ''
        for(let i=0; i<partes.length; i++){
            if(i<localRef){
                texto+=`\n${partes[i]}`
            }
        }
        const txtMinusculo = texto.toLowerCase()
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
