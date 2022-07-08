const express = require('express');
const bodyParser = require('body-parser');

const { db } = require('../database/db');
const { clientController } = require('../controllers/clientController');
const app = express();

app.use(bodyParser.json());

app.get('/api/clients', (req, res) => {
    clientController.getAllClient(res);
});

app.get('/api/clients/:id', (req, res) => {
    let { id } = req.params;
    clientController.getClient(res, id);
});

app.post('/api/clients', (req, res) => {
    let data = req.body;
    clientController.addClient(res, data);
});

app.put('/api/clients/:id', (req, res) => {
    let { id } = req.params;
    let data = req.body;
    clientController.updateClient(res, id, data);
});

app.delete('/api/clients/:id', (req, res) => {
    let { id } = req.params;
    clientController.deleteClient(res, id);
});

exports.app = app;

