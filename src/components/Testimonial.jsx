import React from 'react';
import testimonialData from './data/testimonialData';

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from my clients</h5>
      <h2>Testimonial</h2>

      <div className="testimonials">
        <article className="testimonial">
          <div className="avatar">
            <img src={image} alt={alt} />
            <div className="name">{name}</div>
            <small className="review">{review}</small>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Testimonial;
