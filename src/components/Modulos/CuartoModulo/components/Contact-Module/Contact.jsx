import React from "react";
import "./stylesheets/Contact.css";
import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsTelegram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

export const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contacto</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus
        nostrum eius maiores minus sunt aspernatur, consequatur ab impedit magni
        corrupti reprehenderit id doloremque dolorem accusamus facilis? Esse
        quod neque perspiciatis.
      </p>

      <div className="contact-link-container">
        <span>
          <a
            className="contact-a"
            target="_blank"
            href="https://github.com/iFaaka"
          >
            <BsGithub />
            {"  "}Mi Github
          </a>
        </span>
        <span>
          <a
            className="contact-a"
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSfI1UOnfYW6QnqXjyWynxVQWoTbeKmgOj_A8EQYl04CMnFF8g/viewform"
          >
            <FcGoogle />
            {"  "}FeedBack sobre este portfolio
          </a>
        </span>
        <span>
          <a
            className="contact-a"
            target="_blank"
            href="https://t.me/AlvarezFac"
          >
            <BsTelegram />
            {"  "}Mi telegram
          </a>
        </span>
        <span>
          <a className="contact-a" target="_blank" href="#">
            <AiOutlineMail />
            {"  "}
          </a>
        </span>
      </div>
    </div>
  );
};
