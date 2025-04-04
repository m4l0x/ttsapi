
const { v4: uuidv4 } = require('uuid');

exports.synthesizeAudio = async (text, voice, speed, pitch, format, ssml, returnType) => {
  const fakeId = uuidv4();
  const baseUrl = "https://fake-audio-storage.com/audio/";

  return {
    audioUrl: `${baseUrl}${fakeId}.${format || 'mp3'}`,
    duration: 3.4,
    voice: voice || "es-LA-SofiaNeural",
    highlightMap: [
      { word: "Hola", start: 0.0, end: 0.5 },
      { word: "bienvenido", start: 0.5, end: 1.4 }
    ]
  };
};
