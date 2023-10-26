
 const fs = require('fs')
 const Doc = require('./doc.js')


try {
    const textoCompleto = fs.readFileSync('./test.txt', 'utf-8')

    let docx = new Doc(textoCompleto)
    console.log(docx)
    
    // const frBrutas = textoCompleto.split(".")
    // const frSemQuebras = frBrutas.map(frase => frase.replace(/\r\n/g, ''))
    // const frMin = frSemQuebras.map(frase => frase.toLocaleLowerCase())
    
    // const artigos = [' a ', ' as ', ' o ', ' os ']
      
    // console.log(frMin)
} catch (err) {
    console.error(err)
}
 

