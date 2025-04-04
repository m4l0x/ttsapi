
const express = require('express');
const app = express();
const ttsRoutes = require('./routes/tts');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');

app.use(express.json());
app.use('/api/tts', ttsRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`TTS API corriendo en http://localhost:${PORT}/api-docs`));
