import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
function App() {
	return (
		<BrowserRouter>
			<div className="grid-container">
				<header className="row">
					<div>
						<a href="/" className="brand">
							MangaStuff
						</a>
					</div>
					<div>
						<a href="/cart">Cart</a>
						<a href="/signin">Sign In</a>
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
