import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="footer-container">
      <p>You can follow me on social media</p>
      <a
        className="facebook"
        href="https://www.facebook.com/tudorasebastian.barber"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a className="insta" href="https://www.instagram.com/sebastiantudora/">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a className="tweet" href="https://twitter.com/SebaTdr96">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a className="git" href="https://github.com/tudrsebastian">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}
