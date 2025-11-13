"use client";

import { motion } from "framer-motion";
import styles from "./About.module.css";

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const highlights = [
    {
      title: "Experiência",
      description: "4+ anos em desenvolvimento front-end e fullstack",
    },
    {
      title: "Stack",
      description: "React, Next.js, Angular, TypeScript, Node.js, PHP",
    },
    {
      title: "Especialidade",
      description: "Interfaces responsivas, performance e escalabilidade",
    },
    {
      title: "Liderança",
      description: "Mentoria de equipes, boas práticas e metodologias ágeis",
    },
  ];

  return (
    <section className={styles.about} id="sobre">
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className={styles.header}>
            <h2 className={styles.title}>Sobre Mim</h2>
            <div className={styles.titleUnderline} />
          </motion.div>

          <motion.p variants={itemVariants} className={styles.intro}>
            Sou um Front-End Developer com 4+ anos de experiência especializado
            em React, Next.js e Angular. Apaixonado por criar interfaces
            modernas e responsivas que combinam estética, performance e
            funcionalidade para entregar soluções de impacto.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.highlights}>
            {highlights.map((highlight, index) => (
              <div key={index} className={styles.highlight}>
                <h4 className={styles.highlightTitle}>{highlight.title}</h4>
                <p className={styles.highlightDesc}>{highlight.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className={styles.cta}>
            <p>Quer conhecer melhor meu trabalho?</p>
            <a href="#contato" className={styles.link}>
              Vamos conversar →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
