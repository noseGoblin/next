import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/jay.jpeg'
          alt='An image showing Jay'
          width={300}
          height={300}
          layout='responsive'
        />
      </div>
      <h1>Hi, I'm Jay</h1>
      <p>
        I blog about web dev - mostly js frameworks like Angular and React y'all
      </p>
    </section>
  );
}

export default Hero;
