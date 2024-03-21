const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

// Ruta raíz que sirve el formulario HTML
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: './public/assets' });
});

// Ruta para procesar la imagen
router.post('/convertir', imageController.convertToBlackAndWhite);

router.get('/imagen', (req, res) => {
    const imageName = req.query.name; // Obtener el nombre de la imagen de la query string
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Imagen Convertida</title>
            <link rel="stylesheet" href="/assets/css/styles.css">
        </head>
        <body>
            <h1>Imagen Convertida a Blanco y Negro</h1>
            <img src="/assets/images/${imageName}" alt="Imagen Convertida">
            <br>
            <a href="/">Convertir otra imagen</a>
        </body>
        </html>
    `);
});

module.exports = router;
