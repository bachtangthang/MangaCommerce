import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function App() {
	//get access to cartItem redux
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	return (
		<BrowserRouter>
			<div className="grid-container">
				<header className="row">
					<div>
						<Link to="/" className="brand">
							MangaStuff
						</Link>
					</div>
					<div>
						<Link to="/cart">
							Cart
							{cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
						</Link>
						<Link to="/signin">Sign In</Link>
					</div>
				</header>
				<main>
					<Routes>
						<Route path="/product/:id" element={<ProductScreen />} />
						<Route path="/" element={<HomeScreen />} exact />
						<Route path="/cart/:id" element={<CartScreen />} />
					</Routes>
				</main>
				<footer className="row center">All right reserved</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
