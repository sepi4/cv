import styled from 'styled-components';

export const Container = styled.div`
  width: 794px; // A4 PDF width at 96dpi
  margin: 40px auto;
  background-color: white;
  padding: 40px 48px;
  
  @media print {
    margin: 0;
    padding: 0;
    width: 100%;
    box-shadow: none;
  }
`;

export const Header = styled.header`
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #333;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #eaeaea;
  }

  h1 {
    margin: 0;
    font-size: 2.2em;
  }

  p {
    margin: 2px 0;
  }
`;

export const Title = styled.p`
  color: #d9534f;
  font-size: 1.2em;
  margin: 6px 0 4px 0;
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 40px;
  margin-bottom: 30px;
  padding-bottom: 25px;
  border-bottom: 1px solid #eaeaea;
  align-items: start;
  page-break-inside: avoid;
  break-inside: avoid;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }

  @media print {
    padding-top: 48px;
    
    &:first-of-type {
      padding-top: 0;
    }
  }
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.4em;
  color: #333;
  position: sticky;
  top: 20px;
  padding-bottom: 5px;
  display: inline-block;
`;

export const Content = styled.div`
  margin: 0;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const SkillsCategory = styled.div`
  h3 {
    margin-bottom: 10px;
    color: #555;
    font-size: 90%;
    font-weight: 600;
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  font-size: 90%;
`;

export const ListItem = styled.li`
  margin-left: 2rem;
  
  i {
    width: 20px;
    margin-right: 5px;
    text-align: center;
    color: #555;
  }
`;

export const ExperienceItem = styled.div`
  margin-bottom: 25px;

  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    margin: 0 0 5px 0;
    color: #444;
  }

  p {
    margin: 0 0 10px 0;
    color: #666;
    font-style: italic;
  }
`;

export const StyledLink = styled.a`
  color: #0275d8;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const GlobalStyles = styled.div`
  font-family: Arial, sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;

  @media print {
    background-color: white;
  }
`;

export const Icon = styled.i`
  width: 20px;
  margin-right: 5px;
  text-align: center;
  vertical-align: middle;
`;

export const IconImage = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  vertical-align: middle;
`;
