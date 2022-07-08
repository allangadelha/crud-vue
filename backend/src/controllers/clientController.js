const Client = require('../models/Client');

class ClientController {
    getAllClient(res) {
        Client.find({
        }, (err, clients) => {
            if (err) throw err;
            if(!clients || clients === null) {
                return res.status(404).json({
                    status: 404,
                    message: "Nenhum cliente encontrado."
                });    
            }
            return res.json({
                status: 200,
                message: "Clientes encontrados com sucesso.",
                total: clients.length,
                clients
            });
        });
    };

    getClient(res, id) {
        Client.findOne({
            _id: id
        }, (err, client) => {
            if (err) throw err;
            if(!client || client === null) {
                res.status(404).json({
                    status: 404,
                    message: "Cliente não encontrado."
                });
                return false;
            }
            return res.json({
                status: 200,
                message: "Cliente encontrado com sucesso.",
                client
            });
        });
    };

    addClient(res, data) {
        Client.create(data, (err, newClient) => {
            if (err) throw err;
            if(!newClient || newClient === null) {
                return res.staus(404).json({
                    status: 404,
                    message: "Não foi possível cadastrar cliente."
                });    
            }
            return res.json({
                status: 200,
                message: "Cliente cadastrado com sucesso.",
                client: newClient
            });
        });
    };

    updateClient(res, id, data) {
        Client.updateOne({
            _id: id
        }, data, (err, updateClient) => {
            if (err) throw err;
            if(!updateClient || updateClient === null) {
                return res.status(404).json({
                    status: 404,
                    message: "Não foi possível atualizar cliente."
                });    
            }
            return res.json({
                status: 200,
                message: "Cliente atualizado com sucesso.",
                client: updateClient
            });
        });
    };

    deleteClient(res, id) {
        Client.deleteOne({
            _id: id
        }, (err) => {
            if (err) throw err;
            return res.json({
                status: 200,
                message: "Cliente deletado com sucesso."
            });
        });
    };
};

exports.clientController = new ClientController();