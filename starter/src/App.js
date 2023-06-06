import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReadPage from "./pages/ReadPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" Component={ReadPage} />
          <Route path="/search" Component={SearchPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
