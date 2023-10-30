 const fs = require('fs')
 const Doc = require('./doc.js')


try {
    const txtCompleto = fs.readFileSync('./test.txt', 'utf-8')

    const docx = new Doc(txtCompleto)
    
    const frases = docx.processarTexto()

    console.log(frases)

} catch (err) {
    console.error(err)
}
 

