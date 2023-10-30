class Doc {
    constructor(txtCompleto){
        this.txtCompleto = txtCompleto.toLowerCase()
    }

    processarTexto(){
        const pontVirg = /[,;]/g
        const pontos = /[.!?][\s\n]+/g;
        // const artigos =/\b[ao][s]?)\.?\b\s?/gi
        // const artigosIndef = /\b?:u[mn][as]?[s]?|)\b\s/gi;
        const artigos = /\b(?:u[mn][as]?[s]?|[ao][s]?)\.?\b\s?/gi;

        //Retirando a acentuação do texto:
        let txtProcessado = this.txtCompleto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        
        //Retirando as vírgulas e ponto e vígulas do texto:
        txtProcessado = txtProcessado.replace(pontVirg, "")
        
        //Retirando os artigos definidos do texto:
        txtProcessado = txtProcessado.replace(artigos, "")
        
        //Retirando os artigos definidos do texto:
        // txtProcessado = txtProcessado.replace(artigosIndef, "")

        //Dividindo o texto em frases:
        const frases = txtProcessado.split(pontos)

        for (let i =0; i<frases.length; i++){
            if(i+1==frases.length)
                frases[i]=frases[i].replace(".","")
        }

        let palavras = []

        for (let frase of frases) {
            let palavrasFrase = frase.split(" ")
            palavras = palavras.concat(palavrasFrase)
        }
        
        console.log(palavras)
    }

}

module.exports = Doc

