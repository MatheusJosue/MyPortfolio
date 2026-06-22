"use client";

import { motion } from "framer-motion";
import { FaDocker, FaGit, FaNode, FaReact } from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import {
  SiAngular,
  SiDotnet,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import styles from "./Skills.module.css";

export const Skills = () => {
  const skills = [
    {
      category: "Front-end",
      items: [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Angular", icon: SiAngular },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Tailwind CSS", icon: SiTailwindcss },
      ],
    },
    {
      category: "Back-end, dados e DevOps",
      items: [
        { name: ".NET", icon: SiDotnet },
        { name: "Laravel", icon: SiLaravel },
        { name: "Node.js", icon: FaNode },
        { name: "SQL Server", icon: FiDatabase },
        { name: "MySQL", icon: SiMysql },
        { name: "MongoDB", icon: SiMongodb },
        { name: "Docker", icon: FaDocker },
        { name: "Git", icon: FaGit },
      ],
    },
  ];

  const practices = [
    "APIs REST com Swagger e Postman",
    "Autenticação com Keycloak, JWT e OAuth",
    "Azure DevOps, GitLab CI/CD e Docker",
    "Sistemas de backoffice e esteiras operacionais",
    "Aplicações web e mobile com Ionic Framework",
    "Scrum, Kanban e contato direto com clientes",
    "Figma, responsividade e refinamento visual",
    "Sustentação e evolução de sistemas críticos",
  ];

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
    hidden: { opacity: 0, scale: 0.92, y: 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className={styles.skills} id="skills">
      <div className={styles.container}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className={styles.header}>
            <motion.span variants={itemVariants} className={styles.kicker}>
              Competências técnicas
            </motion.span>
            <motion.h2 variants={itemVariants} className={styles.title}>
              Stack full stack com front-end como ponto forte.
            </motion.h2>
            <motion.p variants={itemVariants} className={styles.subtitle}>
              Experiência prática em interfaces modernas, back-ends integrados,
              autenticação, bancos relacionais e pipelines de entrega.
            </motion.p>
          </div>

          <motion.div variants={containerVariants} className={styles.categories}>
            {skills.map((category) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className={styles.category}
              >
                <h3 className={styles.categoryTitle}>{category.category}</h3>

                <div className={styles.grid}>
                  {category.items.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className={styles.skillCard}
                        whileHover={{ scale: 1.04, y: -6 }}
                      >
                        <div className={styles.iconWrapper}>
                          <Icon className={styles.icon} />
                        </div>
                        <p className={styles.skillName}>{skill.name}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className={styles.additional}>
            <h4 className={styles.additionalTitle}>Ferramentas, métodos e contextos</h4>
            <ul className={styles.list}>
              {practices.map((practice) => (
                <li key={practice}>{practice}</li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
