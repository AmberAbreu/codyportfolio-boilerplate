import React from "react";
import * as style from "../style/index.module.css";
import { StaticImage } from "gatsby-plugin-image";
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
        <div className={style.about}>
          <div className={style.aboutDescription}>
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
      <div className="projects">
        {/* TWO OPTIONS HERE: if you want to display multiple projects
        then it is worth it to map through an object. If you only want 
        to show 2 projects, then my suggestion would be to just repeat the two elements.
        */}
      </div>
    </div>
  );
}
