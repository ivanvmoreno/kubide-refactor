'use strict';

// Importamos la función traducirTexto(texto, idioma [, next])
const translate = require('./translator');

// Definimos el texto original y el idioma al que queremos traducirlo
var texto = "Quiero trabajar con los mejores",
    idioma = 'en';

// Ejecutamos la función y pasamos una callback con error handling
translate.traducirTexto(texto, idioma, (err, resultado) => {
    if (err) {
        console.log(err);
    }
    console.log(resultado);
});