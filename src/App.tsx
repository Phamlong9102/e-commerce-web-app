import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Shirt from "./pages/Shirt/Shirt";
import ProductLayout from "./layout/ProductLayout";
import Pants from "./pages/Pants/Pants";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"; 
import UserProfile from "./pages/UserProfile/UserProfile";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import Checkout from "./pages/Checkout/Checkout";
import OrderDetail from "./pages/OrderDetail/OrderDetail";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Order from "./pages/Order/Order";

function App() {
  return (
    <>
      <div className="relative">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />}></Route>
              <Route path="product/:id" element={<ProductDetail />}></Route>
              <Route path="profile" element={<UserProfile />}></Route>
              <Route path="/shopping-cart" element={<ShoppingCart />}></Route>
              <Route path="/checkout" element={<Checkout />}></Route>
              <Route path="/order-detail/:id" element={<OrderDetail />}></Route>
              <Route path="/order" element={<Order />}></Route>
            </Route>
            <Route path="/store" element={<ProductLayout />}>
              <Route path="shirt" element={<Shirt />}></Route>
              <Route path="pants" element={<Pants />}></Route>
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
