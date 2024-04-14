import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import Wishlist from "./routes/Wishlist";
import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/about" element={<About />}></Route>
				<Route path="/wishlist" element={<Wishlist />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
