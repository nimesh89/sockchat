import {Server} from 'http'
import * as sock from 'socket.io' 
import * as redis from 'socket.io-redis'

export function init(server: Server){
    var serv = sock(server)
    var sockServer = serv.adapter(redis({ host:'localhost', port:6379 }))
    sockServer.on("connection", (socket)=>{
        socket.broadcast.emit("newcon", { msg : "test" })
    })
}