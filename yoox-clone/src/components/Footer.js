import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center mt-16">
      <p>&copy; 2025 YOOX. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="hover:text-blue-500">Privacy Policy</a>
        <a href="#" className="hover:text-blue-500">Terms of Service</a>
        <a href="#" className="hover:text-blue-500">Contact</a>
      </div>
      <div className="flex justify-center space-x-4 mt-6">
        <a href="#" className="text-white hover:text-blue-500"><FaFacebookF /></a>
        <a href="#" className="text-white hover:text-blue-500"><FaInstagram /></a>
        <a href="#" className="text-white hover:text-blue-500"><FaTwitter /></a>
        <a href="#" className="text-white hover:text-blue-500"><FaPinterest /></a>
        <a href="#" className="text-white hover:text-blue-500"><FaTiktok /></a>
      </div>
    </footer>
  );
};

export default Footer;
