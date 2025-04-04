
const express = require('express');
const router = express.Router();
const { synthesizeText } = require('../controllers/ttsController');

router.post('/synthesize', synthesizeText);

module.exports = router;
