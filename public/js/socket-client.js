
//HTML Refs
const lblOnline  = document.querySelector('#lblOnline ');
const lblOffline = document.querySelector('#lblOffline');
const txtMessage = document.querySelector('#txtMessage');
const btnSend    = document.querySelector('#btnSend');


const socket = io();


socket.on('connect', ()=>{

    console.log("Connected")
    lblOffline.style.display = 'none';
    lblOnline.style.display  = '';
})

socket.on('disconnect', ()=>{

    console.log("Disconnect");
    lblOffline.style.display = '';
    lblOnline.style.display  = 'none';
})

socket.on('enviar-message', (payload)=>{

    console.log(payload);
})

btnSend.addEventListener( 'click', ()=>{
    const message = txtMessage.value;
    const payload = {
        message,
        id:'123ABC',
        date: new Date().getTime()
    }
    socket.emit( 'enviar-message', payload, (id)=>{
        console.log('From server', id)
    });
} )