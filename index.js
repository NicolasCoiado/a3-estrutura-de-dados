const fs = require('fs')

try {
  const textoCompleto = fs.readFileSync('./test.txt', 'utf-8')
  const frBrutas = textoCompleto.split(".")
  const frSemQuebras = frBrutas.map(frase => frase.replace(/\r\n/g, ''))
  const frMin = frSemQuebras.map(frase => frase.toLocaleLowerCase())

  const artigos = [' a ', ' as ', ' o ', ' os ']
  
  console.log(frMin[1].replace(' a ', ' '))

} catch (err) {
  console.error(err)
}
