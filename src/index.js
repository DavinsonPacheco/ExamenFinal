const app = require('./app');

app.listen(app.get('port'));
console.log('Escuchando por el puerto', app.get('port'));