import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';

const productRouter = express.Router();

productRouter.get(
	'/',
	expressAsyncHandler(async (req, res) => {
		const products = await Product.find({});
		res.send(products);
	})
);

productRouter.get(
	'/seed',
	expressAsyncHandler(async (req, res) => {
		await Product.remove({});
		const createdProducts = await Product.insertMany(data.products);
		res.send({ createdProducts });
	})
);

productRouter.get(
	'/:id',
	expressAsyncHandler(async (req, res) => {
		const products = await Product.findById(req.params.id);
		console.log(req.params.id);
		if (products) {
			res.send(products);
		} else {
			res.status(404).send({ message: 'products not found' });
		}
	})
);

export default productRouter;
