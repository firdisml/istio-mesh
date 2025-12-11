const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.json({ service: 'B', status: 'ok' });
});

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Service B!' });
});

app.listen(PORT, () => {
  console.log(`Service B listening on port ${PORT}`);
});
