import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import Image from "./mohen.png";

const Main = () => {
  const lists = ["skill", "project", "about", "contact"];
  return (
    <div className="main">
      <hr />
      <div className="main_top">
        <img src={Image} alt="mohen mondal" className="image" />
        <motion.p
          initial={{ y: "-100vw" }}
          animate={{ y: 0 }}
          transition={{ delay: 1, duration: 4 }}
          className="p_name"
        >
          Mohen mondal
        </motion.p>
        <hr />
      </div>
      <div className="main_bottom">
        {lists.map((item) => (
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 3 }}
            key={item}
            className="main_bottom_div"
          >
            <Link to={`${item}`} className="main_bottom_link">
              {" "}
              {item.charAt(0).toUpperCase() + item.slice(1)}{" "}
            </Link>

            <br />
            <hr />
          </motion.div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default Main;
