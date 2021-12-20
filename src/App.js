import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './Home/Home';
import Products from './Pages/Products/Products';
import Pro from './Pages/Products/Pro';
import Navber from './Pages/Navbar/Navber';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Pages/Login/Login/Firebase/Context/AuthProvider';
import Register from './Pages/Login/Register/Register';
// import food from './Home/Buy/food';
import Food from './Home/Buy/Food';

function App() {
  return (
    <div className="App">
     <AuthProvider>
      <BrowserRouter>
      <Navber></Navber>
      <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/home"
        element={<Home />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/allproducts"
        element={<Pro />}
      />
      <Route
        path="//booking/:productId"
        element={<Food />}
      />
      </Routes>
      
      </BrowserRouter>
      </AuthProvider>
    
    </div>
  );
}

export default App;
