import React from 'react';
import type { Reference as ReferenceType } from '../types/cv.types';
import styles from '../styles/CV.module.scss';
import { Section } from './Section';

interface ReferencesProps {
  data: ReferenceType[];
}

export const References: React.FC<ReferencesProps> = ({ data }) => {
  return (
    <Section title="References">
      <ul className={styles.list}>
        {data.map((ref, index) => (
          <li key={index} className={styles.listItem}>
            <strong>{ref.name}</strong> ({ref.jobTitle})
          </li>
        ))}
      </ul>
      <p style={{ fontStyle: 'italic', fontSize: '0.8em' }}>
        Contact details available upon request.
      </p>
    </Section>
  );
};
