import { Outlet } from "react-router-dom";
import Navbar from "../components/Guest/Navbar";
import Navbar2 from "../components/Guest/Navbar2";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

export default function GuestLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Navbar2 />
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="p-4 bg-gray-800 text-gray-300 flex justify-between items-center w-full">
  <span className="text-left text-gray-500">&copy; 2025 Sedap Restaurant. All rights reserved.</span>

  <div className="flex text-gray-500">
    <a href="#" aria-label="Facebook" className="hover:text-blue-400 transition px-3 flex items-center">
      <FiFacebook size={20} />
    </a>
    <a href="#" aria-label="Twitter" className="hover:text-blue-300 transition px-3 flex items-center border-l border-dashed border-gray-600">
      <FiTwitter size={20} />
    </a>
    <a href="#" aria-label="Instagram" className="hover:text-pink-400 transition px-3 flex items-center border-l border-dashed border-gray-600">
      <FiInstagram size={20} />
    </a>
    <a href="#" aria-label="LinkedIn" className="hover:text-blue-500 transition px-3 flex items-center border-l border-dashed border-gray-600">
      <FiLinkedin size={20} />
    </a>
  </div>
</footer>


    </div>
  );
}
