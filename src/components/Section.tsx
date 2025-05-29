import React from 'react';
import styles from '../styles/CV.module.scss';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, className }) => {
  return (
    <section className={`${styles.section} ${className || ''}`.trim()}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
};
