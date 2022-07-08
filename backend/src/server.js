const { usersRoutes } = require('./routes/usersRoutes');
const { clientsRoutes } = require('./routes/clientsRoutes');

usersRoutes.use(clientsRoutes);

usersRoutes.listen(3001, console.log("Rodando na porta 3001"));
