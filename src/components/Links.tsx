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

            {/* Web version: show title then image if available, otherwise just title */}
            <a className={`${styles.link} ${styles.webVersion}`} href={link.url} target="_blank" rel="noopener noreferrer">
              <span className={styles.webLinkTitle}>{link.title}</span>
              {link.image && (
                <img src={link.image} alt={`${link.title} icon`} className={styles.linkIconImage} />
              )}
            </a>

            {/* Print version: show title and URL */}
            <span className={styles.printOnly} style={{ marginLeft: '0.5rem' }}>
              <a className={styles.link} href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
            </span>

          </li>
        ))}
      </ul>
    </Section>
  );
};
