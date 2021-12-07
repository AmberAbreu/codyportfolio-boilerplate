import React, { useState } from "react";
import * as style from "../style/index.module.css";
import { StaticImage } from "gatsby-plugin-image";
import TechStack from "../components/TechStack";

export default function IndexPage() {
  return (
    <div>
      <nav>
        <div>
          <p>Cody the Pug</p>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
        </ul>
      </nav>
      <header>
        <div className={style.container} id="about">
          <div>
            <h1>Cody the Pug</h1>
            <p>Hi! I am Cody the Pug. I love kisses and hugs.</p>

            <p>I own a cafe. I love serving drinks in my patented Pug Mugs.</p>

            <p>
              After finishing ther web development immersive at FSA I was able
              to make this website.
            </p>
            {/* <a href="#about" className="btn-primary">
                About Me
              </a>
              <a href="#projects" className="btn-secondary">
                Contact Me
              </a> 
              <a
                href="https://twitter.com/amberabreudev"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.linkedin.com/in/amber-abreu/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/AmberAbreu"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              */}
          </div>
          <StaticImage
            src="../images/cody-pug.jpg"
            alt="image of Cody"
            placeholder="blurred"
            layout="fixed"
            style={{
              width: "250px",
              height: "250px",
              borderRadius: "125px",
            }}
          />
        </div>
      </header>
      <div className={style.projects}>
        <div className={style.container}>
          <div className={style.individual}>
            <StaticImage
              src="../images/adoption.jpg"
              alt="adoption project"
              placeholder="blurred"
              layout="fixed"
              style={{
                width: "500px",
                height: "300px",
              }}
            />
            <button>click me</button>
          </div>
          <div className={style.individual}>
            <StaticImage
              src="../images/coffee.jpg"
              alt="adoption project"
              placeholder="blurred"
              layout="fixed"
              style={{
                width: "500px",
                height: "300px",
              }}
            />
            <button>click me 2</button>
          </div>
        </div>
      </div>
      <TechStack />
    </div>
  );
}
