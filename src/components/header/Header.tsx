import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  FiBook,
  FiBriefcase,
  FiFileText,
  FiGrid,
  FiHome,
  FiSend,
  FiUser,
  FiX,
} from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import { MediaQueryMobile } from "../../constants";

import styles from "./styles.module.scss";

const Header: React.FC = () => {
  const isMobile = useMediaQuery({ query: MediaQueryMobile });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMobile) setIsMenuOpen(false);
  }, [isMobile]);

  function handleOpenMenu() {
    setIsMenuOpen(true);
  }

  function handleCloseMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <nav className="container">
        <a className={styles.logo} href="#">
          Edvan
        </a>

        <div className={`${styles.menu} ${isMenuOpen && styles.opened}`}>
          <ul className={`${styles.list} grid`}>
            <li>
              <a href="#home" onClick={handleCloseMenu}>
                <FiHome /> Home
              </a>
            </li>

            <li>
              <a href="#about" onClick={handleCloseMenu}>
                <FiUser /> About
              </a>
            </li>

            <li>
              <a href="#skills" onClick={handleCloseMenu}>
                <FiFileText /> Skills
              </a>
            </li>

            <li>
              <a href="#services" onClick={handleCloseMenu}>
                <FiBriefcase /> Services
              </a>
            </li>

            <li>
              <a href="#portfolio" onClick={handleCloseMenu}>
                <FiBook /> Portfolio
              </a>
            </li>

            <li>
              <a href="#contact" onClick={handleCloseMenu}>
                <FiSend /> ContactMe
              </a>
            </li>
          </ul>
          <button className={styles.closeBtn} onClick={handleCloseMenu}>
            <FiX />
          </button>
        </div>

        <div className={styles.btns}>
          <button className={styles.toggle} onClick={handleOpenMenu}>
            <FiGrid />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
