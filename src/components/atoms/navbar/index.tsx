import React, { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import "./styles.css";
import { scrollToSection, useMenuItems } from "./helpers";

export const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0); // 👈 NOVO

  const mobileMenuClasses = `navbar-mobile-menu ${
    isMobileMenuOpen ? "is-open" : ""
  }`;

  const menuItems = useMenuItems();

  const handleToggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleItemClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="container-navbar">
      <nav className="navbar-content">
        <div className="navbar-logo">
          <img src="/navbar.png" alt="Flores" />
        </div>

        <ul className="navbar-links">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className="navbar-link"
              onClick={() => handleItemClick(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="navbar-menu-icon"
          onClick={handleToggleMenu}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <IoClose /> : <TiThMenu />}
        </button>

        {isMobileMenuOpen && (
          <div className={mobileMenuClasses}>
            <button
              type="button"
              className="navbar-mobile-close"
              onClick={handleToggleMenu}
              aria-label="Fechar menu"
            >
              <IoClose />
            </button>

            <ul className="navbar-mobile-links">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className="navbar-mobile-link"
                  onClick={() => handleItemClick(item.id)}
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      <div className="navbar-scrollbar">
        <div
          className="navbar-scrollbar-fill"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};
