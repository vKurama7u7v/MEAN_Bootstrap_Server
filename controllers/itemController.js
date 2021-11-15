const ModeloItem = require("../models/ModeloItem");

// Agregar Item
exports.crearItem = async (req, res) => {
    try {
        let registro;

        // Creamos item
        registro = new ModeloItem(req.body);

        // Guardamos
        await registro.save();
        res.send(registro);

    } catch (error) {
        console.log(error);
        res.status(500).send('Servidor: Error al Crear un nuevo ITEM');
    }
}

// Obtener Items
exports.obtenerItems = async (req, res) => {
    try {
        const items = await ModeloItem.find();
        res.json(items);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Actualizar Item
exports.actualizarItem = async (req, res) => {
    try {
        const { nombre, descripcion, fecha_creacion, fecha_edicion} = req.body;
        let item = await ModeloItem.findById(req.params.id);

        if(!item){
            res.status(404).json({ msg: 'No existe el producto' })
        }

        item.nombre = nombre;
        item.descripcion = descripcion;
        item.fecha_creacion = fecha_creacion;
        item.fecha_edicion = fecha_edicion;

        item = await ModeloItem.findOneAndUpdate({_id: req.params.id}, item, { new: true });
        res.json(item);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Obtener Item
exports.getItem = async (req, res) => {
    try {
        let item = await ModeloItem.findById(req.params.id);

        if(!item){
            res.status(404).json({ msg: 'No existe el producto' })
        }

        res.json(item);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// Eliminar producto
exports.eliminarItem = async (req, res) => {
    try {
        let item = await ModeloItem.findById(req.params.id);

        if(!item){
            res.status(404).json({ msg: 'No existe el producto' })
        }

        await ModeloItem.findOneAndRemove({ _id: req.params.id })

        res.json({ msg: 'Producto Eliminado con exito' });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}