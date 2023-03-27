const express = require('express');
const mongoose = require('mongoose')
const app = express()

// conexion à mongoDB
mongoose.connect('mongodb+srv://nathan_WCS:argonautesDB@argonautesnames.0sku53s.mongodb.net/?retryWrites=true&w=majority', 
    {  useNewUrlParser : true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json())

// gere les problemes de CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// gestion des routes :

const Name = require('./modeles/name')
app.post('/api/names', (req, res, next) => {
    const nameInput = JSON.parse(req.body.newNameInput)
    const newName = new Name({
        ...nameInput
    })
    newName.save()
        .then(() => res.status(201).json({message : "nom ajouté !"}))
        .catch(error => res.status(400).json({error}))
})

// OK, reste à envoyé les données au front
app.get('/api/names', (req, res, next) => {
    Name.find()
        .then((names) => res.status(200).json({names}))
        .catch(error => res.status(400).json({error}))
})

module.exports = app;