import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';

const productRouter = express.Router();

productRouter.get(
	'/seed',
	expressAsyncHandler(async (req, res) => {
		const createdProducts = await Product.insertMany(data.products);
		res.send(createdProducts);
	})
);

export default productRouter;
