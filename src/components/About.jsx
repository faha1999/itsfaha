import React from 'react';
import MyPicture from '../assets/images/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about">
        <div className="about_me">
          <div className="about_me-img">
            <img src={MyPicture} alt="This is faha" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="card">
              <FaAward className="icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="card">
              <FiUsers className="icon" />
              <h5>Clients</h5>
              <small>200+ worldwide</small>
            </article>

            <article className="card">
              <VscFolderLibrary className="icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
            placeat, dicta optio sunt quod minus laudantium repudiandae nesciunt
            illo itaque. Cumque adipisci quos iure quo commodi repellat
            voluptate. Atque, voluptatibus.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
