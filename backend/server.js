import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

const app = express();

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
