import React from 'react';
import type { ExperienceItem } from '../types/cv.types';
import styles from '../styles/CV.module.scss';
import { Section } from './Section';

interface ExperienceProps {
  data: ExperienceItem[];
}

export const Experience: React.FC<ExperienceProps> = ({ data }) => {
  return (
    <Section title="Experience">
      {data.map((item, index) => (
        <div key={index} className={styles.experienceItem}>
          <h3>{item.company} / {item.position}</h3>
          <p>{item.period}, {item.location}</p>
          <ul className={styles.list}>
            {item.responsibilities.map((resp, respIndex) => (
              <li key={respIndex} className={styles.listItem}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
    </Section>
  );
};
