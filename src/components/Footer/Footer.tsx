"use client";

import Link from "next/link";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { BiLogoWhatsapp } from "react-icons/bi";
import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Brand Section */}
          <div className={styles.section}>
            <h3 className={styles.brand}>Matheus Xavier</h3>
            <p className={styles.tagline}>
              Front-End Developer | React & Next.js Specialist
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h4 className={styles.title}>Links</h4>
            <ul className={styles.links}>
              <li>
                <Link href="#sobre">Sobre</Link>
              </li>
              <li>
                <Link href="#skills">Tecnologias</Link>
              </li>
              <li>
                <Link href="#projetos">Projetos</Link>
              </li>
              <li>
                <Link href="#contato">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className={styles.section}>
            <h4 className={styles.title}>Redes Sociais</h4>
            <div className={styles.socials}>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles.socialLink}
              >
                <FiLinkedin />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={styles.socialLink}
              >
                <FiGithub />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={styles.socialLink}
              >
                <BiLogoWhatsapp />
              </a>
              <a
                href="mailto:seu-email@example.com"
                aria-label="Email"
                className={styles.socialLink}
              >
                <FiMail />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom */}
        <div className={styles.bottom}>
          <p>
            &copy; {currentYear} Matheus Cerqueira. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
