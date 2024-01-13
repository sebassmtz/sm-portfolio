"use client";

import React, { useRef, useState, RefObject } from "react";
import emailjs from "@emailjs/browser";
import styles from "./style.module.css";
import ReCAPTCHA from "react-google-recaptcha";

type Props = {
  name: string;
  placeholderName: string;
  email: string;
  placeholderEmail: string;
  message: string;
  placeholderMessage: string;
  buttonSend: string;
  messageError: string;
  sendSucess: string;
}
function Form({name, placeholderName, email, placeholderEmail, message, placeholderMessage, sendSucess, messageError, buttonSend}: Props) {
  const ref = useRef<HTMLFormElement>(null);
  const captcha = useRef<ReCAPTCHA>(null);
  const [sucess, setSucess] = useState(false);
  const [captchaValido, setCaptchaValido] = useState(true);

  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_KEY;
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!serviceId || !publicKey || !templateId) {
      console.error(
        "Las variables de entorno no están configuradas correctamente."
      );
      return;
    }

    if (!captcha.current || !ref.current) {
      console.error("Referencia al formulario no encontrada.");
      return;
    }

    if (captcha.current.getValue()) {
      console.log("Mensaje Enviado");
      try {
        const result = await emailjs.sendForm(
          serviceId,
          templateId,
          ref.current,
          publicKey
        );
        console.log(result.text);
        setCaptchaValido(true);
        setSucess(true);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("Soy robot, Acepta el Captcha");
      setCaptchaValido(false);
    }
  };

  function onChange() {
    if (!captcha.current) {
      console.error("Referencia al formulario no encontrada.");
      return;
    }

    if (captcha.current.getValue()) {
      setCaptchaValido(true);
      console.log("No soy robot");
    }
  }

  return (
    <form
      ref={ref as RefObject<HTMLFormElement>}
      onSubmit={handleSubmit}
      className={styles.form}
    >
      <label className={styles.label}>{name}</label>
      <input
        type="text"
        name="name"
        placeholder={placeholderName}
        required
        className={styles.input}
      />
      <label className={styles.label}>{email}</label>
      <input
        type="email"
        name="email"
        placeholder={placeholderEmail}
        required
        className={styles.input}
      />
      <label className={styles.label}>{message}</label>
      <textarea
        name="message"
        placeholder={placeholderMessage}
        rows={8}
        required
        className={styles.textarea}
      />
      <ReCAPTCHA
        ref={captcha as RefObject<ReCAPTCHA>}
        className={styles.recaptcha}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY || ""}
        onChange={onChange}
      />
      {captchaValido === false && (
        <div className={styles.error}>{messageError}</div>
      )}
      <button
        type="submit"
        className={styles.button}
      >
        {buttonSend}
      </button>
      {sucess && <p className={styles.sucess}>{sendSucess}</p>}
    </form>
  );
}
export default Form;
