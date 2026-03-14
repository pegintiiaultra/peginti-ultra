'use strict';

const jwt = require('jsonwebtoken');

const SECRET = process.env.ESSOOI_SECRET || 'peginti-ultra-2026-v1';

module.exports = {
  generateToken(userId, role = 'user') {
    return jwt.sign({ userId, role }, SECRET, { expiresIn: '24h' });
  },

  verifyToken(req, res, next) {
    const token = req.headers.authorization?.replace('Bearer ', '') || '';
    if (!token) return res.status(401).json({ error: 'Token requis' });
    
    try {
      req.user = jwt.verify(token, SECRET);
      next();
    } catch (err) {
      res.status(401).json({ error: 'Token invalide' });
    }
  }
};
