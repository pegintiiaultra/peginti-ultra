const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const app = express();

// MIDDLEWARES PRODUCTION
app.use(cors());
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// RATE LIMITING PRODUCTION
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requêtes par utilisateur
  message: { error: 'Trop de requêtes, réessayez dans 15 minutes.' }
});
app.use('/chat', limiter);

// PEGINTI CORE PROCESSOR (IA prête)
const pegintiProcessor = (message) => {
  const lowerMsg = message.toLowerCase();

  // Logique IA PEGINTI
  if (lowerMsg.includes('premium') || lowerMsg.includes('exclusive')) {
    return { response: '✨ Accès premium détecté — redirection vers Bo’oivini.' };
  }
  return { response: `PEGINTI IA ULTRA-SOA a reçu: ${message}` };
};

// ROUTE PRINCIPALE
app.post('/chat', (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: 'Message requis.' });
  }
  const result = pegintiProcessor(message);
  res.json(result);
});

// PORT DYNAMIQUE (évite EADDRINUSE)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ PEGINTI ULTRA v2.3 → http://localhost:${PORT}`);
});
