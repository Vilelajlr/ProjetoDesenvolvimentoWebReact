



import React, { useState } from "react";

import styles from "./modules/Contact.module.css";

import Button from "../components/Button";
import Link from "../components/Link";

export default function Contact(){
  const maxLength = 2000;
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [texto, setTexto] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupStyle, setPopupStyle] = useState(''); // Novo estado para o estilo do pop-up

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const chacaracteres = maxLength - text.length;

  function limparCampos(e){
    e.preventDefault();
    setName('');
    setEmail('');
    setText('');
  }



   

  return (
    <section className={styles.section_contact} id="contact">
      <h1 className={styles.txt_contact}  data-aos="fade-right">Entre em contato</h1>
      <div className={styles.flex_contact}>
        <div>
        
          <form  data-aos="fade-up" className={styles.form_contact}>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite o seu nome..."
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Digite o seu email..."
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className={styles.textarea_container}>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={maxLength}
                placeholder="Digite o seu texto aqui..."
              />
              <p>{chacaracteres}/{maxLength}</p>
            </div>
            <div className={styles.buttons}>
                 <Link nome="Enviar" url="#" nomeStyle="btnContact" />
                <Link nome="Limpar" url="#" nomeStyle="btnContact" onClick={limparCampos} />
                
            </div>
          </form>
        </div>
        </div>
    
        
      {showPopup && (
        <div className={`${styles.popup} ${popupStyle}`}>
          {texto}
        </div>
      )}
    </section>
  );
}