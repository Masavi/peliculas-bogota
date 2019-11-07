const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const Pelicula = require('../models/Pelicula');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send("Hola Mundo");
});

/*
    CRUD Películas
*/

// CREATE
app.post('/api/v1/peliculas', (req, res) => {
    const nuevaPelicula = new Pelicula(req.body);
    nuevaPelicula.save()
        .then(pelicula => res.status(201).send(pelicula))
        .catch(err => res.status(400).send({'mensaje': err}));
});

// READ ALL
app.get('/api/v1/peliculas', (req, res) => {
    Pelicula.find()
        .then(peliculas => res.send(peliculas))
        .catch(err => res.send({'mensaje': err}));
});

// READ ONE
app.get('/api/v1/peliculas/:id', (req, res) => {
    const { id } = req.params;
    Pelicula.findById(id)
        .then(pelicula => res.send(pelicula))
        .catch(err => res.send({'mensaje': err}));
});

// UPDATE
app.patch('/api/v1/peliculas/:id', (req, res) => {
    const { id } = req.params;
    Pelicula.findByIdAndUpdate(id, req.body, { new: true })
        .then(pelicula => res.send(pelicula))
        .catch(err => res.send({'mensaje': err}));
});

// DELETE
app.delete('/api/v1/peliculas/:id', (req, res) => {
    const { id } = req.params;
    Pelicula.findByIdAndDelete(id)
        .then(pelicula => res.status(204).send('Borrado'))
        .catch(err => res.send({'mensaje': err}));
});

app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));