import React from 'react';
import IconFolder from '../Icons/folder';
import IconGitHub from '../Icons/github';
import IconExternal from '../Icons/external';

const ProjectItem = () => {
  return (
    <div className="project-item">
      <header>
        <div className="project-top">
          <div className="folder text-grren">
            <IconFolder />
          </div>
          <div className="links">
            <IconGitHub />
            <IconExternal />
          </div>
        </div>
        <div className="project-title">
          <h2>Testnomial</h2>
        </div>
        <div className="project-desc text-[17px] text-light-slate">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio repellat atque ratione assumenda voluptatibus eveniet qui necessitatibus
            delectus veniam, laborum soluta reiciendis sed explicabo nisi, quisquam, at fugiat eaque odit!
          </p>
        </div>
      </header>
      <footer>
        <ul className="project-tech-list">
          <li>react</li>
          <li>nodejs</li>
        </ul>
      </footer>
    </div>
  );
};

export default ProjectItem;
