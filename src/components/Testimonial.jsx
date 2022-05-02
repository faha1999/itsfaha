import React from 'react';
import testimonialData from './data/testimonialData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// css
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  const pagination = {
    clickable: true,
    loop: true,
  };

  return (
    <section id="testimonial">
      <h5>Review from my clients</h5>
      <h2>Testimonial</h2>

      <Swiper
        className="container testimonials"
        pagination={pagination}
        modules={[Pagination]}
        spaceBetween={40}
        sliderPerView={1}
      >
        {testimonialData.map(({ id, image, alt, name, review }) => {
          return (
            <SwiperSlide className="testimonial" key={id}>
              <div className="avatar">
                <img src={image} alt={alt} />
              </div>

              <div className="name">{name}</div>
              <small className="review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
