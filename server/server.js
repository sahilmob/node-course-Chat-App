const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const publicPAth = path.join(__dirname, '../public/')
const port = process.env.PORT || 3000
var app = express()
var server = http.createServer(app)
var io = socketIO(server)

app.use(express.static(publicPAth))

io.on('connection', (socket) => {
    console.log('New user connected')

    socket.emit('newEmail', {
        from: 'mike@example.com',
        text: 'Hey. What is going on',
        createdAt: 123
    })

    socket.emit('newMessage', {
        from: 'Sahil',
        text: 'Hey this is Sahil',
        createdAt: 333
    })


    socket.on('disconnect', () => {
        console.log('User disconnected')
    })

    socket.on('createMessage', (data) => {
        console.log('createMessage', data)
    })
})




server.listen(port, () => {
    console.log(`Started at port ${port}`)
})