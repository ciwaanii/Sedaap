
import AboutUs from '../../components/Guest/AboutUs';
import HeroSection from '../../components/Guest/HeroSection';
import Footer from '../../components/Guest/Footer';
import TopProducts from '../../components/Guest/TopProduct';
import Testimonials from '../../components/Guest/Testimonials';
import CekStokProduk from '../../components/Guest/CekStokProduk';
import Slider from '../../components/Guest/Slider';

import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';


export default function GuestPage() {
   const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);
  return (
    <div>
      <div id="hero-section">
      <HeroSection/>
      </div>

       <div id="top-products">
        <TopProducts />
      </div>
      <div id="cek-stok-produk">
         <CekStokProduk/>
      </div>
     
      <div id="about-us">
        <AboutUs />
      </div>
       <Slider/>
      <div id="testimonials">
        <Testimonials />
      </div>
      <Footer/>

    </div>
  );
}
