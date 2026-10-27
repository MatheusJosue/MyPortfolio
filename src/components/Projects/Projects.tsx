"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCalendar,
  FiClock,
  FiExternalLink,
  FiGithub,
  FiGlobe,
  FiLock,
  FiPieChart,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import styles from "./Projects.module.css";

type Project = {
  id: number;
  title: string;
  description: string;
  type: string;
  technologies: string[];
  icon: IconType;
  demo?: string;
  repo?: string;
};

export const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Plataformas financeiras — Shock IT",
      description:
        "Esteira operacional, backoffice e plataforma de investimentos usados por 500+ usuários. Entreguei 100+ telas e módulos, reduzi o carregamento de 10s para 3s e implementei autenticação com Keycloak.",
      type: "Profissional",
      technologies: ["Next.js", "React", "TypeScript", "Keycloak", "C#", ".NET", "Laravel", "SQL Server", "Azure DevOps"],
      icon: FiBriefcase,
    },
    {
      id: 2,
      title: "Agenda Pet",
      description:
        "SaaS multi-tenant para pet shops: agenda de banho e tosa, clientes, pets e planos, cadastro por convite e isolamento entre empresas com Row Level Security.",
      type: "SaaS",
      technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Zod", "Vitest", "Playwright"],
      icon: FiCalendar,
      demo: "https://agendapetshop.vercel.app",
      repo: "https://github.com/MatheusJosue/agenda-pet-shop",
    },
    {
      id: 3,
      title: "Planilha Financeira",
      description:
        "Controle financeiro pessoal com dashboard, transações recorrentes automáticas, 5 gráficos de análise e exportação de relatórios em PDF.",
      type: "Web app",
      technologies: ["Next.js", "TypeScript", "Zustand", "Supabase", "Recharts", "jsPDF"],
      icon: FiPieChart,
      demo: "https://planilha-v2.vercel.app",
      repo: "https://github.com/MatheusJosue/planilha-financeira-v2",
    },
    {
      id: 4,
      title: "Bar Control",
      description:
        "PWA mobile-first para bares controlarem a validade dos preparos internos, com alertas por status, estoque e API própria em Express.",
      type: "PWA",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Supabase"],
      icon: FiClock,
      demo: "https://bar-control-ui.vercel.app",
      repo: "https://github.com/MatheusJosue/bar-control",
    },
    {
      id: 5,
      title: "GranPet",
      description:
        "Site institucional de pet shop com tabela de preços interativa por faixa de peso, botão de WhatsApp e SEO com sitemap e robots.",
      type: "Site institucional",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      icon: FiGlobe,
      demo: "https://gran-pet.vercel.app",
      repo: "https://github.com/MatheusJosue/granPet",
    },
    {
      id: 6,
      title: "Next.js + Keycloak Auth",
      description:
        "Exemplo de autenticação e autorização com Keycloak via NextAuth: login OIDC, rotas protegidas, sessão tipada e cliente HTTP com token.",
      type: "Autenticação",
      technologies: ["Next.js", "TypeScript", "NextAuth", "Keycloak", "Axios"],
      icon: FiLock,
      repo: "https://github.com/MatheusJosue/nextjs-keycloak-auth",
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
              De sistemas financeiros a SaaS para pequenos negócios.
            </motion.h2>
            <motion.p variants={itemVariants} className={styles.subtitle}>
              Projetos profissionais e pessoais em que atuei no front-end e
              back-end, conectando experiência do usuário, regras de negócio,
              autenticação e dados. Os pessoais têm demo e código abertos.
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
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                          Ver demo
                          <FiExternalLink size={18} />
                        </a>
                      )}
                      {project.repo && (
                        <a href={project.repo} target="_blank" rel="noopener noreferrer" className={styles.link}>
                          Código
                          <FiGithub size={18} />
                        </a>
                      )}
                      {!project.demo && !project.repo && (
                        <Link href="#contato" className={styles.link}>
                          Conversar sobre esse projeto
                          <FiArrowUpRight size={18} />
                        </Link>
                      )}
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

