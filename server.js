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
  max: 100, // 100 req/user
  message: { error: 'Trop de requêtes, réessayez dans 15min' }
});
app.use('/chat', limiter);

// PEGINTI CORE PROCESSOR (IA prête)
const pegintiProcessor = (message) => {
  const lowerMsg = message.toLowerCase();
  
  // Logique IA PEGINTI
  if (lowerMsg.includes('premium') || lowerMsg.includes('entreprise') || lowerMsg.includes('solution')) {
    return {
      status: 'premium',
      reply: `💎 PEGINTI Premium détecté → ${message}`,
      boovini: 'https://boovini.chat',
      upgrade: true
    };
  }
  
  return {
    status: 'success',
    reply: `✅ Réponse doctrinale PEGINTI → ${message}`,
    processed: true
  };
};

// ENDPOINTS PEGINTI ULTRA
app.get('/', (req, res) => {
  res.json({
    status: 'PEGINTI ULTRA v2.3 PRODUCTION LIVE',
    version: '2.3',
    endpoints: ['POST /chat', 'GET /premium', '/'],
    tomtech: 'https://tomtech.inc',
    uptime: process.uptime()
  });
});

app.get('/premium', (req, res) => {
  res.json({
    banner: '📌 PEGINTI ULTRA Premium - TomTech.inc',
    features: ['Solutions entreprise', 'Support 24/7', 'API dédiée'],
    link: 'https://peginti.premium',
    action: '🚀 Upgrade maintenant'
  });
});

app.post('/chat', (req, res) => {
  try {
    const { message } = req.body || {};
    if (!message || message.trim().length < 2) {
      return res.status(400).json({ 
        status: 'error', 
        reply: 'Message trop court (min 2 caractères)' 
      });
    }
    
    const result = pegintiProcessor(message);
    res.json({
      ...result,
      timestamp: new Date().toISOString(),
      session: req.ip
    });
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      reply: 'PEGINTI temporairement indisponible' 
    });
  }
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Endpoint non trouvé',
    docs: 'POST /chat | GET /premium | GET /'
  });
});

// GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  console.error('PEGINTI ERROR:', err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Erreur serveur interne',
    path: req.path,
    timestamp: new Date().toISOString()
  });
});

// START PRODUCTION
const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`✅ PEGINTI ULTRA v2.3 → http://localhost:${port}`);
  console.log(`📊 PM2: https://app.pm2.io/#/r/odaw18i1a5cq2n6`);
});
