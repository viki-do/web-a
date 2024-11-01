import React, { useState, useEffect, useRef } from "react";
import { navLinks } from "../constants";
import hamburger from "../assets/hamburger.svg";
import logoImage from "../assets/logo.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bgColor, setBgColor] = useState(window.scrollY > 110 ? "bg-dark-blue" : "bg-transparent");
  const [logo, setLogo] = useState(window.scrollY > 110 ? logoImage : null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 110) {
        setBgColor("bg-dark-blue");
        setLogo(logoImage); 
      } else {
        setBgColor("bg-transparent");
        setLogo(null);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className={`fixed top-8 left-0 w-full transition-colors duration-300 py-3 z-30 ${bgColor}`}>
      <nav className="flex justify-between items-center mx-10 text-white font-semibold">
        <a href="/" className="font-bold text-xl flex items-center">
          {logo ? (
            <img src={logo} alt="Logo" className="h-9 mr-2" />
          ) : (
            <span className="text-5xl font-semibold">WEB-A<span className="text-turquise">.</span></span>
          )}
        </a>
        <ul className="hidden lg:flex justify-between gap-12 items-center">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li>
            <button className="bg-turquise text-white font-bold px-10 py-3 rounded-3xl">Contact Us</button>
          </li>
        </ul>
        <div className="lg:hidden">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} onClick={toggleMenu} />
        </div>
      </nav>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-full left-0 w-full bg-dark-blue text-white transition-all duration-300"
        >
          <ul className="flex flex-col items-center py-2"> 
            {navLinks.map((item) => (
              <li key={item.href} className="w-full text-start pl-10"> 
                <a href={item.href} className="hover:text-turquise block w-full py-2"> 
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
