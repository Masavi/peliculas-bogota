const mongoose = require('mongoose');

const PeliculaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    actores: [{
        type: String
    }],
    genero: {
        type: String,
        enum: ['drama', 'comedia', 'accion']
    },
    activo: {
        type: Boolean,
        default: true
    }
});

const Pelicula = mongoose.model('Pelicula', PeliculaSchema);
module.exports = Pelicula;