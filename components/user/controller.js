const User = require('./model');

module.exports.getUser = async (req, res) => {
    const data = await User.find({_id: req.param.id});
}

module.exports.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(movie);
}