import React, { useState, useMemo } from "react";
import styles from "../styles/ImageGrid.module.css";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import lamp from "../assets/lamp.png";
import trust from "../assets/trust.png";
import interior from "../assets/interiors.png";
import sofa from "../assets/sofa2.jpg";
import room from "../assets/room.jpg";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/61.png";
import sev from "../assets/7.png";
import eight from "../assets/8.png";
import nine from "../assets/9.png";
import ten from "../assets/10.png";
import lampicon from "../assets/lampss.png";
import acc from "../assets/acc.png";

export default function ImageGrid() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndex2, setActiveIndex2] = useState(0);
  const { scrollY } = useScroll();

  // Faster response scroll animations
  const yHero = useTransform(scrollY, [600, 880], [0, -120]);
  const opacityHero = useTransform(scrollY, [670, 800, 1000], [1, 0.5, 0]);

  const yHero4 = useTransform(scrollY, [620, 1000], [60, -70]);
  const opacityHero4 = useTransform(scrollY, [620, 800, 900], [0, 1, 1]);

  const yHero5 = useTransform(scrollY, [900, 1100], [30, -100]);
  const opacityHero5 = useTransform(scrollY, [1000, 1200, 1300], [0, 0.5, 1]);
  
   const yHero6 = useTransform(scrollY, [1100, 1200], [150, 0]);
  const opacityHero6 = useTransform(scrollY, [1100, 1300, 1500], [0, 1, 1]);

  const yHero7 = useTransform(scrollY, [1200, 1350], [120, 0]);
  const opacityHero7 = useTransform(scrollY, [1100, 1300, 1500], [0, 1, 1]);

  const yHero9 = useTransform(scrollY, [1700, 1800], [0, 0]);
  const opacityHero9 = useTransform(scrollY, [1600, 1900, 1900], [0, 1, 1]);

  const yHero10 = useTransform(scrollY, [1800, 1850], [100, 0]);
  const opacityHero10 = useTransform(scrollY, [1700, 1800, 1900], [0, 0, 1]);

  const yHero8 = useTransform(scrollY, [1600, 1800], [0, -100]);
  const opacityHero8 = useTransform(scrollY, [1600, 1700, 1800], [0, 0.5,1]);

  const card = useMemo(
    () => [
      {
        image: lamp,
        heading: "Awesome Designs",
        para: "Discover a wide range of modern and timeless designs crafted to transform your space.",
      },
      {
        image: trust,
        heading: "Trusted Place",
        para: "Join thousands of happy clients who trust us for quality, transparency, and results.",
      },
      {
        image: interior,
        heading: "Free Consultation",
        para: "Our expert designers are ready to understand your vision and offer tailored advice.",
      },
    ],
    []
  );

  const images = useMemo(() => [one, two], []);
  const images2 = useMemo(() => [six, sev], []);

  return (
    <div className={styles.container}>
      <div className={styles.imageflex}>
        {card.map((i, index) => (
          <motion.div
            key={index}
            className={styles.card}
            style={{
              opacity: opacityHero,
              y: yHero,
              willChange: "transform, opacity",
              transition: "all 0.3s ease-out",
            }}
          >
            <img src={i.image} alt={i.heading} loading="lazy" />
            <h3>{i.heading}</h3>
            <p>{i.para}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.flexsecond}
        style={{
          opacity: opacityHero4,
          y: yHero4,
          willChange: "transform, opacity",
          transition: "all 0.3s ease-out",
        }}
      >
        {[sofa, room].map((bg, i) => (
          <div
            key={i}
            className={styles.card2}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "#fff",
            }}
          >
            <div className={i === 0 ? styles.overlay1 : styles.overlay2}>
              <h2>{i === 0 ? "100+ sofa designs" : "Multiple Wall designs & textures"}</h2>
              <p>{i === 0 ? "Make your living room Pinterest worthy" : "Find your unique taste"}</p>
              <button>See more</button>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div
        className={styles.features}
        style={{
          opacity: opacityHero5,
          y: yHero5,
          willChange: "transform, opacity",
          transition: "all 0.3s ease-out",
        }}
      >
        <h3>Featured Work</h3>
        <p>
          Our featured work showcases the magic we create in everyday
          spaces. Discover designs that feel like home.
        </p>
        <div className={styles.flexthird}>
          <div className={styles.scrollimage}>
            <div
              className={styles.sliderWrapper}
              style={{ transform: `translateX(-${activeIndex * 50}%)` }}
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  className={styles.image}
                  style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ))}
            </div>
            <div className={styles.buttons}>
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={activeIndex === i ? styles.active : ""}
                />
              ))}
            </div>
          </div>

          <div
            className={styles.grid}
            
          >
            <motion.div 
            style={{
              opacity: opacityHero6,
              y: yHero6,
              willChange: "transform, opacity",
              transition: "all 0.3s ease-out",
            }}
            className={styles.gridflex}>
              <img src={three} alt="" loading="lazy" />
              <img src={four} alt="" loading="lazy" />
            </motion.div>
            <motion.div 
            style={{
              opacity: opacityHero7,
              y: yHero7,
              willChange: "transform, opacity",
              transition: "all 0.3s ease-out",
            }}
            className={styles.gridflex}>
              <div className={styles.gridflexcard}>
                <img src={lampicon} alt="" loading="lazy" />
                <h3>More Curated Designs</h3>
                <button>See Now</button>
              </div>
              <img src={five} alt="" loading="lazy" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div 
      style={{
              opacity: opacityHero8,
              y: yHero8,
              willChange: "transform, opacity",
              transition: "all 0.3s ease-out",
              overflow:'hidden'
            }}
      className={styles.features}>
        <div className={styles.flexthird} style={{ marginTop: "0" }}>
          <motion.div 
          style={{
          opacity: opacityHero9,
          y: yHero9,
          willChange: "transform, opacity",
          transition: "all 0.3s ease-out",
        }}
          className={styles.grid}>
            <div className={styles.gridflex}>
              <img src={eight} alt="" loading="lazy" />
              <img src={nine} alt="" loading="lazy" />
            </div>
            <motion.div 
            style={{
          opacity: opacityHero10,
          y: yHero10,
          willChange: "transform, opacity",
          transition: "all 0.3s ease-out",
        }}
            className={styles.gridflex}>
              <div className={styles.gridflexcard}>
                <img src={acc} alt="" loading="lazy" />
                <h3>Accessories, for the charm</h3>
                <button>See Now</button>
              </div>
              <img src={ten} alt="" loading="lazy" />
            </motion.div>
          </motion.div>

          <div className={styles.scrollimage} style={{overflow:"hidden"}}>
            <div
              className={styles.sliderWrapper}
              style={{ transform: `translateX(-${activeIndex2 * 50}%)` }}
            >
              {images2.map((img, i) => (
                <div
                  key={i}
                  className={styles.image}
                  style={{
                    overflow:'hidden',
                    backgroundImage: `url(${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              ))}
            </div>

            <div className={styles.buttons}>
              {images2.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex2(i)}
                  className={activeIndex2 === i ? styles.active : ""}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}



