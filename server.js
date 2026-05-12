const express = require('express');
const app = express();

app.get('/.well-known/assetlinks.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(__dirname + '/.well-known/assetlinks.json');
});

app.get('/checkout/return', (req, res) => {
  res.send('Return OK');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));