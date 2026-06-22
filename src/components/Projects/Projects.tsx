"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight, FiLayers, FiRepeat, FiTrendingUp } from "react-icons/fi";
import styles from "./Projects.module.css";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Esteira Automatizada - Grupo Matri",
      description:
        "Plataforma operacional para compra e venda de precatórios, integrando robôs de consulta processual, enriquecimento de dados comerciais, gestão documental, contratos via Clicksign, validações jurídicas, KYC e acompanhamento do fluxo até etapas operacionais e financeiras.",
      type: "2024 - Presente",
      technologies: ["Next.js", "React", "TypeScript", "APIs REST", "MySQL", "Keycloak", "C#", ".NET", "Docker", "Azure DevOps"],
      icon: FiRepeat,
      link: "#contato",
    },
    {
      id: 2,
      title: "Backoffice Bancário",
      description:
        "Backoffice administrativo para centralizar e gerenciar dados dos clientes da Esteira Automatizada, incluindo documentos, status operacionais, consultas, informações cadastrais e ações internas relacionadas aos processos de precatórios.",
      type: "2024 - Presente",
      technologies: ["Next.js", "React", "TypeScript", "Keycloak", "JWT", "SQL Server", "APIs REST", "Docker", "Azure DevOps"],
      icon: FiLayers,
      link: "#contato",
    },
    {
      id: 3,
      title: "Plataforma de Investimentos",
      description:
        "Plataforma para gestão de investimentos relacionados à operação da Esteira Automatizada, com atuação no front-end e back-end em regras de negócio, integrações, consultas por documento, aportes, resgates e rotinas administrativas.",
      type: "2024 - Presente",
      technologies: ["Next.js", "React", "TypeScript", "Laravel", "MySQL", "APIs REST", "Autenticação", "Docker", "Azure DevOps"],
      icon: FiTrendingUp,
      link: "#contato",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className={styles.projects} id="projetos">
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className={styles.header}>
            <motion.span variants={itemVariants} className={styles.kicker}>
              Projetos relevantes
            </motion.span>
            <motion.h2 variants={itemVariants} className={styles.title}>
              Produtos financeiros, backoffice e automação operacional.
            </motion.h2>
            <motion.p variants={itemVariants} className={styles.subtitle}>
              Projetos recentes em que atuei no front-end e back-end, conectando
              experiência do usuário, regras de negócio, autenticação, dados e
              processos operacionais críticos.
            </motion.p>
          </div>

          <motion.div variants={containerVariants} className={styles.grid}>
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <motion.article
                  key={project.id}
                  variants={itemVariants}
                  className={styles.card}
                  whileHover={{ y: -10 }}
                >
                  <div className={styles.cardTop}>
                    <div className={styles.iconBadge}>
                      <Icon />
                    </div>
                    <span className={styles.badge}>{project.type}</span>
                  </div>

                  <div className={styles.content}>
                    <h3 className={styles.cardTitle}>{project.title}</h3>
                    <p className={styles.description}>{project.description}</p>

                    <div className={styles.technologies}>
                      {project.technologies.map((tech) => (
                        <span key={tech} className={styles.tech}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={styles.links}>
                      <Link href={project.link} className={styles.link}>
                        Conversar sobre esse projeto
                        <FiArrowUpRight size={18} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {/* <motion.div variants={itemVariants} className={styles.cta}>
            <div>
              <FiBriefcase />
              <p>Quer conversar sobre os projetos, ver código ou avaliar uma oportunidade?</p>
            </div>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className={styles.button}>
              GitHub
              <FiGithub />
            </a>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

