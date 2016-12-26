$(function () {
    var display = $("displayarea")

    var socket = io();
    socket.on('newcon', function (msg) {
        console.log('message: ' + msg);
    });
})