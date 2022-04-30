import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience">
        <div className="frontEnd">
          <h3>Frontend Developer</h3>

          <div className="content">
            <article className="details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light">90%</small>
            </article>

            <article className="details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light">90%</small>
            </article>

            <article className="details">
              <BsPatchCheckFill />
              <h4>Bootstrap 5</h4>
              <small className="text-light">90%</small>
            </article>

            <article className="details">
              <BsPatchCheckFill />
              <h4>SASS</h4>
              <small className="text-light">90%</small>
            </article>

            <article className="details">
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className="text-light">90%</small>
            </article>

            <article className="details">
              <BsPatchCheckFill />
              <h4>REACT</h4>
              <small className="text-light">90%</small>
            </article>
          </div>
        </div>

        <div className="design">
          <h3>Design</h3>

          <div className="content">
            <article className="details">
              <BsPatchCheckFill />
              <h4>Photoshop</h4>
              <small className="text-light">90%</small>
            </article>

            <article className="details">
              <BsPatchCheckFill />
              <h4>Lightroom</h4>
              <small className="text-light">90%</small>
            </article>

            <article className="details">
              <BsPatchCheckFill />
              <h4>Illustrator</h4>
              <small className="text-light">90%</small>
            </article>

            <article className="details">
              <BsPatchCheckFill />
              <h4>Figma</h4>
              <small className="text-light">90%</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
