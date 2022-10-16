const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.json({ 'message': 'ok' });
});

const port = 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening at http://localhost:${port}`)
});