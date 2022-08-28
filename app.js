/* const http = require('http');

http.createServer(( req, res) => {
    res.write('Hola desde NodeJS')
})
.listen(8080);

console.log('Escuchando el puerto ', 8080); */

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hola desde NodeMonnn')
})

app.get('/cliente', function (req, res) {
    res.send('Esta ruta es para los clientes')
  })

app.listen(3000)


