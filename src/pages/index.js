import React from "react";
import * as style from "../style/index.module.css";
import { StaticImage } from "gatsby-plugin-image";

import html from "../images/tech/html5.svg";
import css from "../images/tech/css3.svg";
import javascript from "../images/tech/javascript.svg";
import react from "../images/tech/react.svg";
import sequelize from "../images/tech/sequelize.svg";
import postgres from "../images/tech/postgresql.svg";
import express from "../images/tech/expressjs.svg";
import node from "../images/tech/nodejs.svg";
import redux from "../images/tech/redux.svg";

export default function IndexPage() {
  const technologies = [
    "../images/tech/html5.svg",
    "../images/tech/css3.svg",
    "../images/tech/javascript.svg",
    "../images/tech/react.svg",
    "../images/tech/sequelize.svg",
    "../images/tech/postgersql.svg",
    "../images/tech/nodejs.svg",
    "../images/tech/expressjs.svg",
    "../images/tech/sequelize.svg",
  ];
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
          </div>
        </div>
      </div>
      <p>Tech Stack</p>
      <div className="tech-stack">
        <StaticImage
          src="../images/tech/html5.svg"
          alt="html icon"
          placeholder="blurred"
          layout="fixed"
          style={{
            height: "50px",
          }}
        />
        <StaticImage
          src="../images/tech/css3.svg"
          alt="html icon"
          placeholder="blurred"
          layout="fixed"
          style={{
            height: "50px",
          }}
        />
        <StaticImage
          src="../images/tech/javascript.svg"
          alt="html icon"
          placeholder="blurred"
          layout="fixed"
          style={{
            height: "50px",
          }}
        />
        <StaticImage
          src="../images/tech/react.svg"
          alt="html icon"
          placeholder="blurred"
          layout="fixed"
          style={{
            height: "50px",
          }}
        />
        <StaticImage
          src="../images/tech/redux.svg"
          alt="html icon"
          placeholder="blurred"
          layout="fixed"
          style={{
            height: "50px",
          }}
        />
        <StaticImage
          src="../images/tech/postgresql.svg"
          alt="html icon"
          placeholder="blurred"
          layout="fixed"
          style={{
            height: "50px",
          }}
        />
        <StaticImage
          src="../images/tech/expressjs.svg"
          alt="html icon"
          placeholder="blurred"
          layout="fixed"
          style={{
            height: "50px",
          }}
        />
        <StaticImage
          src="../images/tech/node.svg"
          alt="html icon"
          placeholder="blurred"
          layout="fixed"
          style={{
            height: "50px",
          }}
        />
      </div>
    </div>
  );
}
