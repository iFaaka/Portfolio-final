import React from "react";
import "./stylesheets/Contact.css";
import { FcGoogle } from "react-icons/fc";
import { BsGithub, BsTelegram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contacto</h1>

      <p>
        Espero que mis proyectos te hayan gustado, si queres saber en que estoy
        trabajando podes buscarme en{" "}
        <a
          target="_blank"
          className="contact-a"
          href="https://www.linkedin.com/in/facundon-alvarez/"
        >
          <AiFillLinkedin className="logo" /> LinkedIn
        </a>{" "}
        o{" "}
        <a
          target="_blank"
          className="contact-a"
          href="https://twitter.com/iFaakaDev"
        >
          <FaTwitterSquare className="logo" /> Twitter
        </a>
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
          <a className="contact-a" target="_blank" href="#">
            <AiOutlineMail />
            {"  "}Alvarezfacundo321@gmail.com
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
      </div>
    </div>
  );
};
