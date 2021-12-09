import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

//parsing json data in body req
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//connect to mongoose
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/mangastuff', {});

app.get('/', (req, res) => {
	res.send('Server is ready');
});

app.use('/api/users', userRouter);

app.use('/api/products', productRouter);

//err catcher
app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(5000, () => {
	console.log(`running at ${port}`);
});
