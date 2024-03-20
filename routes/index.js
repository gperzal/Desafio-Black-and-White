const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

// Ruta raíz que sirve el formulario HTML
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: './public/assets' });
});

// Ruta para procesar la imagen
router.post('/convertir', imageController.convertToBlackAndWhite);

module.exports = router;
