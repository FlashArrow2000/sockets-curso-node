var socket = io();

        // connect cuando el cliente se conecta al server
        socket.on('connect', function () {
            console.log('Conectado al servidor')
        })

        // .on escucha informacion. El disconnect es cuando se la conexion con el server de manera intencional.
        socket.on('disconnect',  function () {
            console.log('Perdimos conexion con servidor')
        })
        
        // .emit envia informacion. En su primer arg, enviamos el nombre de lo que queremos enviar. En el segundo arg, enviamos un objeto con toda la info
        socket.emit('enviarMensaje', {
            usuario: 'Daniel',
            mensaje: 'Hola server'
        }, function (res) {
       
            console.log('Respuesta del server: ', res);
            
    })

        // Escucha el mensaje del server
        socket.on('enviarMensaje', function (mensaje) {
            console.log('Servidor: ', mensaje)
        })

