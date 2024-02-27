/* eslint-disable no-undef */
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3001

app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/shorten', async (req, res) => {
  const { url } = req.query;

  try {
    const response = await axios.get(`https://ulvis.net/api.php?url=${url}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});