import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/footer";
import Header from "./Components/Header";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductDetails from "./screens/ProductDetails";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <main className="my-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} exact />
              <Route path="/login" element={<LoginScreen />} exact />
              <Route path="/register" element={<RegisterScreen />} exact />
              <Route exact path="/product/:id" element={<ProductDetails />} />
              <Route exact path="/cart" element={<CartScreen />} />
              <Route exact path="/cart/:id" element={<CartScreen />} />
            </Routes>
          </Container>
        </main>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
