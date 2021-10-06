const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://Seba:taller2@db-dcastro.lcmac.mongodb.net/datos');


mongoose.connection.once('open',function(){
    console.log('Se ha establecido la conexion');
}).on('error',function(error){
    console.log('Error de conexion:', error);
});