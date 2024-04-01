import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <b>Binod Gatuam</b></h1>
        <p className={styles.description}>
          I am a passionate <b>Full Stack Developer</b> and <b>JavaScript enthusiast</b>.
          I have experience working with <b>React, Node.js, Express, Next.js, Nest.js, MongoDB, and MySQL</b>.
          I enjoy applying <b>Test-Driven Development(TDD)</b> to creatively solve problems and develop efficient solutions. Staying updated with the latest technology excites me, and I am constantly seeking ways to enhance my skills.
          When coding, I prioritize following best practices and producing clean, easy-to-maintain code.
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
