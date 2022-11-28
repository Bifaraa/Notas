const express = require('express'); // importa el modulo express
const app = express(); // inicia el servidor
const cors = require('cors');

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/users', require('./routes/user') );
app.use('/api/notes', require('./routes/note'));

module.exports = app; // exporto para que se inicie desde otro lado 