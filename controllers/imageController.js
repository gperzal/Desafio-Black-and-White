const Jimp = require('jimp');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

exports.convertToBlackAndWhite = async (req, res) => {
    const imageUrl = req.body.imageUrl;
    try {
        const image = await Jimp.read(imageUrl);
        image
            .greyscale() // Convertir a escala de grises
            .resize(350, Jimp.AUTO) // Redimensionar
            .write(path.join(__dirname, '..', 'public', 'assets', 'images', `${uuidv4()}.jpg`), () => {
                res.send('<h2>Imagen procesada y guardada.</h2>');
            });
    } catch (error) {
        console.error('Error procesando la imagen:', error);
        res.status(500).send('Error procesando la imagen.');
    }
};
