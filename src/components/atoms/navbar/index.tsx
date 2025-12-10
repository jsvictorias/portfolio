import React, { useEffect, useState } from "react";
import "./styles.css";
import { scrollToSection, useMenuItems } from "./helpers";
import { Menu, CloseMenu } from "./constants";

export const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
      if (window.innerWidth >= 769 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
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
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
           <span>JSVICTORIAS</span>
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
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <CloseMenu /> : <Menu />}
        </button>

        <div className={`navbar-mobile-menu ${isMobileMenuOpen ? "is-open" : ""}`}>
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