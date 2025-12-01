import React, { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import "./styles.css";
import { scrollToSection } from "./helpers";
import { MenuItem, MENU_ITEMS } from "./props";

export const NavBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header className="container-navbar">
      <nav className="navbar-content">
        <div className="navbar-logo">
            <img src="/navbar.png" alt="Flores"/>
        </div>

        <ul className="navbar-links">
          {MENU_ITEMS.map((item) => (
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
          <div className="navbar-mobile-menu">
            <button
              type="button"
              className="navbar-mobile-close"
              onClick={handleToggleMenu}
              aria-label="Fechar menu"
            >
              <IoClose />
            </button>

            <ul className="navbar-mobile-links">
              {MENU_ITEMS.map((item) => (
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
    </header>
  );
};
