const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const { generateMessage } = require('./utils/message.js')

const publicPAth = path.join(__dirname, '../public/')
const port = process.env.PORT || 3000
var app = express()
var server = http.createServer(app)
var io = socketIO(server)

app.use(express.static(publicPAth))

io.on('connection', (socket) => {
    console.log('New user connected')

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'))

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'))

    socket.on('createMessage', (message) => {
        console.log('createMessage', message)
        io.emit('newMessage', generateMessage(message.from, message.text))
            // socket.broadcast.emit('newMessage', {
            //     from: data.from,
            //     text: data.text,
            //     createdAt: new Date().getTime()
            // })
    })
})

server.listen(port, () => {
    console.log(`Started at port ${port}`)
})