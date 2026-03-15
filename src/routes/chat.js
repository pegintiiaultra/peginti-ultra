const express = require('express');
const router = express.Router();

// Chat Bo'oivini souverain (FIX req.body.message)
router.post('/souverain', (req, res) => {
  const message = req.body?.message || 'Message par défaut';
  
  if (!req.body || !req.body.message) {
    return res.status(400).json({error: 'Message requis'});
  }

  // Réponse Bo'oivini métaphorique
  res.json({
    reponse: `🧠 BO'OIVINI analyse: "${message}"`,
    meta: {
      coton: "purete",
      baobab: "force", 
      eaudesource: "clarte"
    }
  });
});

module.exports = router;
