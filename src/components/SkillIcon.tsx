import React from 'react';
import type { Skill } from '../types/cv.types';
import { Icon, IconImage } from '../styles/styled-components';

export const SkillIcon: React.FC<{ skill: Skill }> = ({ skill }) => {
  if (skill.isDevicon) {
    return <Icon className={skill.icon} />;
  }
  if (skill.isFlag) {
    return <Icon className={`fi ${skill.icon} flag`} />;
  }
  if (skill.isImage) {
    return <IconImage src={skill.icon} alt={skill.name} />;
  }
  return null;
};
