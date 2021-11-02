const User = require('./model');

// Método para crear un usuario.

module.exports.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
}

// Método para buscar un usuario por ID.

module.exports.getUserById = async (req, res) => {
    const user = await User.find({_id: req.param.id});
    res.json(user);
}

// LOGIN: Buscar el usuario por ID, comparar TOKEN y devolver si es incorrecto.
// const login = (req, res) => {const data = await User.find({})}
