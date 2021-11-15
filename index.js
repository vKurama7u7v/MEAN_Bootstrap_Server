console.log("Desde Index.js");

// Importaciones
const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Creamos Servidor
const app = express();
const port = 8000;

// Conectamos a la BD
conectarDB();
app.use(cors());

// Middleware para enviar Json a APP
app.use(express.json());

// Ruta pata item
app.use('/api/items', require('./routes/item'));

app.listen(port, () => {
    console.log("El servidor esta corriendo perfectamente en el puerto: ", port);
})