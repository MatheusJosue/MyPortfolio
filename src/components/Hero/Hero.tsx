"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.greeting}>
            <span className={styles.wave}>👋</span>
            <p>Bem-vindo ao meu portfólio</p>
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.title}>
            Matheus Xavier Cerqueira
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.subtitle}>
            Front-End Developer | React, Next.js & TypeScript
          </motion.p>

          <motion.p variants={itemVariants} className={styles.description}>
            Com 4+ anos de experiência, crio interfaces modernas, responsivas e
            de alta performance. Especializado em React, Next.js, Angular e
            arquiteturas escaláveis.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.cta}>
            <Link href="#projetos" className={styles.primary}>
              Ver Meus Projetos
            </Link>
            <Link href="#contato" className={styles.secondary}>
              Entrar em Contato
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.number}>4+</span>
              <span className={styles.label}>Anos de Experiência</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>20+</span>
              <span className={styles.label}>Projetos Entregues</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>15+</span>
              <span className={styles.label}>Clientes Atendidos</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Illustration / Decoration */}
        <motion.div
          className={styles.illustration}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <div className={styles.profileContainer}>
            <Image
              src="/profile.jpeg"
              alt="Matheus Xavier Cerqueira - Profile"
              width={280}
              height={280}
              priority
              className={styles.profileImage}
            />
          </div>
          <div className={styles.gradient} />
        </motion.div>
      </div>
    </section>
  );
};
