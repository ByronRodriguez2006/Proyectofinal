import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../Style/FormContactos.css';

export const FormContactos = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_auzi7vd', 'template_8wp4g3h', form.current, {
        publicKey: 'EUG0qGMJe5zeYmGAW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="form-contact">
      <form ref={form} onSubmit={sendEmail}>
        <label>Nombre</label>
        <input required type="text" name="user_name" className="form-input" placeholder="Ingresa tu nombre" />
        <label>Correo</label>
        <input required type="email" name="user_email" className="form-input" placeholder="Ingresa tu correo" />
        <label>Mensaje</label>
        <textarea name="message" className="form-textarea" placeholder="Redacta tu mensaje" />
        <input required type="submit" value="Send" className="form-submit" />
      </form>
    </div>
  );
};

export default FormContactos;
