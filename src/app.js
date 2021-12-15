const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const { extname } = require('path');


const app = express();

//Configuraciones

app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
   
    extname: '.hbs'
   
}));
app.set('view engine', '.hbs');

//Funciones intermedias

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//Enrutamientos
app.use(require('./routes/index'));



//Para los archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;