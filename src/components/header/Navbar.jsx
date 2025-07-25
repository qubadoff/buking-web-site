import React, { useEffect, useState } from 'react';
import { FaPhone, FaEnvelope, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import backPhoto from "../../assets/backg.webp";
import { useNavigate } from 'react-router';
import useDarkMode from '../../hooks/useDarkMode';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('bg-gray-900', isDarkMode);
    document.body.classList.toggle('bg-white', !isDarkMode);
    return () => document.body.classList.remove('bg-gray-900', 'bg-white');
  }, [isDarkMode]);

  const textColor = isScrolled && !isDarkMode ? "text-black" : "text-white";
  const iconColor = isScrolled && !isDarkMode ? "black" : "white";
  const headerBg = isScrolled
    ? (isDarkMode ? "bg-gray-800" : "bg-white shadow-md")
    : "bg-transparent";

  return (
    <header className={`w-full font-serif transition-all duration-500 fixed top-0 z-50 ${headerBg}`}>
      <div className={`flex justify-between items-center text-[14px] px-6 md:px-12 py-3 ${textColor}`}>
        <div className="flex items-center gap-3">
          <FaPhone className="cursor-pointer" size={14} />
          <FaEnvelope className="cursor-pointer" size={14} />
          <span className="font-semibold tracking-wide cursor-pointer hidden sm:inline">Logo</span>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode}>
            {isDarkMode ? <FaSun size={18} color="white" /> : <FaMoon size={18} color={iconColor} />}
          </button>



          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen
              ? <FaTimes size={20} color={iconColor} />
              : <FaBars size={20} color={iconColor} />
            }
          </button>
        </div>
      </div>

      <div className={`text-center my-1 ${isDarkMode ? 'text-white' : textColor}`}>
        <h1 className="text-xl italic font-semibold">AppLogo</h1>
      </div>

      <hr className="border-gray-300 opacity-30" />

      <nav className="text-center py-2">
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex justify-center gap-6 text-sm tracking-wide ${isDarkMode ? 'text-white' : textColor}`}
        >
          <li className="cursor-pointer hover:text-gray-500">Page</li>
          <li className="cursor-pointer hover:text-gray-500">Page</li>
          <li className="cursor-pointer hover:text-gray-500">Page</li>
          <li className="cursor-pointer hover:text-gray-500">Page </li>
          <li className="cursor-pointer hover:text-gray-500">Page</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
