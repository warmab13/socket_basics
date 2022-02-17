

const socketController = (socket) =>{
    console.log('Connected client', socket.id);

    socket.on('disconnect', ()=>{
        // console.log('Disconnected client', socket.id);
    })

    socket.on( 'enviar-message', async ( payload, callback )=>{

        const id = 123456;
        callback({id, date: new Date().getTime()});
        socket.broadcast.emit('enviar-message', payload)
    })
}

module.exports = {
    socketController
}