import React from 'react';
import type { Link as LinkType } from '../types/cv.types';
import styles from '../styles/CV.module.scss';
import { Section } from './Section';

interface LinksProps {
  data: LinkType[];
}

export const Links: React.FC<LinksProps> = ({ data }) => {
  return (
    <Section title="Links">
      <ul className={styles.list}>
        {data.map((link, index) => (
          <li key={index} className={styles.listItem}>
            {link.title}: <a className={styles.link} href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
          </li>
        ))}
      </ul>
    </Section>
  );
};
