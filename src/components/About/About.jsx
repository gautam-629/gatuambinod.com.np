import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          // src={getImageUrl("about/aboutImage.png")}
          src="profile.jpg"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
         
          <li className={styles.aboutItem}>
            <img 
            width={150}
            height={200}
             src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3 style={{marginBottom:'20px'}}>Full Stack Developer</h3>
              <p>
                  I'm skilled in creating user-friendly websites that work well on any device, and I'm experienced in building efficient backend systems and APIs. I also use Test-Driven Development <b>(TDD)</b> to make sure my code is reliable and high-quality.
              </p>
            </div>
          </li>
          
        </ul>
      </div>
    </section>
  );
};
