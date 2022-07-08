const Client = require('../models/Client');

class ClientController {
    addClient(res, data) {
        Client.create(data, (err, newClient) => {
            if (err) throw err;
            return res.json({
                status: 200,
                message: "Cliente cadastrado com sucesso.",
                client: newClient
            })
        });
    }
};

exports.clientController = new ClientController();