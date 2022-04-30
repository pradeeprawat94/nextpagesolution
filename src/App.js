import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Cart from './components/Cart/Cart';

function App() {
  return (
    <>
 
    <Router>
    <Header/>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>

  
    </>
  );
}

export default App;
