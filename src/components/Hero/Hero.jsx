import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <b>Binod Gatuam</b></h1>
        <p className={styles.description}>
          I'm a passionate <b>MERN Stack Developer</b> who knows <b>React, Node.js, Express, Next.js, Nest js </b>
          and <b>MongoDB</b>  well. I'm good at <b>Test-Driven Development (TDD)</b>, and I'm always excited to
          learn about and use the newest technologies. I love tackling tough problems and finding
          smart solutions, all while following the best ways to write software.
        </p>
        <a href="mailto:  gautambinod629@gmail.com" className={styles.contactBtn} target="_blank">
          Contact Me
        </a>
      </div>
      <img
        // src={getImageUrl("hero/heroImage.png")}
        src="profile.jpg"
        alt="Hero image of me"
        className={styles.heroImg}

      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
