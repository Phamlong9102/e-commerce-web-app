import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Shirt from "./pages/Shirt/Shirt";
import ProductLayout from "./layout/ProductLayout";
import Trouser from "./pages/Trouser/Trouser";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword"; 

function App() {
  return (
    <>
      <div className="relative">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />}></Route>
            </Route>
            <Route path="/store" element={<ProductLayout />}>
              <Route path="shirt" element={<Shirt />}></Route>
              <Route path="trouser" element={<Trouser />}></Route>
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="reset" element={<ForgotPassword />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
