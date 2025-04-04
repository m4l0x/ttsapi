
const { synthesizeAudio } = require('../utils/synthesize');

exports.synthesizeText = async (req, res) => {
  const { text, voice, speed, pitch, format, ssml, highlight, returnType } = req.body;

  if (!text) return res.status(400).json({ error: "Falta el texto." });

  try {
    const audioResult = await synthesizeAudio(text, voice, speed, pitch, format, ssml, returnType);
    res.status(200).json(audioResult);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
