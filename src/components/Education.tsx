import React from 'react';
import type { EducationItem } from '../types/cv.types';
import styles from '../styles/CV.module.scss';
import { Section } from './Section';

interface EducationProps {
  data: EducationItem[];
}

export const Education: React.FC<EducationProps> = ({ data }) => {
  return (
    <Section title="Education">
      {data.map((item, index) => (
        <div key={index} className={styles.experienceItem}>
          <h3>{item.institution}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </Section>
  );
};
