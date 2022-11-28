require('dotenv').config();
const app = require('./app'); // traigo el app que ejecuta el express
require('./database')

//main que inicia el programa
async function main(){
    await app.listen(app.get('port')); // donde estara escuchando el servidor
    console.log("inicio el servidor por el puerto: ", app.get('port'));
};

main();