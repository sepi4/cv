import React from 'react';
import type { Skill } from '../types/cv.types';
import styles from '../styles/SkillIcon.module.scss';

export const SkillIcon: React.FC<{ skill: Skill }> = ({ skill }) => {
  if (skill.isDevicon) {
    return <i className={`${styles.icon} ${skill.icon}`} />;
  }
  if (skill.isImage) {
    return <img className={styles.iconImage} src={skill.icon} alt={skill.name} />;
  }
  return null;
};
