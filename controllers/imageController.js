const Jimp = require('jimp');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

exports.convertToBlackAndWhite = async (req, res) => {
    const imageUrl = req.body.imageUrl;
    try {
        const image = await Jimp.read(imageUrl);
        const imageName = `${uuidv4()}.jpg`;
        const imagePath = path.join('assets', 'images', imageName);
        await image
            .greyscale() // Convertir a escala de grises
            .resize(350, Jimp.AUTO) // Redimensionar
            .writeAsync(path.join(__dirname, '..', 'public', imagePath)); // Guardar la imagen

        res.redirect(`/imagen?name=${imageName}`); // Redirigir al usuario a la ruta /imagen con el nombre de la imagen como parámetro
    } catch (error) {
        console.error('Error procesando la imagen:', error);
        res.status(500).send('Error procesando la imagen.');
    }
};
