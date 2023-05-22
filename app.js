const mongoose = require('mongoose');

// URL de conexión a tu base de datos MongoDB
const url = 'mongodb://127.0.0.1:27017/pokeAPI';

// Conectarse a la base de datos

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  
// Conectarse a la base de datos
mongoose.connect(url, options)
    .then(() => {
      console.log('Conexión exitosa a MongoDB');
      // A partir de aquí, puedes realizar consultas o realizar operaciones en tu base de datos
    })
    .catch((error) => {
      console.error('Error al conectarse a MongoDB:', error);
    });