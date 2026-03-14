const express = require('express');
const router = express.Router();
router.get('/status', (req, res) => res.json({service: 'ESSOOI-VPN', status: 'healthy'}));
module.exports = router;
