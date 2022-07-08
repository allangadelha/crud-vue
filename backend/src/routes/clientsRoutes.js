const express = require('express');
const bodyParser = require('body-parser');

const { db } = require('../database/db');
const { clientController } = require('../controllers/clientController');
const clientsRoutes = express();

clientsRoutes.use(bodyParser.json());

clientsRoutes.get('/api/clients', (req, res) => {
    clientController.getAllClient(res);
});

clientsRoutes.get('/api/clients/:id', (req, res) => {
    let { id } = req.params;
    clientController.getClient(res, id);
});

clientsRoutes.post('/api/clients', (req, res) => {
    let data = req.body;
    clientController.addClient(res, data);
});

clientsRoutes.put('/api/clients/:id', (req, res) => {
    let { id } = req.params;
    let data = req.body;
    clientController.updateClient(res, id, data);
});

clientsRoutes.delete('/api/clients/:id', (req, res) => {
    let { id } = req.params;
    clientController.deleteClient(res, id);
});

exports.clientsRoutes = clientsRoutes;

