const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/userModel');
const Token = require('./authHelpers.js');

router.post('/', (req, res) => {
	let { email, password } = req.body;

	Users.findBy({ email })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = Token.getJwt(user.email);

				res.status(200).json({
					usersid: user.usersid,
					email: user.email,
					token
				});
			} else {
				res.status(401).json({ message: 'Invalid credentials' });
			}
		})
		.catch(error => {
			res.status(500).json(error);
		});
});

module.exports = router;
