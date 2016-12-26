import {Server} from 'http'
import * as sock from 'socket.io' 

export function init(server: Server){
    var sockServer = sock(server)
    sockServer.on("connection", (socket)=>{
        sockServer.emit("newcon", JSON.stringify({ msg : "test" }))
    })
}