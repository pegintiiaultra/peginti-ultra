const express = require('express');
const router = express.Router();

router.post('/souverain', (req, res) => {
  res.json({
    status: '🧠 BO\'OIVINI SOUVERAIN ACTIVÉ',
    message: req.body.message || 'Filtre ultra-rapide OK',
    score: 0.95,
    timestamp: new Date().toISOString()
  });
});

router.get('/', (req, res) => res.json({ service: 'PEGINTI-CHAT IA' }));
module.exports = router;
