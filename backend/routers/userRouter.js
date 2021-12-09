import express from 'express';
import User from '../models/userModel.js';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';

const userRouter = express.Router();

//insert user in data.js to mongo collection
userRouter.get(
	'/seed',
	expressAsyncHandler(async (req, res) => {
		//remove all user so there 's no err about duplicate data -- need to be deleted later
		await User.remove({});
		//insert from data.js
		const createdUsers = await User.insertMany(data.users);
		res.send({ createdUsers });
	})
);

userRouter.post(
	'/signin',
	expressAsyncHandler(async (req, res) => {
		const user = await User.findOne({ email: req.body.email });
		if (user) {
			if (bcrypt.compareSync(req.body.password, user.password)) {
				res.send({
					_id: user.id,
					name: user.name,
					email: user.email,
					isAdmin: user.isAdmin,
					token: generateToken(user)
				});
				return;
			}
		}
		res.status(401).send({ message: 'Invalid email or password' });
	})
);
export default userRouter;
