import React, { useState } from "react";
import Loader from "./compenent/Loader";
import styles from "./styles/App.module.css";
import ImageGrid from "./compenent/ImageGrid";
import Marquee from "./compenent/Marquee";
import PastelTail from "./compenent/RippleCursor";
import { AnimatePresence, motion } from "framer-motion";
import Three from "./compenent/Three";
import Navbar from "./compenent/Navbar";
import "./index.css";
import "./App.css";
import arrowBlack from "../public/arrow-black.png"; // ✅ Make sure this path is correct

function App() {
  const [menuclick, setmenuclick] = useState(false);
  const [mouseOver, setMouseOver] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className={styles.appContainer}>
      {isLoading ? (
        <Loader onLoadingComplete={handleLoadingComplete} />
      ) : (
        <>
          <PastelTail />
          <div className="bg-[#453636] relative w-screen h-screen">
            {menuclick && (
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.5, ease: "easeOut" },
                  }}
                  className="bg-[#FFDAB3] sm:w-[100%] lg:w-[75%] absolute top-0 right-0 rounded z-20 w-full h-full menu overflow-y-hidden"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="text-[2.5rem] pl-[2rem] mt-[4rem]">
                    Tell us your decorating desires.
                  </p>
                  <p className="text-[2.5rem] pl-[2rem]">
                    We'll make your place perfectly yours.
                  </p>
                  <br />
                  <br />

                  {/* About Us */}
                  <motion.div
                    onMouseEnter={() => setMouseOver("About")}
                    onMouseLeave={() => setMouseOver("")}
                    initial={{ height: "22%", backgroundColor: "#FFDAB3" }}
                    whileHover={{ height: "40%", backgroundColor: "#7C444F" }}
                    exit={{ height: "25%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="content-div relative mt-[0.7rem] bg-[#FFDAB3] tag w-full h-[25%] flex justify-center items-center overflow-y-hidden"
                  >
                    <motion.div
                      initial={{ marginTop: "2.5rem" }}
                      animate={{
                        marginTop: mouseOver === "About" ? "0rem" : "2.5rem",
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="tag w-full content text-center"
                    >
                      About Us
                    </motion.div>
                    <div
                      className={`link absolute top-[1.5rem] cursor-pointer right-[2rem] w-[5rem] h-[3rem] flex justify-center items-center ${
                        mouseOver === "About"
                          ? "shadow-[3px_3px_10px_rgba(0,0,0,0.7)]"
                          : ""
                      }`}
                    >
                      <img src={arrowBlack} alt="arrow" />
                    </div>
                  </motion.div>

                  {/* Works */}
                  <motion.div
                    onMouseEnter={() => setMouseOver("Works")}
                    onMouseLeave={() => setMouseOver("")}
                    initial={{ height: "22%", backgroundColor: "#FFDAB3" }}
                    whileHover={{ height: "40%", backgroundColor: "#008080" }}
                    exit={{ height: "25%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="content-div bg-[#FFDAB3] tag w-full h-[25%] flex justify-center items-center overflow-y-hidden"
                  >
                    <motion.div
                      initial={{ marginTop: "2.5rem" }}
                      animate={{
                        marginTop: mouseOver === "Works" ? "0rem" : "2.5rem",
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="tag w-full content text-center"
                    >
                      Works
                    </motion.div>
                    <div
                      className={`link absolute top-[1.5rem] cursor-pointer right-[2rem] w-[5rem] h-[3rem] flex justify-center items-center ${
                        mouseOver === "Works"
                          ? "shadow-[3px_3px_10px_rgba(0,0,0,0.7)]"
                          : ""
                      }`}
                    >
                      <img src={arrowBlack} alt="arrow" />
                    </div>
                  </motion.div>

                  {/* Services */}
                  <motion.div
                    onMouseEnter={() => setMouseOver("Services")}
                    onMouseLeave={() => setMouseOver("")}
                    initial={{ height: "22%", backgroundColor: "#FFDAB3" }}
                    whileHover={{
                      height: "40%",
                      marginTop: "-1rem",
                      backgroundColor: "#D27E5A",
                    }}
                    exit={{ height: "25%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="content-div tag w-full h-[25%] flex justify-center items-center overflow-y-hidden"
                  >
                    <motion.div
                      initial={{ marginTop: "2.7rem" }}
                      animate={{
                        marginTop: mouseOver === "Services" ? "-2rem" : "2.7rem",
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="tag w-full content text-center"
                    >
                      Services
                    </motion.div>
                    <div
                      className={`link absolute top-[1.5rem] cursor-pointer right-[2rem] w-[5rem] h-[3rem] flex justify-center items-center ${
                        mouseOver === "Services"
                          ? "shadow-[3px_3px_10px_rgba(0,0,0,0.7)]"
                          : ""
                      }`}
                    >
                      <img src={arrowBlack} alt="arrow" />
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            )}
            <div className="nav absolute">
              <Navbar onmenuclick={setmenuclick} />
            </div>
            <Three />
          </div>

          <ImageGrid />
          <Marquee />
        </>
      )}
    </div>
  );
}

export default App;
