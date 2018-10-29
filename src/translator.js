const Translate = require('@google-cloud/translate');

// Configuramos el módulo con los credenciales de acceso a la API de Google Cloud Translate
const translate = new Translate({
    keyFilename: './src/translator.conf.json'
});

// Función traducirTexto(texto, idioma [, next])
exports.traducirTexto = (texto, idioma, next = (resultado, err = null) => resultado) => {
    translate
        .translate(texto, idioma)
        .then(resultado => next(resultado[0]))
        .catch(err => next(null, err));
};