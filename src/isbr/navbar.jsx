import { useState } from "react";
import { Menu } from "lucide-react";
import logo from "../asstetTwo/logo_IN.png";

const NavbarIbs = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-10" />

        <div className="hidden lg:flex gap-6 text-gray-700 font-semibold">
          <a href="#" className="hover:text-blue-500">OUR SERVICES</a>
          <a href="#" className="hover:text-blue-500">BUSINESS</a>
          <a href="#" className="hover:text-blue-500">GST PREPARER</a>
          <a href="#" className="hover:text-blue-500">ENTERPRICES</a>
          <a href="#" className="hover:text-blue-500">CSC GST SERVICES</a>
          <a href="#" className="hover:text-blue-500">CONTACT US</a>
        </div>

        <div className="hidden lg:flex gap-4">
          <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">Login</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Free Trial</button>
        </div>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4 text-gray-700 font-semibold">
          <a href="#" className="hover:text-blue-500">OUR SERVICES</a>
          <a href="#" className="hover:text-blue-500">BUSINESS</a>
          <a href="#" className="hover:text-blue-500">GST PREPARER</a>
          <a href="#" className="hover:text-blue-500">ENTERPRICES</a>
          <a href="#" className="hover:text-blue-500">CSC GST SERVICES</a>
          <a href="#" className="hover:text-blue-500">CONTACT US</a>
          <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">Login</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Free Trial</button>
        </div>
      )}
    </nav>
  );
};

export default NavbarIbs;
