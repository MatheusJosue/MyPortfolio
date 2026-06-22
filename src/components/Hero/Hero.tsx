"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { SOCIAL_LINKS } from "@/utils/constants";
import styles from "./Hero.module.css";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bgGlowOne} />
      <div className={styles.bgGlowTwo} />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.eyebrow}>
            <span className={styles.statusDot} />
            São Paulo - SP | Full Stack com foco em front-end
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.title}>
            Matheus Josue Xavier Cerqueira
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.subtitle}>
            Desenvolvedor Full Stack com 4+ anos em aplicações web, produtos
            financeiros e interfaces modernas.
          </motion.p>

          <motion.p variants={itemVariants} className={styles.description}>
            Atuo principalmente no front-end com Next.js, React, TypeScript,
            Angular, Tailwind CSS e Bootstrap, conectando interfaces a APIs REST,
            autenticação com Keycloak/JWT e back-ends em Laravel, .NET e Node.js.
            Tenho experiência com backoffice, esteiras operacionais, plataformas
            de investimento, Docker, Azure DevOps e CI/CD.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.cta}>
            <Link href="#projetos" className={styles.primary}>
              Ver projetos relevantes
              <FiArrowUpRight />
            </Link>
            <a href={SOCIAL_LINKS.resume} className={styles.secondary} download>
              Baixar currículo
              <FiDownload />
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.socials}>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              <FiLinkedin /> LinkedIn
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
              <FiGithub /> GitHub
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.number}>4+</span>
              <span className={styles.label}>anos de experiência</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>Fintech</span>
              <span className={styles.label}>backoffice, esteiras e investimentos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.number}>Stack</span>
              <span className={styles.label}>Next.js, React, Laravel e .NET</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.25 }}
        >
          <div className={styles.profileCard}>
            <div className={styles.profileFrame}>
              <Image
                src="/profile.jpeg"
                alt="Foto de Matheus Josue Xavier Cerqueira"
                width={360}
                height={360}
                priority
                className={styles.profileImage}
              />
            </div>

            <div className={styles.floatingPanel}>
              <span>Foco atual</span>
              <strong>Front-end de produto</strong>
              <small>Next.js, React e TypeScript</small>
            </div>

            <div className={styles.codePanel}>
              <span>stack.full()</span>
              <strong>Laravel + .NET + APIs</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
