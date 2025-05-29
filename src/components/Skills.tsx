import React from 'react';
import type { SkillCategory } from '../types/cv.types';
import { SkillIcon } from './SkillIcon';
import styles from '../styles/CV.module.scss';
import { Section } from './Section';

interface SkillsProps {
  data: SkillCategory[];
}

export const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <Section title="Skills">
      <div className={styles.skillsGrid}>
        {data.map((category, index) => (
          <div key={index} className={styles.skillsCategory}>
            <h3>{category.title}</h3>
            <ul className={styles.list}>
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className={styles.listItem}>
                  <div style={{ width: '2rem', display: 'inline-block', textAlign: 'center' }}>
                    <SkillIcon skill={skill} />
                  </div>
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
