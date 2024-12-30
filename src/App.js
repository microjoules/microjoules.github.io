import React from 'react';
import './App.css';
import torus1 from './images/torus1.jpg'; // Import the image
import ddr from './images/ddr.jpg'; // Import the image
import raymarch from './images/raymarching.jpg'; // Import the image
import plane from './images/plane.jpg';
import fans from './images/fans.jpg';
import shape from './images/shape.jpg';

function App() {
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

  return (
    <div style={{ padding: '20px' }}>
      {/* Header */}
      <div className="App">
        <header className="header">
          <h1 className="name">   &nbsp;JULIA &nbsp; REES</h1>
          <h2 className="project-info">PROJECTS</h2>
        </header>
      </div>



      {/* Horizontal Line */}
      <hr style={{
        border: 'none',
        borderTop: '2px solid green',
        width: '99%',
        margin: '0 auto 20px'
      }} />

      {/* Project Rows */}
      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <a href={project.link} style={{ textDecoration: 'none' }}>
            {/* Project Row with flexbox */}
            <div className="project-row" style={{
              display: 'flex',       // Ensures elements are in a row
              alignItems: 'flex-start',
              gap: '60px',
              marginTop: '10px',
              flexWrap: 'nowrap', // Prevent wrapping; force a single row
            }}>
              {/* Project Name (20% width) */}
              <div style={{
                width: '20%', // 20% width for project name
                fontSize: '2rem',
                fontFamily: 'Arial, sans-serif',
                fontWeight: '300',
                wordWrap: 'break-word',  // Ensure text wraps if it's long
              }}>
                {project.name}
              </div>

              {/* Project Description (20% width) */}
              <div style={{
                width: '20%',  // 20% width for project description
                fontSize: '1rem',
                fontFamily: 'Arial, sans-serif',
                fontWeight: '300',
                wordWrap: 'break-word',
                textAlign: 'justify',
                whiteSpace: 'normal',
              }}>
                {project.description}
              </div>

              {/* Project Images (Remaining space for images) */}
              <div className="project-images" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '30px',
                width: '60%',  // The images take the remaining space
                justifyContent: 'flex-start',
              }}>
                {/* {project.images.map((image, idx) => (
                  <img key={idx} src={image} alt={`Project ${index + 1}`} style={{
                    width: '300px',
                    height: 'auto',
                    //borderRadius: '5px',
                    objectFit: 'cover',  // Makes sure the images cover their space properly
                    marginBottom: '10px',
                  }} />
                  
                ))} */}
                {project.images.map((image, idx) => (
                  <div key={idx} className="image-container">
                    <img src={image} alt={`Project ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Horizontal Line */}
            {index < projects.length && (
              <hr style={{
                border: 'none',
                borderTop: '2px solid green',
                width: '100%',
                margin: '20px auto'
              }} />
            )}
          </a>
        </div>
      ))}
    </div>
  );
}

export default App;




