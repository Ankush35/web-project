import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Wishlist from "./routes/Wishlist";
import ProductDetail from "./routes/ProductDetail";
import Account from "./routes/Account";
import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/about" element={<About />}></Route>
				<Route path="/wishlist" element={<Wishlist />}></Route>
				<Route
					path="/product-detail"
					element={<ProductDetail />}
				></Route>
				<Route path="/account" element={<Account />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
