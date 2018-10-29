'use strict';

const translate = require('./translator');

var texto = "Quiero trabajar con los mejores",
    idioma = 'en';

translate.traducirTexto(texto, idioma, (err, resultado) => {
    if (err) {
        console.log(err);
    }
    console.log(resultado);
});