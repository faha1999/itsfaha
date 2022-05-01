import React from 'react';
import Img1 from '../assets/images/portfolio1.jpg';
import Img2 from '../assets/images/portfolio2.jpg';
import Img3 from '../assets/images/portfolio3.jpg';
import Img4 from '../assets/images/portfolio4.jpg';
import Img5 from '../assets/images/portfolio5.png';
import Img6 from '../assets/images/portfolio6.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio">
        <article className="card">
          <div className="image">
            <img src={Img1} alt="Portfolio 1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="#" className="btn">
            GitHUb
          </a>
          <a href="#" className="btn btn-primary" target="_blank">
            Live demo
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
