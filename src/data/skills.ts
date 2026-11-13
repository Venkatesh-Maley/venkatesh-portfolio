import javascriptLogo from 'devicon/icons/javascript/javascript-original.svg';
import typescriptLogo from 'devicon/icons/typescript/typescript-original.svg';
import reactLogo from 'devicon/icons/react/react-original.svg';
import angularLogo from 'devicon/icons/angular/angular-original.svg';
import htmlLogo from 'devicon/icons/html5/html5-original.svg';
import cssLogo from 'devicon/icons/css3/css3-original.svg';
import bootstrapLogo from 'devicon/icons/bootstrap/bootstrap-original.svg';
import nodeLogo from 'devicon/icons/nodejs/nodejs-original.svg';
import expressLogo from 'devicon/icons/express/express-original.svg';
import swaggerLogo from 'devicon/icons/swagger/swagger-original.svg';
import mongoLogo from 'devicon/icons/mongodb/mongodb-original.svg';
import mysqlLogo from 'devicon/icons/mysql/mysql-original.svg';
import redisLogo from 'devicon/icons/redis/redis-original.svg';
import awsLogo from 'devicon/icons/amazonwebservices/amazonwebservices-original.svg';
import dockerLogo from 'devicon/icons/docker/docker-original.svg';
import gitLogo from 'devicon/icons/git/git-original.svg';
import githubLogo from 'devicon/icons/github/github-original.svg';
import gitlabLogo from 'devicon/icons/gitlab/gitlab-original.svg';
import postmanLogo from 'devicon/icons/postman/postman-original.svg';
import vscodeLogo from 'devicon/icons/vscode/vscode-original.svg';
import socketLogo from 'devicon/icons/socketio/socketio-original.svg';
import openaiLogo from '@lobehub/icons-static-svg/icons/openai.svg';
import langchainLogo from '@lobehub/icons-static-svg/icons/langchain.svg';
import type { SkillGroup } from '../types/skills';

export const skills: SkillGroup[] = [
  {
    title: 'Languages',
    technologies: [
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Frontend',
    technologies: [
      { name: 'React', logo: reactLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    technologies: [
      { name: 'Node.js', logo: nodeLogo },
      { name: 'Express.js', logo: expressLogo },
      { name: 'LoopBack', logo: '/images/technologies/loopback.svg' },
      { name: 'Swagger / OpenAPI', logo: swaggerLogo },
      { name: 'Socket.IO', logo: socketLogo },
    ],
  },
  {
    title: 'Databases',
    technologies: [
      { name: 'MongoDB', logo: mongoLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Redis', logo: redisLogo },
    ],
  },
  {
    title: 'Cloud & infrastructure',
    technologies: [
      { name: 'AWS', logo: awsLogo, description: 'EC2 · S3 · VPC · ALB · IAM · ACM · CloudWatch' },
      { name: 'Docker', logo: dockerLogo },
    ],
  },
  {
    title: 'Developer tools',
    technologies: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'GitLab', logo: gitlabLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
  {
    title: 'AI & retrieval',
    technologies: [
      { name: 'OpenAI API', logo: openaiLogo },
      { name: 'LangChain', logo: langchainLogo },
      { name: 'Qdrant', logo: '/images/technologies/qdrant.svg' },
    ],
  },
];
