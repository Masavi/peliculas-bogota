const mongoose = require('mongoose');
const atlas_uri = 'mongodb+srv://mauricio:abc123def@testing-cluster-efwi5.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(
    atlas_uri, 
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('🐢 Atlas conectado exitosamente 🐢'))
    .catch(err => console.log(err, 'Error al conectar con Mongo Atlas 🚫'));