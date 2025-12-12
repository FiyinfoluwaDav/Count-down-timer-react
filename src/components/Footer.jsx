import React from "react";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import XIcon from "./icons/XIcon";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <a
          className="social-link"
          href="https://github.com/FiyinfoluwaDav"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <GithubIcon className="social-icon" />
        </a>
        <a
          className="social-link"
          href="https://linkedin.com/in/fiyinfoluwa-osokoya/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <LinkedinIcon className="social-icon" />
        </a>
        <a
          className="social-link"
          href="https://x.com/OsokoyaF"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
          title="X"
        >
          <XIcon className="social-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
