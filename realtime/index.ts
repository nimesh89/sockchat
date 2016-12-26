import {Server} from 'http'
import * as sock from 'socket.io' 
import * as redis from 'socket.io-redis'

export function init(server: Server){
    var sockServer = sock(server)
    sockServer.adapter(redis({ host:'localhost', port:6379 }))
    sockServer.on("connection", (socket)=>{
        sockServer.emit("newcon", JSON.stringify({ msg : "test" }))
    })
}