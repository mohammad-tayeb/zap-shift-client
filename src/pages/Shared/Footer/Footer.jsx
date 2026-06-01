import Logo from "../../../components/logo/Logo";
import { FaLinkedinIn, FaXTwitter, FaFacebookF, FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] text-gray-400 py-12 px-6 flex flex-col items-center text-center mx-auto max-w-7xl">
      {/* Top Section: Logo & Description */}
      <div className="flex flex-col items-center max-w-2xl gap-4">
        <Logo />
        <p className="text-sm md:text-base leading-relaxed text-gray-400">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      {/* Decorative Divider Line */}
      <hr className="w-full border-t border-gray-800/50 my-8" />

      {/* Middle Section: Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm font-medium text-gray-300">
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#coverage" className="hover:text-white transition-colors">Coverage</a>
        <a href="#about" className="hover:text-white transition-colors">About Us</a>
        <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        <a href="#blog" className="hover:text-white transition-colors">Blog</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </nav>

      {/* Decorative Divider Line */}
      <hr className="w-full border-t border-gray-800/50 my-8" />

      {/* Bottom Section: Social Media Icons */}
      <div className="flex items-center gap-4">
        {/* LinkedIn */}
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#0077B5] text-white hover:opacity-90 transition-opacity"
        >
          <FaLinkedinIn size={18} />
        </a>

        {/* X (formerly Twitter) */}
        <a 
          href="https://x.com" 
          target="_blank" 
          rel="noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
        >
          <FaXTwitter size={18} />
        </a>

        {/* Facebook */}
        <a 
          href="https://facebook.com" 
          target="_blank" 
          rel="noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1877F2] text-white hover:opacity-90 transition-opacity"
        >
          <FaFacebookF size={18} />
        </a>

        {/* YouTube */}
        <a 
          href="https://youtube.com" 
          target="_blank" 
          rel="noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF0000] text-white hover:opacity-90 transition-opacity"
        >
          <FaYoutube size={18} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;