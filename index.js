const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const port =3030;

app.use ( express.static('public'));
app.set("views",path.join(__dirname+ "/public/views"));
app.set("view engine","hbs");
hbs.registerPartials(__dirname+ '/public/views/partials');



app.get('/disponibilidad', (req, res) => {
    res.render('disponibilidad');
  });

app.listen(port,()=>{
    console.log(`Escuchando el puerto ${port}`)
})