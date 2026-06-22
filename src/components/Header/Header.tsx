"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>Matheus Josue</span>
          </Link>

          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Abrir ou fechar menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <div className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
            <Link href="#sobre" onClick={() => setIsMenuOpen(false)}>
              Sobre
            </Link>
            <Link href="#skills" onClick={() => setIsMenuOpen(false)}>
              Tecnologias
            </Link>
            <Link href="#projetos" onClick={() => setIsMenuOpen(false)}>
              Projetos
            </Link>
            <Link href="#contato" onClick={() => setIsMenuOpen(false)}>
              Contato
            </Link>
          </div>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
