const express = require('express')
const cors = require('cors')

class Server{

    constructor(){
        this.app    = express();
        this.port   = process.env.PORT;
        this.server = require('http').createServer( this.app );
        this.io = require('socket.io')( this.server )

        this.paths = {
        }

        //Middlewares
        this.middlewares();

        //Application Routes
        this.routes();

        //Sockets config
        this.sockets();
    }


    middlewares(){

        //CORS
        this.app.use( cors() );

        //Public Folder
        this.app.use( express.static('public') );

    }

    routes(){
        //this.app.use(this.paths.auth, require('../routes/auth'))
    }

    sockets(){
        this.io.on('connection', socket =>{
            console.log('Connected client', socket.id);

            socket.on('disconnect', ()=>{
                // console.log('Disconnected client', socket.id);
            })

            socket.on( 'enviar-message', async ( payload, callback )=>{

                const id = 123456;
                callback({id, date: new Date().getTime()});
            //    this.io.emit('enviar-message', payload)
            })
        })
    }

    listen(){
        this.server.listen(this.port, ()=>{
            console.log("Servidor corriendo en puerto", this.port)
        })
    }

}


module.exports = Server