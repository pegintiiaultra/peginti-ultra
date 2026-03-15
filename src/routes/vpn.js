const express = require('express');
const router = express.Router();

router.get('/status', (req, res) => {
  res.json({ service: "ESSOOI-VPN", status: "prêt", servers: 42 });
});

module.exports = router;
