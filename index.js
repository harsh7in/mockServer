const express = require('express');

const app = express();
const port = 8000;

app.get('/data', (req, res) => {
    const data = { "status": true, "timestamp": 1729063176849, "data": [{ "id": "NnQ50H2tEo+KW9D2fn", "name": "Kapil Kumar", "imId": "1fp9zc9zr1g", "gender": "UNKNOWN", "score": 0.9, "access": "PUBLIC", "enhanced": true, "phones": [{ "e164Format": "+917037549888", "numberType": "MOBILE", "nationalFormat": "070375 498888", "dialingCode": 91, "countryCode": "IN", "carrier": "Airtel", "type": "openPhone" }], "addresses": [{ "address": "IN", "city": "Uttar Pradesh West", "countryCode": "IN", "timeZone": "+05:30", "type": "address" }], "internetAddresses": [], "badges": ["user"], "tags": [], "sources": [], "searchWarnings": [], "commentsStats": { "showComments": false }, "manualCallerIdPrompt": false }] };
    res.json(data);

});

app.listen(port, () => console.log('listening on port', port));