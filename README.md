
# TTS API estilo ReadSpeaker

Este proyecto es una API RESTful en Node.js que convierte texto en voz, simulando un servicio tipo ReadSpeaker. Incluye documentación Swagger y está lista para desplegar en [Render](https://render.com).

## 🚀 Características

- Endpoint `POST /api/tts/synthesize` para generar voz desde texto
- Soporte de parámetros como voz, velocidad, tono, formato y SSML
- Swagger UI para pruebas en `/api-docs`
- Preparado para deploy automático en Render
- Estructura modular y escalable

## 📦 Instalación local

```bash
git clone https://github.com/tuusuario/tts-api.git
cd tts-api
npm install
npm start
```

Accede a la documentación Swagger en: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## 🔄 Endpoint principal

**POST** `/api/tts/synthesize`

```json
{
  "text": "Hola, bienvenido a la demo.",
  "voice": "es-LA-SofiaNeural",
  "speed": 1.0,
  "pitch": 1.0,
  "format": "mp3",
  "ssml": false,
  "highlight": true,
  "returnType": "url"
}
```

## ☁️ Deploy en Render

### Opción 1: Desde GitHub (recomendado)

1. Sube este proyecto a tu cuenta de GitHub.
2. Entra a [Render](https://render.com) > "New Web Service".
3. Conecta tu cuenta de GitHub.
4. Selecciona el repo y Render detectará `render.yaml`.
5. El servicio se desplegará automáticamente.

### Opción 2: Usando Docker (modifica render.yaml)

```yaml
runtime: docker
```

## 🗂️ Estructura del proyecto

```
tts-api/
├── app.js
├── controllers/
├── routes/
├── utils/
├── swagger.yaml
├── swagger.js
├── render.yaml
├── Dockerfile
├── package.json
```

## 🧪 Testing

Puedes probar usando:

- Swagger: `http://localhost:3000/api-docs`
- Postman: `POST /api/tts/synthesize` con JSON en body

---

🔧 Este proyecto simula el funcionamiento de un motor TTS. Para producción puedes integrar motores como:
- [Coqui TTS](https://github.com/coqui-ai/TTS)
- [Google Cloud TTS](https://cloud.google.com/text-to-speech)
- [Amazon Polly](https://aws.amazon.com/polly/)

---

## 📄 Licencia

MIT
