import React from 'react';
import type { CVData } from '../types/cv.types';
import { SkillIcon } from './SkillIcon';
import {
  Container,
  Header,
  Title,
  Section,
  SectionTitle,
  Content,
  SkillsGrid,
  SkillsCategory,
  List,
  ListItem,
  ExperienceItem,
  StyledLink,
  GlobalStyles,
} from '../styles/styled-components';

interface CVProps {
  data: CVData;
}

export const CV: React.FC<CVProps> = ({ data }) => {
  return (
    <GlobalStyles>
      <Container>
        <Header>
          <h1>{data.personalInfo.name}</h1>
          <Title>{data.personalInfo.jobTitle}</Title>
          <p>{data.personalInfo.phone}</p>
          <p>{data.personalInfo.email}</p>
        </Header>

        <Section>
          <SectionTitle>About Me</SectionTitle>
          <Content>
            {data.aboutMe.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </Content>
        </Section>

        <Section>
          <SectionTitle>Skills</SectionTitle>
          <Content>
            <SkillsGrid>
              {data.skills.map((category, index) => (
                <SkillsCategory key={index}>
                  <h3>{category.title}</h3>
                  <List>
                    {category.skills.map((skill, skillIndex) => (
                      <ListItem key={skillIndex}>
                        <SkillIcon skill={skill} />
                        {skill.name}
                      </ListItem>
                    ))}
                  </List>
                </SkillsCategory>
              ))}
            </SkillsGrid>
          </Content>
        </Section>

        <Section>
          <SectionTitle>Experience</SectionTitle>
          <Content>
            {data.experience.map((item, index) => (
              <ExperienceItem key={index}>
                <h3>{item.company} / {item.position}</h3>
                <p>{item.period}, {item.location}</p>
                <List>
                  {item.responsibilities.map((resp, respIndex) => (
                    <ListItem key={respIndex}>{resp}</ListItem>
                  ))}
                </List>
              </ExperienceItem>
            ))}
          </Content>
        </Section>

        <Section>
          <SectionTitle>Links</SectionTitle>
          <Content>
            <List>
              {data.links.map((link, index) => (
                <ListItem key={index}>
                  {link.title}: <StyledLink href={link.url} target="_blank">{link.url}</StyledLink>
                </ListItem>
              ))}
            </List>
          </Content>
        </Section>

        <Section>
          <SectionTitle>Education</SectionTitle>
          <Content>
            {data.education.map((item, index) => (
              <ExperienceItem key={index}>
                <h3>{item.institution}</h3>
                <p>{item.description}</p>
              </ExperienceItem>
            ))}
          </Content>
        </Section>

        <Section>
          <SectionTitle>References</SectionTitle>
          <Content>
            <List>
              {data.references.map((ref, index) => (
                <ListItem key={index}>
                  <strong>{ref.name}</strong> ({ref.title}), {ref.contact}
                </ListItem>
              ))}
            </List>
          </Content>
        </Section>
      </Container>
    </GlobalStyles>
  );
};
