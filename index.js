 const fs = require('fs')
 const Doc = require('./doc.js')


try {
    const txtCompleto = fs.readFileSync('./test.txt', 'utf-8')

    const docx = new Doc(txtCompleto)
    
    const conteudo = docx.processarTexto()

    console.log(conteudo)

} catch (err) {
    console.error(err)
}
 

