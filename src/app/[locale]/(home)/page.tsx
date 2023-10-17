'use client';

import { Hello, Travel, Skill, Photo } from './components';

import './page.css';

const IndexPage = () => {
  return (
    <div className="font-serif">
      <Hello />
      <Travel />
      <Skill />
      <Photo />
    </div>
  );
};

export default IndexPage;
