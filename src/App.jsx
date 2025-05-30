import { Suspense, useState } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';

import React from 'react';

// import TailwindCSS from "./TailwinddCSS";
import './assets/tailwind.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';

// import Dashboard from "./pages/Dashboard";

//import Orders from './pages/Orders';
//import Customers from './pages/Customers';
//import NotFound from './pages/NotFound';

//import AddOrder from './pages/AddOrder'; 
//import AddCustomer from './pages/AddCustomer';

//import MainLayout from './layouts/MainLayout';
//import AuthLayout from './layouts/AuthLayout';
//import Login from './pages/Auth/Login';
//import Register from './pages/Auth/Register';
//import Forgot from './pages/Auth/Forgot';

const Dashboard = React.lazy(() => import("./pages/Dashboard"))
const Customers = React.lazy(() => import("./pages/Customers"))
const Orders = React.lazy(() => import("./pages/Orders"))
const NotFound = React.lazy(() => import("./pages/NotFound"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const Login = React.lazy(() => import("./pages/Auth/Login"))
const Register = React.lazy(() => import("./pages/Auth/Register"))
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"))
const AddOrder = React.lazy(() => import("./pages/AddOrder"))
const AddCustomer = React.lazy(() => import("./pages/AddCustomer"))

const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"))
const GuestPage = React.lazy(() => import("./pages/Guest/GuestPage"))
const Products = React.lazy(() => import("./pages/Products"))

import CekStokProduk from "./pages/Guest/CekStokProduk.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
    <Suspense fallback={<Loading/>}>
<div className="w-full h-full">  
                <Routes>
                  <Route element={<GuestLayout />}>
                  <Route path="/guest" element={<GuestPage />}
                  
                  />
                   
                    
                  </Route>

                  <Route element={<MainLayout/>}>
                    <Route path="/add-order" element={<AddOrder />} />
                    <Route path="/add-customer" element={<AddCustomer />} />
                    <Route path="/error/:errorCode" element={<NotFound />} />

                    <Route path='/' element={<Dashboard />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/customers' element={<Customers />} />
                    <Route path="products" element={<Products />} />
                  </Route>
                  

                  <Route element={<AuthLayout/>}>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/forgot" element={<Forgot/>} />
                  </Route>

                  <Route path="/error/:errorCode" element={<NotFound/>} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
        </div>
      </Suspense>
  )
}

export default App
