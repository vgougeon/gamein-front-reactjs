import React from 'react';
import { motion } from 'framer-motion';
import './logo.scss';
const outline = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      stroke: "var(--logo-color)",
      fill: "none",
      rotate: -90,
      scale: 1.2
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      stroke: "var(--logo-color)",
      fill: "none",
      rotate: 0,
      scale: 1
    }
};
const fill = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "var(--logo-color)",
      rotate: -90,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "var(--logo-color)",
      rotate: 0,
      scale: 1
    }
};
const Logo = () => {
    return (  
        <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 61.63 41.78"
        className="logo-item"
        >
        <motion.path
            d="M16.84.78.21,42.56H45L61.84.78ZM34.66,30l2.43-5.83L29,24.21l2-5.08,18.22,0-7.5,18.7H7.18L20.1,5.59H54.51l-3.08,7.76H27.12L20.41,30Z"
            stroke="none"
            variants={fill}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
            default: { duration: 2, ease: "easeInOut" },
            fill: { duration: 2, ease: [1, 0, 0.8, 1] }
            }}
        />
        <motion.path
            d="M17.37 0.5 62.37 0.5 45.52 42.28 0.74 42.28 17.37 0.5"
            variants={outline}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
            default: { /*yoyo: Infinity,*/ duration: 1, ease: "easeInOut" }
            }}
        />
        <motion.path
            d="M17.37 0.5 62.37 0.5 45.52 42.28 0.74 42.28 17.37 0.5"
            variants={outline}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
            default: { /*yoyo: Infinity,*/ duration: 0.5, ease: "easeInOut" }
            }}
        />
        <motion.path
            d="M17.37 0.5 62.37 0.5 45.52 42.28 0.74 42.28 17.37 0.5"
            variants={outline}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
            default: { /*yoyo: Infinity,*/ duration: 1.5, ease: "easeInOut" }
            }}
        />
        <motion.path
            d="M17.37 0.5 62.37 0.5 45.52 42.28 0.74 42.28 17.37 0.5"
            variants={outline}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
            default: { /*yoyo: Infinity,*/ duration: 2, ease: "easeInOut" }
            }}
        />
        </motion.svg>
    );
}
 
export default Logo;