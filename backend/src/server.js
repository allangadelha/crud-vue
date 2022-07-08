const { usersRoutes } = require('./routes/usersRoutes');
const { clientsRoutes } = require('./routes/clientsRoutes');
const { authRoutes } = require('./routes/authRoutes');

usersRoutes.use(clientsRoutes);
usersRoutes.use(authRoutes);

usersRoutes.listen(3001, console.log("Rodando na porta 3001"));
