const express = require('express');
const bodyParser = require('body-parser');

const {db} = require('../database/db');
const {clientController} = require('../controllers/clientController');
const app = express();

app.use(bodyParser.json());

app.post('/api/clients', (req, res) => {
    let data = req.body;
    clientController.addClient(res, data);
});

exports.app = app;

