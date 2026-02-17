import React, { useState } from 'react';
import './App.css';
import torus1 from './images/torus1.jpg';
import ddr from './images/ddr.jpg';
import raymarch from './images/raymarching.jpg';
import plane from './images/plane.jpg';
import fans from './images/fans.jpg';
import shape from './images/shape.jpg';
import caterpillarFull from './images/caterpillar-full.png';
import caterpillarTwo from './images/caterpillar-2.png';
import meImage from './images/ele.jpeg';
import artstationIcon from './images/artstation.svg';
import linkedinIcon from './images/linkedin.svg';
import mailIcon from './images/mail.svg';

function App() {
  const [activeTab, setActiveTab] = useState('bio');

  const projects = [
    {
      name: 'TORUS KNOTS',
      description: `A knot is a closed, non-intersecting curve in space. Visualizing these curves
       on a torus confines the problem to a smaller region of 3D space. The T(p,q) torus knot wraps 
       q times around the inner circle and p times around the torus’s axis of symmetry.`,
      images: [torus1, plane],
      link: 'https://microjoules.github.io/knots/'
    },
    {
      name: 'DDR GAME',
      description: ` A simple Dance Dance Revolution game. Features a rotating disco ball, 
      and a humble crowd dancing in the background. `,
      images: [ddr, fans],
      link: 'https://microjoules.github.io/ddr/'
    },
    {
      name: 'RAY MARCHING',
      description: ` Implemented using Ray Marching and Signed Distance Function (SDF). Each shape is defined using an SDF and is 
      combined using their additive intersection. A smoothing min function is then employed to make the 
      intersection of shapes smooth. Raymarching is responsible for rendering the correct objects onto the screen.`,
      images: [raymarch, shape],
      link: 'https://microjoules.github.io/raymarching/'
    }
  ];

  const artProjects = [
    {
      name: 'CATERPILLAR BUS',
      description:
        "A 3D recreation based off of Denis Pakowacz's playful illustration for my first final project at Think Tank.",
      images: [caterpillarFull, caterpillarTwo],
      link: 'https://www.artstation.com/artwork/2BE00g'
    }
  ];

  const socialLinks = [
    { label: 'ArtStation', href: 'https://www.artstation.com/microjoules', iconSrc: artstationIcon },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/microjoules/', iconSrc: linkedinIcon },
    { label: 'Email', href: 'mailto:julialaurenrees@gmail.com', iconSrc: mailIcon }
  ];

  const renderProjectSection = (projectList) => (
    <section className="projects-section">
      {projectList.map((project, index) => (
        <div key={project.name}>
          <a
            href={project.link}
            className="project-link"
            title="Click for more"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-row">
              <div className="project-name">{project.name}</div>

              <div className="project-description">{project.description}</div>

              <div className="project-images">
                {project.images.map((image, idx) => (
                  <div key={idx} className="image-container">
                    <img src={image} alt={`${project.name} preview ${idx + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </a>

          {index < projectList.length - 1 && <hr className="section-divider" />}
        </div>
      ))}
    </section>
  );

  const renderEtcSection = () => (
    <section className="etc-section">
      <p>Coming soon...</p>
    </section>
  );

  return (
    <div className={`page ${activeTab === 'etc' ? 'etc-active' : ''}`}>
      <header className="header">
        <h1 className="name">JULIA REES</h1>
        <nav className="tabs" aria-label="Main sections">
          <button
            type="button"
            className={`tab-button ${activeTab === 'bio' ? 'active' : ''}`}
            onClick={() => setActiveTab('bio')}
          >
            HOME
          </button>
          <button
            type="button"
            className={`tab-button ${activeTab === 'art' ? 'active' : ''}`}
            onClick={() => setActiveTab('art')}
          >
            ART
          </button>
          <button
            type="button"
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            CODING
          </button>
          <button
            type="button"
            className={`tab-button ${activeTab === 'etc' ? 'active' : ''}`}
            onClick={() => setActiveTab('etc')}
          >
            ETC
          </button>
        </nav>
      </header>

      <hr className="section-divider" />

      {activeTab === 'bio' ? (
        <section className="bio-section">
          <div className="bio-layout">
            <div className="bio-copy">
              <p>
                Hi! Im Julia. Recent mathematics graduate, recent Think Tank student. I like learning new stuff, and Zootopia. Thanks for looking (: 
              </p>

            </div>

            <div className="bio-image-panel">
              <img src={meImage} alt="Julia Rees portrait" />
              <div className="social-icons" aria-label="Social links">
                {socialLinks.map((link) => {
                  const externalProps = link.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {};

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="social-icon-link"
                      aria-label={link.label}
                      {...externalProps}
                    >
                      <img
                        src={link.iconSrc}
                        className={`social-icon-image ${link.label === 'Email' ? 'social-icon-image-mail' : ''}`}
                        alt=""
                        aria-hidden="true"
                      />
                      <span className="sr-only">{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ) : activeTab === 'projects' ? (
        renderProjectSection(projects)
      ) : activeTab === 'etc' ? (
        renderEtcSection()
      ) : (
        renderProjectSection(artProjects)
      )}
    </div>
  );
}

export default App;
