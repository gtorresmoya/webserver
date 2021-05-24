require('dotenv').config();

const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', (err) => {

})
 
// Middleware -  Sirve a contenido estático
app.use( express.static('public') )

app.get('/', (req, res) =>  {
    res.render('home', {
        nombre: 'Gonzalo',
        titulo: 'Curso Node'
    })
})

app.get('/index', (req, res) =>  {
    res.render('home', {
        nombre: 'Gonzalo',
        titulo: 'Curso Node'
    })
})

app.get('/elements', (req, res) =>  {
    res.render('elements', {
        nombre: 'Gonzalo',
        titulo: 'Curso Node'
    })
})

app.get('/generic', (req, res) =>  {
    res.render('generic', {
        nombre: 'Gonzalo',
        titulo: 'Curso Node'
    })
})

app.get('*', (req, res) =>  {
    res.sendFile(__dirname + '/public/404.html')
})

app.listen(port , () => {
    console.log('Escuchando el puerto', port);
})