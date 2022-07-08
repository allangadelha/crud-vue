const express = require('express');
const bodyParser = require('body-parser');

const db = require('../database/db');

const app = express();

app.use(bodyParser.json());

app.post('/api/clients', (req, res) => {
    let data = req.body;
});

exports.app = app;

