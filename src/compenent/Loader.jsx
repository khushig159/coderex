import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Loader.module.css";

const Loader = ({ onLoadingComplete }) => {
  const [showLine1, setShowLine1] = useState(false);
  const [showLine2, setShowLine2] = useState(false);
  const [showLine3, setShowLine3] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [showFirstFont, setShowFirstFont] = useState(true);
  const [showSecondFont, setShowSecondFont] = useState(false);

  // Progress logic (fix: 50ms is better)
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 99) {
          setIsFadingOut(true);
          clearInterval(interval);
          if (onLoadingComplete) {
            setTimeout(() => {
              onLoadingComplete();
            }, 500);
          }
          return 100;
        }
        return prevProgress + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onLoadingComplete, isFadingOut]);

  // Staggered text lines
  useEffect(() => {
    const t1 = setTimeout(() => setShowLine1(true), 150);
    const t2 = setTimeout(() => setShowLine2(true), 300);
    const t3 = setTimeout(() => setShowLine3(true), 500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // Font swap animation for "NOW"
  useEffect(() => {
  if (!showLine3) return;
  let isMounted = true;
  function cycleFonts() {
    if (!isMounted) return;
    setShowFirstFont(true);
    setShowSecondFont(false);
    setTimeout(() => {
      if (!isMounted) return;
      setShowFirstFont(false);
      setTimeout(() => {
        if (!isMounted) return;
        setShowSecondFont(true);
        setTimeout(cycleFonts, 800); // cycle after the second font
      }, 100); // fade out first font, then fade in second font
    }, 700); // how long to show first font
  }
  cycleFonts();
  return () => { isMounted = false; };
}, [showLine3]);


  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  // "NOW" font animation variants
  const nowVariants = {
    initial: { opacity: 1 },
    out: { opacity: 0, transition: { duration: 0.1 } },
    in: { opacity: 1, transition: { duration: 0.1 } }
  };

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loaderContent}>
        <AnimatePresence>
          {/* Line 1 */}
          {showLine1 && (
            <motion.div
              className={styles.firsttext}
              variants={lineVariants}
              initial="hidden"
              animate={isFadingOut ? "exit" : "visible"}
              exit="exit"
              key="line1"
            >
              <h2 className={styles.progressText}>{progress} - 100</h2>
              <div className={styles.first}>
                <h1 className={styles.loadingMessage}>
                  YOUR
                </h1>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {/* Line 2 */}
          {showLine2 && (
            <motion.div
              className={styles.firsttext}
              variants={lineVariants}
              initial="hidden"
              animate={isFadingOut ? "exit" : "visible"}
              exit="exit"
              key="line2"
            >
              <h1 className={styles.loadingMessage2}>
                WEB EXPERIENCE
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {/* Line 3 */}
          {showLine3 && (
            <motion.div
              className={styles.firsttext}
              variants={lineVariants}
              initial="hidden"
              animate={isFadingOut ? "exit" : "visible"}
              exit="exit"
              key="line3"
            >
              <h1 className={styles.loadingMessage3}>
                IS LOADING RIGHT{" "}
                {/* Only one AnimatePresence for swapping NOW */}
                <span className={styles.nowTransitionWrapper} style={{  minWidth: 68 }}>
                  <AnimatePresence mode="wait">
                    {showFirstFont && (
                      <motion.span
                        key="now-first"
                        initial="initial"
                        animate="initial"
                        exit="out"
                        variants={nowVariants}
                        className={styles.nowText}
                        style={{
                          fontFamily: "Poppins, sans-serif",
                        }}
                      >
                        NOW
                      </motion.span>
                    )}
                    {showSecondFont && (
                      <motion.span
                        key="now-second"
                        initial="out"
                        animate="in"
                        exit="out"
                        variants={nowVariants}
                        className={styles.nowText}
                        style={{
                          fontFamily: "Bodoni Moda, serif",
                        }}
                      >
                        NOW
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Loader;
