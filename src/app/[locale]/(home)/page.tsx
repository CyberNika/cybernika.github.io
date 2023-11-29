'use client';

import { Hello, Travel, Skill, Sport, Photo } from './components';

import './page.css';

const IndexPage = () => {
  return (
    <div className="font-serif">
      <Hello />
      <Travel />
      <Skill />
      <Sport />
      <Photo />
    </div>
  );
};

export default IndexPage;
