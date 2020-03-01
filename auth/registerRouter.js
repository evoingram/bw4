const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/userModel.js');
const Token = require('./authHelpers.js');
const { validateUser } = require('../users/userHelpers.js');

router.post('/', (req, res) => {
	let user = req.body;

	const validateResult = validateUser(user);

	if (validateResult.isSuccessful === true) {
		const hash = bcrypt.hashSync(user.password, 10);
		user.password = hash;

		const token = Token.getJwt(user.email);

		Users.add(user)
			.then(saved => {
				res.status(201).json({ usersid: saved.usersid, email: saved.email, name: saved.name, token: token });
			})
			.catch(error => {
				res.status(500).json(error);
			});
	} else {
		res.status(400).json({
			message: 'Invalid user info, see errors',
			errors: validateResult.errors
		});
	}
});

module.exports = router;
