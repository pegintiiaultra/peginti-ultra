const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pegintiProcessor = (message) => ({
  status: "success",
  reply: `Réponse doctrinale → ${message}`
});

app.post('/chat', (req, res) => {
  const { message } = req.body || {};
  if (!message) return res.json({ status: "error", reply: "Message manquant" });
  res.json(pegintiProcessor(message));
});

app.get('/premium', (req, res) => {
  res.json({
    banner: "📌 Vitrine premium TomTech.inc",
    option: "❌ Fermer",
    link: "https://peginti.premium"
  });
});

app.listen(port, () => {
  console.log(`✅ PEGINTI ULTRA v2.2 prêt sur http://localhost:${port}`);
});
