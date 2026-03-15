const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  res.json({ token: "peginti-souverain-v2.0", user: "tomtech.inc" });
});

module.exports = router;
