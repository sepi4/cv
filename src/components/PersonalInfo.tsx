import React from 'react';
import type { PersonalInfo as PersonalInfoType } from '../types/cv.types';
import styles from '../styles/CV.module.scss';

interface PersonalInfoProps {
  data: PersonalInfoType;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ data }) => {
  return (
    <header className={styles.header}>
      <h1>{data.name}</h1>
      <p className={styles.title}>{data.jobTitle}</p>
      <p>{data.phone}</p>
      <p>{data.email}</p>
    </header>
  );
};
