"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import styles from "./Projects.module.css";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Sistemas Bancários - Shock IT",
      description:
        "Desenvolvimento de aplicações front-end para o setor bancário com Next.js, entregando soluções modernas, seguras e de alta performance. Liderança técnica e mentoria de equipes.",
      type: "Concluído",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "JWT",
        "Keycloak",
        "Azure DevOps",
      ],
      image: "🏦",
      link: "#",
      github: "https://github.com/MatheusJosue",
    },
    {
      id: 2,
      title: "Aplicações Fullstack - Ledi",
      description:
        "Desenvolvimento de funcionalidades com HTML, CSS, JavaScript, PHP, Angular, React, React Native e Node.js. Criação de APIs RESTful seguras e pipelines Docker.",
      type: "Concluído",
      technologies: ["React", "Angular", "Node.js", "PHP", "Docker", "MySQL"],
      image: "⚙️",
      link: "#",
      github: "https://github.com/MatheusJosue",
    },
    {
      id: 3,
      title: "Desenvolvimento Web - Acesso Web",
      description:
        "Desenvolvimento de páginas web responsivas e otimizadas. Integração de componentes, administração de servidores e atendimento a clientes.",
      type: "Concluído",
      technologies: [
        "HTML5",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "jQuery",
        "PHP",
      ],
      image: "🌐",
      link: "#",
      github: "https://github.com/MatheusJosue",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
            <motion.h2 variants={itemVariants} className={styles.title}>
              Projetos Destacados
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className={styles.titleUnderline}
            />
          </div>

          <motion.p variants={itemVariants} className={styles.subtitle}>
            Confira alguns dos meus projetos mais recentes. Todos desenvolvidos
            com foco em performance, escalabilidade e experiência do usuário.
          </motion.p>

          <motion.div variants={containerVariants} className={styles.grid}>
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={styles.card}
                whileHover={{ y: -10 }}
              >
                <div className={styles.imageWrapper}>
                  <div className={styles.imagePlaceholder}>{project.image}</div>
                </div>

                <div className={styles.content}>
                  <div className={styles.badge}>{project.type}</div>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>

                  <div className={styles.technologies}>
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className={styles.tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={styles.links}>
                    <Link href={project.link} className={styles.link}>
                      <FiExternalLink size={18} />
                      Ver Projeto
                    </Link>
                    <Link href={project.github} className={styles.link}>
                      <FiGithub size={18} />
                      GitHub
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className={styles.cta}>
            <p>Quer ver mais projetos ou discusso uma nova ideia?</p>
            <Link href="#contato" className={styles.button}>
              Vamos conversar
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
