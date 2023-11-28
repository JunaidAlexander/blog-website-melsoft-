import "./App.css";
import Home from "./home";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Switch
} from "react-router-dom";

import HeroSection from "./Components/HeroSection";
import Layout from "./pages/Layout";
import BlogLayout from "./pages/BlogLayout";
import PostLayout from "./pages/PostLayout";

function App() {
	return (
		<div className="App">
			<Home />
			<Router>
				<Routes>
					
						<Route exact path="/" element={<HeroSection />} />
						<Route path="/about" element={<Layout />} />
						<Route path="/blog" element={<BlogLayout />} />
						<Route path="/post" element={<PostLayout />} />

				</Routes>
			</Router>
		</div>
	);
}

export default App;
