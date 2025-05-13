import type { CVData } from '../types/cv.types';

export const cvData: CVData = {
  personalInfo: {
    name: 'Sergei Polishsuk',
    jobTitle: 'Software Developer',
    phone: '046-6316329',
    email: 'polser1@gmail.com',
  },
  aboutMe: [
    "I'm a software developer with over 3 years of experience in frontend and test automation. My strongest skills are in JavaScript, TypeScript, and React, and I currently work daily with Playwright, Angular, Git, and related tools.",
    "I enjoy solving problems and creating user-friendly solutions. I'm especially motivated by learning new technologies and developing my skills. At the moment, I'm looking for new challenges where I can grow as a developer and contribute to meaningful projects.",
    "In my team I'm known as a positive and easy-going person. I communicate clearly, help others, and enjoy working together toward shared goals. I believe that curiosity and kindness make every team stronger.",
  ],
  skills: [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored', isDevicon: true },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored', isDevicon: true },
        { name: 'Python', icon: 'devicon-python-plain colored', isDevicon: true },
        { name: 'C#', icon: 'devicon-csharp-plain colored', isDevicon: true },
        { name: 'Java', icon: 'devicon-java-plain colored', isDevicon: true },
      ],
    },
    {
      title: 'Technologies',
      skills: [
        { name: 'React', icon: 'devicon-react-original colored', isDevicon: true },
        { name: 'Playwright', icon: 'playwright-logo.svg', isImage: true },
        { name: 'Angular', icon: 'devicon-angularjs-plain colored', isDevicon: true },
        { name: 'NodeJS', icon: 'devicon-nodejs-plain colored', isDevicon: true },
      ],
    },
    {
      title: 'Tools',
      skills: [
        { name: 'Git', icon: 'devicon-git-plain colored', isDevicon: true },
        { name: 'GitHub', icon: 'devicon-github-original colored', isDevicon: true },
        { name: 'Linux', icon: 'devicon-linux-plain colored', isDevicon: true },
        { name: 'Azure', icon: 'devicon-azure-plain colored', isDevicon: true },
      ],
    },
    {
      title: 'Languages',
      skills: [
        { name: 'Finnish - Native', icon: 'fi-fi', isFlag: true },
        { name: 'Russian - Native', icon: 'fi-ru', isFlag: true },
        { name: 'English - Very Good', icon: 'fi-gb', isFlag: true },
      ],
    },
  ],
  experience: [
    {
      company: 'EG Enerkey',
      position: 'Software Developer',
      period: 'April 2022 - Present',
      location: 'Jyväskylä',
      responsibilities: [
        'Responsible for Playwright E2E automation testing',
        'Angular frontend development',
      ],
    },
    {
      company: 'Firstbeat',
      position: 'Trainee',
      period: 'October 2021 - April 2022',
      location: 'Jyväskylä',
      responsibilities: [
        'React frontend development',
      ],
    },
  ],
  education: [
    {
      institution: 'University of Jyväskylä / Computer Science',
      description: 'I have completed computer science studies at the University of Jyväskylä, but most of my skills have been acquired through self-study and work experience. I am continuously interested in learning new things and developing professionally.',
    },
  ],
  links: [
    {
      title: 'Github profile',
      url: 'https://github.com/sepi4',
    },
    {
      title: 'MyCelo (public) React project',
      url: 'https://github.com/sepi4/myCeloJs',
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sergei-polishsuk-89b8a526b/',
    },
  ],
  references: [
    {
      name: 'Satu Eskelinen',
      jobTitle: 'Product Owner at Enerkey',
      contact: 'tel: 044-5774477, email: sates@eg.fi',
    },
    {
      name: 'Juuso Valkeejärvi',
      jobTitle: 'Lead Developer at Jamix Oy',
      contact: 'tel: 040-7089463',
    },
  ],
};
