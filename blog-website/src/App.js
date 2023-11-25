import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"; // Check the actual path and file extension
import Blog from "./Pages/Blog"; // Check the actual path and file extension

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for each component */}
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
