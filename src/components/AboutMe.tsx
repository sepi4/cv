import React from 'react';
import { Section } from './Section';

interface AboutMeProps {
  data: string[];
}

export const AboutMe: React.FC<AboutMeProps> = ({ data }) => {
  return (
    <Section title="About Me">
      {data.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </Section>
  );
};
