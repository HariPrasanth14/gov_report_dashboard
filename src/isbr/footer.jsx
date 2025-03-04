import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
           <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-400 text-sm">
              We simplify tax compliance with our seamless GST filing solutions. No installation required!
            </p>
          </div>
  
           <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
  
           <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-blue-400">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="#" className="hover:text-blue-300">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaTwitter className="text-3xl" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaYoutube className="text-3xl " />
              </a>
            </div>
          </div>
  
        </div>
  
         <div className="text-center text-gray-500 text-sm mt-10">
          &copy; 2024 GovReports. All rights reserved.
        </div>



        
      </footer>
    );
  };
  
  export default Footer;
  