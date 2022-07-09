const { usersRoutes } = require('./routes/usersRoutes');
const { clientsRoutes } = require('./routes/clientsRoutes');
const { authRoutes } = require('./routes/authRoutes');

authRoutes.use(usersRoutes);
authRoutes.use(clientsRoutes);

authRoutes.listen(3001, console.log("Rodando na porta 3001"));
