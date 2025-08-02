import React from 'react'
import one from '../assets/20.png'
import two from '../assets/21.png'
import three from '../assets/22.png'
import four from '../assets/23.png'
import five from '../assets/24.png'
import six from '../assets/25.png'
import seven from '../assets/26.png'
import eight from '../assets/27.png'
import nine from '../assets/28.png'
import styles from "../styles/Marquee.module.css";

const images = [one, two, three, four, five, six, seven, eight, nine];

export default function Marquee() {
  const fullImageSet = [...images, ...images]; // Duplicate for seamless scroll

  return (
    <>
      <div>
        <h3 style={{marginTop:'0px'}}>Redefine Your Space</h3>
        <p>Explore curated interiors made just for you</p>
      </div>

      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeTrack}>
          {fullImageSet.map((img, i) => (
            <div key={i} className={styles.imageContainer}>
              <img src={img} alt={`img-${i}`} />
             </div>
          ))}
        </div>
      </div>
    </>
  );
}
