import React from 'react';
import testimonialData from './data/testimonialData';

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from my clients</h5>
      <h2>Testimonial</h2>

      <div className="container testimonials">
        {testimonialData.map(({ id, image, alt, name, review }) => {
          return (
            <article className="testimonial" key={id}>
              <div className="avatar">
                <img src={image} alt={alt} />
              </div>

              <div className="name">{name}</div>
              <small className="review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
