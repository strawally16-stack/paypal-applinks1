const express = require('express');
const app = express();

app.get('/.well-known/assetlinks.json', (req, res) => {
  res.json([{
    "relation": ["delegate_permission/common.handle_all_urls"],
    "target": {
      "namespace": "android_app",
      "package_name": "com.example.paypalappswitch",
      "sha256_cert_fingerprints": [
        "35:5D:D1:42:9F:28:71:50:81:42:92:61:99:4A:5F:D3:29:E0:A1:98:EE:AA:F7:15:47:58:F4:06:25:46:88:7E"
      ]
    }
  }]);
});

app.get('/checkout/return', (req, res) => {
  const token = req.query.token;
  const payerId = req.query.PayerID;
  res.send(`Return OK - token: ${token} payerId: ${payerId}`);
});

app.get('/', (req, res) => {
  res.send('PayPal App Links server running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));