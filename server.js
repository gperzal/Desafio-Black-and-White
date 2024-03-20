const express = require('express');
const app = express();
const PORT = 3000;
const setupStaticFiles = require('./middlewares/staticFiles');


setupStaticFiles(app);

// Configurar rutas
const routes = require('./routes/index');
app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
