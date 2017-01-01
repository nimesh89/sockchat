$(function () {
    var display = $("#displayarea")

    var socket = io();
    socket.on('newcon', function (msg) {
        console.log(msg);
        display.append("<div id=\""+msg.id+"\">"+msg.id+"</div")
    });

    socket.on('conlost', function (msg) {
        console.log(msg);
        $("#" + msg.id).remove()
    });
})