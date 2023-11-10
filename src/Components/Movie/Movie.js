import React from "react";
import styles from "./Movie.module.css";

const Movies = () => {
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://www.themoviedb.org/t/p/original/wG56TyT0SERj1EFL13e5dbjf0b4.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Extraction 2</h3>
            <p className={styles.movie__date}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://www.themoviedb.org/t/p/original/tUtgLOESpCx7ue4BaeCTqp3vn1b.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>The Marvels</h3>
            <p className={styles.movie__date}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://www.themoviedb.org/t/p/original/j9mH1pr3IahtraTWxVEMANmPSGR.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Five Nights At Freddy's</h3>
            <p className={styles.movie__date}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://www.themoviedb.org/t/p/original/qVKirUdmoex8SdfUk8WDDWwrcCh.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>The Exorcist </h3>
            <p className={styles.movie__date}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://www.themoviedb.org/t/p/original/bOHwf20OzBVBrhX31MyUdxQR0d2.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Arknights</h3>
            <p className={styles.movie__date}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://www.themoviedb.org/t/p/original/bGZn5RVzMMXju4ev7xbl1aLdXqq.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Peaky Blinders</h3>
            <p className={styles.movie__date}>2013</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://www.themoviedb.org/t/p/original/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Expend4bles </h3>
            <p className={styles.movie__date}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://www.themoviedb.org/t/p/original/vHqeLzYl3dEAutojCO26g0LIkom.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Simpsons</h3>
            <p className={styles.movie__date}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://www.themoviedb.org/t/p/original/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Fast X</h3>
            <p className={styles.movie__date}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://www.themoviedb.org/t/p/original/ckW6FZqMFEKA9DonixjZSAPxJMo.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Gran Turismo </h3>
            <p className={styles.movie__date}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://www.themoviedb.org/t/p/original/qIdZLYHr7D23t08AQ5aIgAifQgi.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Saw X </h3>
            <p className={styles.movie__date}>2023</p>
          </div>
          <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src="https://www.themoviedb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
              alt=""
            />
            <h3 className={styles.movie__title}>Oppenheimer </h3>
            <p className={styles.movie__date}>2023</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movies;