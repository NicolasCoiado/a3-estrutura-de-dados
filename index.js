 const fs = require('fs')
 const Doc = require('./classes/doc.js')
 const Grafo = require('./classes/grafo.js')

try {
    const txtCompleto = fs.readFileSync('./textos/test.txt', 'utf-8')

    const documento = new Doc(txtCompleto)
    const grafo = new Grafo()
    
    const conteudo = documento.processarTexto()
    
    grafo.criarGrafo(conteudo)

} catch (err) {
    console.error(err)
}
 
