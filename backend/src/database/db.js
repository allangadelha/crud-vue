const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://allandev:12345seis@cluster0.zamjh.mongodb.net/?retryWrites=true&w=majority';
// const Client = require('../models/Client');

class DBController {
    constructor() {
        this.connect();
    }

    async connect() {
        try {
            await mongoose.connect(MONGO_URI, {
                useNewUrlParser: true
            });
            console.log("Conectado a base de dados.");
        } catch (err) {
            console.error(err);
        }
    }
}

exports.db = new DBController();