import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { useEffect, useState } from "react";
import instance from "./axios";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./pages/ProductForm";
import AuthForm from "./pages/AuthForm";
import PrivateRoute from "./components/PrivateRoute";

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

  const removeProduct = (id) => {
    (async () => {
      try {
        if (window.confirm("Are you sure you want to delete this product?")) {
          await instance.delete(`/products/${id}`);
          const newDatas = await instance.get("/products");
          setProducts(newDatas.data);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  const handleProduct = async (data) => {
    if (data.id) {
      await instance.patch(`/products/${data.id}`, data);
      const newDatas = await instance.get("/products");
      setProducts(newDatas.data);
    } else {
      const res = await instance.post("/products", data);

      setProducts([...products, res.data]);
    }
    alert("successfully,redirecting to admin page");
    navigate("/admin");
  };
  return (
    <div>
      <Header />

      {/* <NotFoundPage /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/register" element={<AuthForm isRegister />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/shop" element={<Shop product={products} />} />
        <Route path="/admin" element={<PrivateRoute />}>
          <Route
            path="/admin"
            element={
              <Dashboard data={products} removeProduct={removeProduct} />
            }
          />
          <Route
            path="/admin/product-add"
            element={<ProductForm handleProduct={handleProduct} />}
          />
          <Route
            path="/admin/product-edit/:id"
            element={<ProductForm handleProduct={handleProduct} />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
