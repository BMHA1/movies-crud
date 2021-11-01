const { Router } = require('express');
const express = require ('express');
const mongoose = require ('mongoose');
const app = express();
const jwt = require('jsonwebtoken');
const routingMovie = require('./components/movie/router.js')
const routingUser = require('./components/user/router.js')

mongoose.connect('mongodb://localhost:27017/movies',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

    .then(() => console.log('Conectado a la base de datos.'))
    .catch(e => console.log('ERROR: No conectado a la base de datos.', e))

app.use(express.json())

app.use('/api/movie/', routingMovie)
app.use('/api/user/', routingUser)

app.listen(3000, () => console.log('Servidor levantado en 3000.'))


const token = jwt.sign({foo: 'bar'}, 'aswdfghjuko+854lokijhgfds');
console.log(token)