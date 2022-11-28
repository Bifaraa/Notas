const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI ? 
    process.env.MONGODB_URI : 'mongodb://localhost/db_notas_mintic';

mongoose.connect(URI, {
    useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('base de datos ejecutada');
});
