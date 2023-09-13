const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(`<h1>Hola mundo desde HTTP-NODE</h1>`)
    res.end()
})

server.listen(3001, () => {
    console.log("La aplicación se esta ejecutando en http://localhost:3000")
})