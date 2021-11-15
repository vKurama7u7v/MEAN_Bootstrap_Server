// importando mongoose
const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

// funcion para crear conexión
// async = asincrono(tardar en cargar)
const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false
        })

        console.log("MongoDB Conectado :D");

    } catch (error) {
        console.log(error);
        process.exit(1);        // detenemos app
    }
}

module.exports = conectarDB;