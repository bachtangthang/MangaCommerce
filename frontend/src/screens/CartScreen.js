import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router';
import { addToCart } from '../actions/cartActions';

const CartScreen = (props) => {
	const { id } = useParams();
	const productId = id;
	const location = useLocation();
	const qty = location.search ? Number(location.search.split('=')[1]) : 1;

	const dispatch = useDispatch();

	useEffect(
		() => {
			if (productId) {
				dispatch(addToCart(productId, qty));
				console.log(124);
			}
		},
		[ dispatch, productId, qty ]
	);
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
