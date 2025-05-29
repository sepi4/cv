import React from 'react';
import type { CVData } from '../types/cv.types';
import { PersonalInfo } from './PersonalInfo';
import { AboutMe } from './AboutMe';
import { Skills } from './Skills';
import { Experience } from './Experience';
import { Links } from './Links';
import { Education } from './Education';
import { References } from './References';
import styles from '../styles/CV.module.scss';

interface CVProps {
  data: CVData;
}

export const CV: React.FC<CVProps> = ({ data }) => {
  return (
    <div className={styles.globalStyles}>
      <div className={styles.container}>
        <PersonalInfo data={data.personalInfo} />

        <AboutMe data={data.aboutMe} />
        <Skills data={data.skills} />
        <Experience data={data.experience} />
        <Links data={data.links} />
        <Education data={data.education} />
        <References data={data.references} />
      </div>
    </div>
  );
};
