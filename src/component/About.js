import React from "react";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="about_con">
      <motion.h3
        initial={{}}
        animate={{ rotate: 360 }}
        transition={{ duration: 2 }}
      >
        About Me
      </motion.h3>
      <motion.div>
        <p className="about_title">
          My name is Mohen Mondal and I am a Passionate Mern stack web developer
          with few years of experience using JavaScript, HTML5, and CSS3 to
          build all aspects of the user experience and user interface for
          client-facing pages. Specializes in using Node and React to build
          e-commerce sites.
        </p>
      </motion.div>
    </div>
  );
};

export default About;
