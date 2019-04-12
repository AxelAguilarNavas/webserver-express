const express = require('express')
const app = express();
const hbs = require('hbs');

//Helpers
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

//Express HBS (Handlebars) engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

//Configuración puerto Heroku
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'axl aguilar',
        anio: new Date().getFullYear()
    });

    //    res.send('Hola mundo');
    //    let salida = {
    //        nombre: 'Axl Aguilar',
    //        edad: 29,
    //        url: req.url
    //    }
    //    res.send(salida);
})

app.get('/about', (req, res) => {
    res.render('about');
})

//app.get('/data', (req, res) => {
//    res.send('Hola Data');
//})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})