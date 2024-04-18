import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Red from "./Red";
import Blue from "./Blue";

function App() {
  return (
    <BrowserRouter>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <div><Link to='/'>Home</Link></div>
          <div><Link to='/Red'>Red</Link></div>
          <div><Link to='/Blue'>Blue</Link></div>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Blue" element={<Blue />} />
            <Route path="/Red" element={<Red />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;