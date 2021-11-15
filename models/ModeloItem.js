const mongoose = require('mongoose');
const ItemSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    fecha_creacion: {
        type: Date,
        default: Date.now(),
    }
})

module.exports = mongoose.model('MisGustos', ItemSchema);