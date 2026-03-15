const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({limit: '10mb'}));

// 🧠 BO'OIVINI Status (TOMTECH.INC)
app.get('/api/bo-oivini/status', (req, res) => {
  res.json({ 
    service: "BO'OIVINI", 
    status: "souveraine", 
    meta: { coton: "purete", baobab: "force", eaudesource: "clarte", version: "v2.0" }
  });
});

// Route racine
app.get('/', (req, res) => {
  res.json({service: "PEGINTI ULTRA", status: "souveraine"});
});

// Routes PEGINTI
app.use('/api/chat', require('./src/routes/chat'));
app.use('/api/vpn', require('./src/routes/vpn'));
app.use('/api/auth', require('./src/routes/auth'));

app.listen(3001, '0.0.0.0', () => {
  console.log('🧠 PEGINTI ULTRA localhost:3001');
});
