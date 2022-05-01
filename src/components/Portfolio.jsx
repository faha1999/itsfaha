import React from 'react';
import portfolioData from './data/portfolioData';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio">
        {portfolioData.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div className="view-btn">
                <a href={github} className="btn">
                  GitHUb
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
        {/* <article className="card">
          <div className="image">
            <img src={Img1} alt="Portfolio 1" />
          </div>
          <h3>This is a portfolio item title</h3>

          <div className="view-btn">
            <a href="#" className="btn">
              GitHUb
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live demo
            </a>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
