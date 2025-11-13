"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";
import { BiLogoWhatsapp } from "react-icons/bi";
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
      value: "+55 (11) 95243-8640",
      href: "https://wa.me/5511952438640",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "matheusxaviercerqueira",
      href: "https://www.linkedin.com/in/matheusxaviercerqueira",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "MatheusJosue",
      href: "https://github.com/MatheusJosue",
    },
    {
      icon: FiMail,
      label: "Email",
      value: "matheusjx@hotmail.com",
      href: "mailto:matheusjx@hotmail.com",
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
        >
          <div className={styles.header}>
            <motion.h2 variants={itemVariants} className={styles.title}>
              Vamos Conversar
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className={styles.titleUnderline}
            />
          </div>

          <motion.p variants={itemVariants} className={styles.intro}>
            Estou sempre aberto a novas oportunidades e projetos interessantes.
            Entre em contato através dos canais abaixo. Responderei em breve!
          </motion.p>

          <motion.div variants={containerVariants} className={styles.grid}>
            {contacts.map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={idx}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
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
              Prefere me enviar uma mensagem? Posso responder mais rapidamente
              por email.
            </p>
            <Link href="mailto:matheusjx@hotmail.com" className={styles.button}>
              Enviar Email
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
