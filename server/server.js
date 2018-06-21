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

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app',
        createdAt: new Date().getTime()
    })

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined',
        createdAt: new Date().getTime()
    })

    socket.on('createMessage', (data) => {
        console.log('createMessage', data)
        io.emit('newMessage', {
                from: data.from,
                text: data.text,
                createdAt: new Date().getTime()
            })
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