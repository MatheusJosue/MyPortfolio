"use client";

import Link from "next/link";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SOCIAL_LINKS } from "@/utils/constants";
import styles from "./Footer.module.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.brand}>Matheus Josue</h3>
            <p className={styles.tagline}>
              Desenvolvedor Full Stack com foco em front-end, Next.js, React,
              TypeScript, Laravel, .NET e Azure DevOps.
            </p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.title}>Navegação</h4>
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

          <div className={styles.section}>
            <h4 className={styles.title}>Redes</h4>
            <div className={styles.socials}>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={styles.socialLink}>
                <FiLinkedin />
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={styles.socialLink}>
                <FiGithub />
              </a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialLink}>
                <BiLogoWhatsapp />
              </a>
              <a href={`mailto:${SOCIAL_LINKS.email}`} aria-label="Email" className={styles.socialLink}>
                <FiMail />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Matheus Josue Xavier Cerqueira. Construído com Next.js.</p>
        </div>
      </div>
    </footer>
  );
};
