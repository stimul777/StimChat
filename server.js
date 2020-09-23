console.log('Сервер запущен!!!')
let express = require('express')
let app = express()
let server = require('http').createServer(app)
let io = require('socket.io').listen(server)

server.listen(8080)

// отслеживаемый адрес
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

// Пользователи
users = []
// Все подключения
allConnections = []

io.sockets.on('connection', (socket) => {
    // добавить подключение
    console.log('Соединение установлено!')
    allConnections.push(socket)

    socket.on('disconnect', ()=> {
        allConnections.splice(allConnections.indexOf(socket), 1)
        console.log('Отключено!')
    })

    // получаем сообщение
    socket.on('send Message', (data) => {
        io.sockets.emit('add message', {message: data.message, name: data.name})
    })


})