
# Nigma TTS API – Text-to-Speech Service

This project is a RESTful API built with Node.js that read Text-to-Speech (TTS) service. It includes Swagger documentation, is JWT-secured, and is ready to deploy on [Render](https://render.com).

## 🚀 Features

- `POST /api/tts/synthesize` to convert text to speech
- Parameters: voice, speed, pitch, format, SSML, etc.
- JWT authentication (with `/api/auth/login`)
- Swagger UI documentation at `/api-docs`
- Render deploy-ready (`render.yaml`)
- Modular and scalable structure

## 📦 Local Installation

```bash
git clone https://github.com/yourusername/tts-api.git
cd tts-api
npm install
npm start
```

Access Swagger docs at: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## 🔐 Authentication

Generate a token:
```bash
POST /api/auth/login
Body:
{
  "user": "admin"
}
```

Then use the token in the `Authorization` header:
```
Authorization: Bearer <your_token>
```

## 🔄 Main Endpoint

**POST** `/api/tts/synthesize`

```json
{
  "text": "Hello, welcome to the demo.",
  "voice": "es-LA-SofiaNeural",
  "speed": 1.0,
  "pitch": 1.0,
  "format": "mp3",
  "ssml": false,
  "highlight": true,
  "returnType": "url"
}
```

## ☁️ Deploy on Render

### Option 1: From GitHub

1. Push this project to your GitHub.
2. Go to [Render.com](https://render.com) > "New Web Service".
3. Connect your GitHub and select the `tts-api` repo.
4. Render will detect the `render.yaml` and auto-deploy.

### Option 2: With Docker

Change `render.yaml` to:
```yaml
runtime: docker
```

## 🗂️ Project Structure

```
tts-api/
├── app.js
├── controllers/
├── routes/
├── utils/
├── middleware/
├── swagger.yaml
├── swagger.js
├── render.yaml
├── Dockerfile
├── .env (JWT secret)
├── package.json
```

## 🧪 Testing

You can test via:
- Swagger UI: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
- Postman: `POST /api/tts/synthesize` with JSON body

---

🔧 This is a simulated TTS engine. For production use, consider integrating:
- [Coqui TTS](https://github.com/coqui-ai/TTS)
- [Google Cloud TTS](https://cloud.google.com/text-to-speech)
- [Amazon Polly](https://aws.amazon.com/polly/)

---

## 📄 License

MIT
