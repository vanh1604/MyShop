import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from "react";
import instance from "./axios";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/admin/Dashboard";
import ProductAdd from "./pages/admin/ProductAdd";

function App() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const result = await instance.get("/products");
        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);
  const handleSubmit = (data) => {
    async function fetchProducts() {
      try {
        const res = await instance.post("/products", data);
        console.log(res.data);
        setProducts([...products, res.data]);
        alert("Product added successfully,redirecting to admin page");
        navigate("/admin");
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  };

  return (
    <div>
      <Header />
      <Main />

      {/* <NotFoundPage /> */}
      <Routes>
        <Route path="/" element={<Home product={products} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/admin" element={<Dashboard data={products} />} />
        <Route
          path="/admin/product-add"
          element={<ProductAdd onAdd={handleSubmit} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
