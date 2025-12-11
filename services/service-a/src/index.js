const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 8080;
const SERVICE_B_URL = process.env.SERVICE_B_URL || 'http://service-b:8080/hello';

app.get('/', (req, res) => {
  res.json({ service: 'A', status: 'ok' });
});

app.get('/call-b', async (req, res) => {
  try {
    const response = await axios.get(SERVICE_B_URL, { timeout: 1500 });
    res.json({ from: 'A', b_response: response.data });
  } catch (err) {
    res.status(502).json({ error: 'Failed calling B', details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Service A listening on port ${PORT}`);
});
