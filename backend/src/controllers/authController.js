const { hash, compare } = require('bcryptjs');
const User = require('../models/User');

class AuthController {

    async auth(res, data) {
        const { email, password } = data;
        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            res.status(401).json({
                status: 401,
                message: "Usuário não encontrado."
            });
            return false;
        }

        const passwordValid = await compare(password, user.password);
        console.log("PASS: ", passwordValid);

        if (!passwordValid) {
            res.status(401).json({
                status:401,
                error: "Usuário não encontrado"
            });
            return false;
        }

        User.findOne({
            email: email
        }, (err, user) => {
            if (err) throw err;
            if (!user || user === null) {
                res.status(404).json({
                    status: 404,
                    message: "Usuário não encontrado."
                });
                return false;
            }
            
            return res.json({
                status: 200,
                message: "Usuário encontrado com sucesso.",
                user
            });
        });
    };

    async register(res, data) {
        const { name, email, password } = data;
        const findUser = await User.findOne({ email });
        if (findUser) {
            res.status(404).json({
                status: 404,
                message: "Usuário já cadastrado."
            });
            return false;
        }
        const hash_password = await hash(password, 10);
        data.password = hash_password;

        User.create(data, (err, newUser) => {
            if (err) throw err;
            if (!newUser || newUser === null) {
                return res.staus(404).json({
                    status: 404,
                    message: "Não foi possível cadastrar usuário."
                });
            }
            return res.json({
                status: 200,
                message: "Usuário cadastrado com sucesso.",
                user: newUser
            });
        });
    };
};

exports.authController = new AuthController();