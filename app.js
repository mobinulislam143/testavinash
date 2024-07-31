const express = require('express');
const app = new express();
const bodyParser = require('body-parser');
let rootRouter = require('./routes/index.js');

// Security middleware
const helmet = require('helmet');
const hpp = require('hpp');
const xss = require('xss-clean');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');

// Security middleware implementation
app.use(cors());
app.use(helmet());
app.use(xss());
app.use(hpp());
app.use(mongoSanitize());

app.use(bodyParser.json());
app.use('/api/v1', rootRouter);

app.get("/", function (req, res) {
    res.send("Route is working! YaY!");
});

app.all("*", function (req, res) {
    res.status(404).json({ status: 'failed', message: 'API not found' });
});

module.exports = app;
