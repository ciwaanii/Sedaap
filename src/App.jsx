import { Suspense, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import React from 'react';
import './assets/tailwind.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';

// Lazy-loaded components
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Orders = React.lazy(() => import("./pages/Orders"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));
const AddOrder = React.lazy(() => import("./pages/AddOrder"));
const AddCustomer = React.lazy(() => import("./pages/AddCustomer"));
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"));
const GuestPage = React.lazy(() => import("./pages/Guest/GuestPage"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const Notes = React.lazy(() => import("./pages/Notes"));
import CekStokProduk from "./pages/Guest/CekStokProduk.jsx";



function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full h-full">
        <Routes>
          {/* Guest Routes */}
          <Route element={<GuestLayout />}>
            <Route path="/guest" element={<GuestPage />} />
          </Route>

          {/* Main Layout Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/add-order" element={<AddOrder />} />
            <Route path="/add-customer" element={<AddCustomer />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/error/:errorCode" element={<NotFound />} />
          </Route>

          {/* Auth Layout Routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
          </Route>

          {/* Fallback Routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
