'use strict';
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json({limit: '10mb'}));

// VPN
let esssooi;
try {
  esssooi = require('./src/modules/esssooi-vpn');
  console.log('✅ ESSOOI VPN chargé');
} catch(e) {
  console.log('⚠️ VPN dégradé');
  esssooi = {core: {getStatus: () => ({healthy: false})}};
}

// Routes principales
app.get('/', (req, res) => res.json({service: 'PEGINTI ULTRA', status: 'souveraine'}));
app.get('/health', (req, res) => res.json({service: 'PEGINTI ULTRA', status: 'healthy'}));

// ✅ ROUTES MODULAIRES (protégées)
try {
  app.use('/api/chat', require('./src/routes/chat'));
  app.use('/api/vpn', require('./src/routes/vpn'));
  app.use('/api/auth', require('./src/routes/auth'));
  console.log('✅ Routes modulaires chargées');
} catch(e) {
  console.error('❌ Erreur routes:', e.message);
}

const PORT = 3001;
app.listen(PORT, '0.0.0.0', (err) => {
  if(err) console.error('❌ Port:', err);
  else console.log(`🧠 PEGINTI ULTRA → http://localhost:${PORT}`);
});
