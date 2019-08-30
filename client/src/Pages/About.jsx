import React from "react";
import "../static/about.css";
function About() {
  return (
    <section id='about'>
      <h1>ABOUT ME</h1>
      <div className='container'>
        <img src='/polyAllyBGF2.png' height='500' width='400' alt='Loading' />
        <br />
        <br />
        <article>
          Hello visitors! I am Altaha Ansari, a student of Bachelor of
          Technology and will complete my graduation in year 2022. I have an
          immense curiosity of how things work and that's the basic driving
          force of all my projects. When i was in grade 10 we were being taught
          how to code in Java SE, it was fascinating for me to be able to write
          programs that could perform tasks which i desired and it felt like a
          power i summoned into my fingers. On one fine day, my mind stumbled
          upon 'how are GUI programs built?' and i found AWT and Swing in java,
          that was my first teeny-tiny exploration in the world of coding in
          grade 10. Since then i have been doing things which gives me
          satisfaction and kindles my interest. Thank you for investing in your
          precious time on this info.
        </article>
      </div>
    </section>
  );
}

export default About;
