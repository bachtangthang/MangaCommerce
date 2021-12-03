import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router';
import { addToCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';
import { Link } from 'react-router-dom';

const CartScreen = (props) => {
	const { id } = useParams();
	const productId = id;
	const location = useLocation();
	const qty = location.search ? Number(location.search.split('=')[1]) : 1;

	const navigate = useNavigate();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const dispatch = useDispatch();
	//Ngay khi vua o product screem, nhan "them vao gio hang" thi se chuyen den CartScreen
	//Sau khi render cartScreen thi se chay UseEffect =>> dispatch addtocart
	useEffect(
		() => {
			if (productId) {
				dispatch(addToCart(productId, qty));
				console.log(124);
			}
		},
		[ dispatch, productId, qty ]
	);

	const removeFromCartHandler = (id) => {
		//delete action
	};

	const checkoutHandler = () => {
		navigate('/signin?redirect=shipping');
	};
	return (
		<div className="row top">
			<div className="col-2">
				<h1>Shopping cart</h1>
				{cartItems.length === 0 ? (
					<MessageBox>
						Cart is Empty
						<Link to="/">Go Shopping</Link>
					</MessageBox>
				) : (
					<ul>
						{cartItems.map((item) => (
							<li key={item.product}>
								<div className="row">
									<div>
										<img src={item.img} alt={item.name} className="small" />
									</div>
									<div className="min-30">
										<Link to={`/product/${item.product}`}>{item.name}</Link>
									</div>
									<div>
										<select
											value={item.qty}
											onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
										>
											{[ ...Array(item.countInStock).keys() ].map((x) => (
												<option key={x + 1} value={x + 1}>
													{x + 1}
												</option>
											))}
										</select>
									</div>
									<div>${item.price}</div>
									<div>
										<button type="button" onClick={() => removeFromCartHandler(item.product)}>
											Delete
										</button>
									</div>
								</div>
							</li>
						))}
					</ul>
				)}
			</div>
			<div className="col-1">
				<div className="card card-body">
					<ul>
						<li>
							<h2>
								Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items): ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
							</h2>
						</li>
						<li>
							<button
								type="button"
								onClick={checkoutHandler}
								className="primary block"
								disabled={cartItems.length === 0}
							>
								Proceed to checkout
							</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default CartScreen;
