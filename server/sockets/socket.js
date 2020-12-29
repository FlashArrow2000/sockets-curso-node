const {io} = require('../server');

// aqui cuando el server abre conexion con el cliente 
io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        Mensaje: 'Bienvenido a esta app'
    })

    // Cuando el cliente se desconecta con intencion
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data)

        // if(mensaje.usuario){
        //     callback({
        //         resp: 'Todo salio bien'
        //     });  
        // }else{ 
        //     callback({
        //         resp: 'Todo salio mal :('
        //     });
        // }

    })

} )