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
        delayChildren: 0.15,
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
      title: "Front-end forte",
      description:
        "Next.js, React, TypeScript, Angular, Tailwind CSS, Bootstrap e interfaces responsivas.",
    },
    {
      title: "Back-end e APIs",
      description:
        "Laravel, .NET, C#, PHP, Node.js, APIs REST, Swagger, Postman e bancos relacionais.",
    },
    {
      title: "Financeiro e backoffice",
      description:
        "Experiência com sistemas críticos, esteiras operacionais, precatórios e plataformas de investimento.",
    },
    {
      title: "Entrega e sustentação",
      description:
        "Docker, Azure DevOps, GitLab CI/CD, Scrum, Kanban, contato com clientes e suporte técnico.",
    },
  ];

  const experiences = [
    {
      role: "Desenvolvedor Full Stack",
      company: "ShockIt",
      period: "10/2024 - Presente",
      location: "São Paulo - SP",
      description:
        "Projetos do setor financeiro com interfaces, fluxos operacionais, integrações, autenticação, APIs, melhorias de usabilidade, reuniões com clientes e apoio técnico a desenvolvedores.",
      stack:
        "Next.js, React, TypeScript, Tailwind CSS, Laravel, JWT, Keycloak, SQL Server, Docker, Azure DevOps, Scrum e Swagger.",
    },
    {
      role: "Desenvolvedor Full Stack",
      company: "Ledi Ponto",
      period: "09/2022 - 10/2024",
      location: "Jundiaí - SP",
      description:
        "Desenvolvimento e manutenção de sistemas web e mobile, atuando em front-end, back-end, banco de dados, integrações, suporte a clientes, performance e processos de entrega.",
      stack:
        "Angular, TypeScript, PHP, Node.js, MySQL, Docker, GitLab, CI/CD, Ionic Framework, Figma e APIs REST.",
    },
    {
      role: "Desenvolvedor Full Stack",
      company: "7COMm",
      period: "10/2021 - 09/2022",
      location: "São Paulo - SP",
      description:
        "Desenvolvimento de aplicações web corporativas, criação e manutenção de APIs REST, autenticação, interfaces responsivas e evolução de sistemas internos.",
      stack:
        "C#, .NET, Angular, TypeScript, MySQL, Bootstrap, JWT, OAuth, Git, Swagger, Postman, Scrum e Kanban.",
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
          className={styles.shell}
        >
          <motion.div variants={itemVariants} className={styles.header}>
            <span className={styles.kicker}>Sobre mim</span>
            <h2 className={styles.title}>
              Full Stack com base sólida em front-end e vivência em produtos financeiros.
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.copyGrid}>
            <p className={styles.intro}>
              Sou Desenvolvedor Full Stack com mais de 4 anos de experiência em
              aplicações web, atuando com Next.js, React, TypeScript, Laravel,
              .NET, APIs REST e bancos relacionais. Meu foco principal está em
              construir interfaces modernas, responsivas e sustentáveis.
            </p>
            <p className={styles.intro}>
              Tenho experiência em projetos do setor financeiro, autenticação
              com Keycloak/JWT, CI/CD, Docker e Azure DevOps. Trabalho de forma
              hands-on em decisões técnicas, contato com clientes, sustentação
              de sistemas críticos, backoffice, esteiras operacionais e
              plataformas de investimento.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.highlights}>
            {highlights.map((highlight) => (
              <div key={highlight.title} className={styles.highlight}>
                <h4 className={styles.highlightTitle}>{highlight.title}</h4>
                <p className={styles.highlightDesc}>{highlight.description}</p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className={styles.experienceBlock}>
            <div className={styles.sectionHeader}>
              <span className={styles.kicker}>Experiência profissional</span>
              <h3>Trajetória recente</h3>
            </div>

            <div className={styles.timeline}>
              {experiences.map((experience) => (
                <article key={`${experience.company}-${experience.period}`} className={styles.experienceCard}>
                  <div>
                    <h4>{experience.role} — {experience.company}</h4>
                    <span>{experience.location} | {experience.period}</span>
                  </div>
                  <p>{experience.description}</p>
                  <small>{experience.stack}</small>
                </article>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className={styles.education}>
            <span className={styles.kicker}>Educação e idiomas</span>
            <p>
              Tecnólogo em Análise e Desenvolvimento de Sistemas pela Faculdade
              Impacta de Tecnologia. Português nativo, inglês para leitura
              técnica e espanhol intermediário.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
