const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

const mongoString = process.env.MONGO_DB_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ 'message': err.message });
    return;
});

app.get('/', (req, res) => {
    res.json({ 'message': 'ok' });
});

/* Routes */
const buildRouter = require('./src/routes/build.route');

app.use('/api/v1/build', buildRouter);
/** */


const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Example app listening on port: ${port}`)
});