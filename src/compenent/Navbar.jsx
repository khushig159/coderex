import React from "react";
import { motion } from "framer-motion";
// import '../../public/close-icon.png'

function Navbar(props) {
  const [menuclick, setmenuclick] = React.useState(false);
  return (
    <div className="w-screen h-[5rem]  flex justify-between items-center px-4 z-50 pl-[2rem] pr-[2rem]">
      <button className="bg-white px-[1rem] py-[0.3rem] rounded-full bold">
        Codrex
      </button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{
          marginTop: "1rem",
          backgroundColor: "#000000",
          color: "#ffffff",
        }}
        onClick={() => {setmenuclick(!menuclick);
          props.onmenuclick(!menuclick);}}
        className={`bg-white border px-[1rem] py-[0.3rem] rounded-full flex justify-center gap-[0.4rem] items-center ${
          menuclick ? "shadow-[3px_3px_10px_rgba(0,0,0,0.2)]" : ""
        }  bold`}
        transition={{
          duration: 0.1, // Applies to all animated properties unless overridden
          ease: "easeOut", // Optional: specify easing function
          whileHover: { duration: 0.2 }, // Optional: override duration specifically for whileHover
          whileTap: { duration: 0.1 }, // Optional: override duration specifically for whileTap
        }}
      >
        {menuclick ? "Close " : "Menu"}
        {menuclick && (
          <img src="/close-icon.png" className="inline-block pt-[0.2rem]" />
        )}
      </motion.button>

    </div>
  );
}

export default Navbar;
