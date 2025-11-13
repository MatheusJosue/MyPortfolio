"use client";

import { motion } from "framer-motion";
import { FaReact, FaNode, FaDocker, FaGit } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiJest } from "react-icons/si";
import styles from "./Skills.module.css";

export const Skills = () => {
  const skills = [
    {
      category: "Frontend Principal",
      items: [
        { name: "React", icon: FaReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Angular", icon: SiTypescript },
      ],
    },
    {
      category: "Ferramentas & Backend",
      items: [
        { name: "Node.js", icon: FaNode },
        { name: "Git", icon: FaGit },
        { name: "Docker", icon: FaDocker },
        { name: "PHP/Laravel", icon: SiJest },
      ],
    },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
            <motion.h2 variants={itemVariants} className={styles.title}>
              Tecnologias & Competências
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className={styles.titleUnderline}
            />
          </div>

          <motion.p variants={itemVariants} className={styles.subtitle}>
            Stack moderno e direcionado para performance, escalabilidade e
            qualidade
          </motion.p>

          <motion.div
            variants={containerVariants}
            className={styles.categories}
          >
            {skills.map((category, categoryIdx) => (
              <motion.div
                key={categoryIdx}
                variants={itemVariants}
                className={styles.category}
              >
                <h3 className={styles.categoryTitle}>{category.category}</h3>

                <motion.div
                  className={styles.grid}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {category.items.map((skill, idx) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={idx}
                        variants={itemVariants}
                        className={styles.skillCard}
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className={styles.iconWrapper}>
                          <Icon className={styles.icon} />
                        </div>
                        <p className={styles.skillName}>{skill.name}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className={styles.additional}>
            <h4 className={styles.additionalTitle}>Competências Adicionais</h4>
            <ul className={styles.list}>
              <li>React Hooks e Context API</li>
              <li>HTML5, CSS, JavaScript ES6+</li>
              <li>REST APIs com OAuth e JWT</li>
              <li>MySQL, SQL Server e bancos de dados</li>
              <li>Metodologias Ágeis (Scrum)</li>
              <li>Figma e Design System</li>
              <li>Azure DevOps e CI/CD</li>
              <li>Tailwind CSS, Bootstrap e responsividade</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
