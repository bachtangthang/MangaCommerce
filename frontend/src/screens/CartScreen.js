import React from 'react';
import { useLocation, useParams } from 'react-router';

const CartScreen = (props) => {
	const { id } = useParams();
	const productId = id;
	const location = useLocation();
	const qty = location.search ? location.search.split('=')[1] : 1;
	return (
		<div>
			<h1>Cart Screen</h1>
			<p>
				ADD TO CART: ProductID: {productId} Qty: {qty}
			</p>
		</div>
	);
};

export default CartScreen;
