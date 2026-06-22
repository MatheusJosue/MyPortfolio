"use client";

import { motion } from "framer-motion";
import { BiLogoWhatsapp } from "react-icons/bi";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SOCIAL_LINKS } from "@/utils/constants";
import styles from "./Contact.module.css";

export const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const contacts = [
    {
      icon: BiLogoWhatsapp,
      label: "WhatsApp",
      value: "+55 (11) 93948-5971",
      href: SOCIAL_LINKS.whatsapp,
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "matheusxaviercerqueira",
      href: SOCIAL_LINKS.linkedin,
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "MatheusJosue",
      href: SOCIAL_LINKS.github,
    },
    {
      icon: FiMail,
      label: "Email",
      value: SOCIAL_LINKS.email,
      href: `mailto:${SOCIAL_LINKS.email}`,
    },
  ];

  return (
    <section className={styles.contact} id="contato">
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className={styles.shell}
        >
          <div className={styles.header}>
            <motion.span variants={itemVariants} className={styles.kicker}>
              Contato
            </motion.span>
            <motion.h2 variants={itemVariants} className={styles.title}>
              Vamos conversar sobre produto, front-end ou sistemas web?
            </motion.h2>
            <motion.p variants={itemVariants} className={styles.intro}>
              Estou aberto a oportunidades full stack com foco em front-end,
              projetos web, backoffice, automações operacionais e produtos
              digitais com integrações reais.
            </motion.p>
          </div>

          <motion.div variants={containerVariants} className={styles.grid}>
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                >
                  <div className={styles.iconWrapper}>
                    <Icon className={styles.icon} />
                  </div>
                  <h3 className={styles.label}>{contact.label}</h3>
                  <p className={styles.value}>{contact.value}</p>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div variants={itemVariants} className={styles.cta}>
            <p>
              Prefere uma visão rápida da minha trajetória? Baixe meu currículo
              em PDF ou me chame diretamente por email.
            </p>
            <div className={styles.actions}>
              <a href={SOCIAL_LINKS.resume} download className={styles.button}>
                Baixar currículo
                <FiDownload />
              </a>
              <a href={`mailto:${SOCIAL_LINKS.email}`} className={styles.buttonSecondary}>
                Enviar email
                <FiMail />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
