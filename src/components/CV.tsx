import React from 'react';
import type { CVData } from '../types/cv.types';
import { SkillIcon } from './SkillIcon';
import styles from '../styles/CV.module.scss';

interface CVProps {
  data: CVData;
}

export const CV: React.FC<CVProps> = ({ data }) => {
  return (
    <div className={styles.globalStyles}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>{data.personalInfo.name}</h1>
          <p className={styles.title}>{data.personalInfo.jobTitle}</p>
          <p>{data.personalInfo.phone}</p>
          <p>{data.personalInfo.email}</p>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.content}>
            {data.aboutMe.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <div className={styles.content}>
            <div className={styles.skillsGrid}>
              {data.skills.map((category, index) => (
                <div key={index} className={styles.skillsCategory}>
                  <h3>{category.title}</h3>
                  <ul className={styles.list}>
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className={styles.listItem}>
                        <div style={{ width: '2rem', display: 'inline-block', textAlign: 'center' }}>
                          <SkillIcon skill={skill} />
                        </div>
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.content}>
            {data.experience.map((item, index) => (
              <div key={index} className={styles.experienceItem}>
                <h3>{item.company} / {item.position}</h3>
                <p>{item.period}, {item.location}</p>
                <ul className={styles.list}>
                  {item.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className={styles.listItem}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Links</h2>
          <div className={styles.content}>
            <ul className={styles.list}>
              {data.links.map((link, index) => (
                <li key={index} className={styles.listItem}>
                  {link.title}: <a className={styles.link} href={link.url} target="_blank">{link.url}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <div className={styles.content}>
            {data.education.map((item, index) => (
              <div key={index} className={styles.experienceItem}>
                <h3>{item.institution}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>References</h2>
          <div className={styles.content}>
            <ul className={styles.list}>
              {data.references.map((ref, index) => (
                <li key={index} className={styles.listItem}>
                  <strong>{ref.name}</strong> ({ref.jobTitle}), {ref.contact}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
