import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';
import { RiWhatsappLine } from 'react-icons/ri';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact">
        <div className="options">
          <article className="option">
            <MdOutlineEmail className="icon" />
            <h4>Email</h4>
            <h5>hello@itsfaha.me</h5>
            <a href="mailto:fahadficc@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="option">
            <BsGithub className="icon" />
            <h4>GitHub</h4>
            <h5>faha1999</h5>
            <a href="https://github.com/faha1999" target="_blank">
              View GitHub Profile
            </a>
          </article>

          <article className="option">
            <RiWhatsappLine className="icon" />
            <h4>WhatsApp</h4>
            <h5>+00364r52345</h5>
            <a href="https://whatsapp.com/" target="_blank">
              Want to talk
            </a>
          </article>
        </div>

        <form action="">
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea
            name="message"
            placeholder="Leave your message"
            rows="10"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
