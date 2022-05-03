import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import contactData from './data/contactData';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact">
        <div className="options">
          {contactData.map(({ id, title, address, href, hrefText }) => {
            return (
              <article key={id} className="option">
                <MdOutlineEmail className="icon" />
                <h4>{title}</h4>
                <h5>{address}</h5>
                <a href={href} target="_blank">
                  {hrefText}
                </a>
              </article>
            );
          })}
        </div>

        <form action=""></form>
      </div>
    </section>
  );
};

export default Contact;
