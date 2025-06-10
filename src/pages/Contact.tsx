import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contact.css';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formMessage, setFormMessage] = useState('');
  const [messageColor, setMessageColor] = useState('black');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {

    console.log('Service ID:', import.meta.env.VITE_REACT_APP_SERVICE_ID);
    console.log('Template ID:', import.meta.env.VITE_REACT_APP_TEMPLATE_ID);
    console.log('Public Key:', import.meta.env.VITE_REACT_APP_PUBLIC_KEY);
    console.log('Form data:', new FormData(formRef.current));

      emailjs.sendForm(
        import.meta.env.VITE_REACT_APP_SERVICE_ID!,
        import.meta.env.VITE_REACT_APP_TEMPLATE_ID!,
        formRef.current,
        import.meta.env.VITE_REACT_APP_PUBLIC_KEY!
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setFormMessage('Message sent successfully!');
          setMessageColor('green');
          formRef.current?.reset();
        }, (error) => {
          console.log('FAILED...', error);
          setFormMessage('Failed to send the message. Please try again.');
          setMessageColor('red');
        });
    }
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p className='p-contact'>Please send your message below:</p>

      <div className="contact-form">
        <form ref={formRef} onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="from_name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="from_email" required />

          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={5} required></textarea>

          <button type="submit">Send Message</button>
        </form>
        <div style={{ marginTop: '10px', fontWeight: 'bold', color: messageColor }}>
          {formMessage}
        </div>
      </div>
    </div>
  );
};

export default Contact;
