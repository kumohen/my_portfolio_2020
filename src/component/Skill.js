import React from "react";
import { motion } from "framer-motion";
import { fondEnd, backend, Planguage, others } from "./utills";
const Skill = () => {
  return (
    <div className="skill">
      <div className="child_1">
        <motion.h3 whileHover={{ scale: 1.2, rotate: 360 }}>
          Fontend Language
        </motion.h3>
        <div>
          {fondEnd.map((item) => (
            <motion.p
              drag
              initial={{ y: "-100vw" }}
              animate={{ y: 0 }}
              transition={{ duration: 2 }}
              key={item}
              className="_fontend"
            >
              {item}
            </motion.p>
          ))}
        </div>
      </div>

      <div className="child_2">
        <h3>Backend and Database language</h3>
        <div>
          {backend.map((item) => (
            <motion.p drag key={item} className="_fontend">
              {item}
            </motion.p>
          ))}
        </div>
      </div>
      <div className="child_3">
        <h3 style={{ textAlign: "center" }}>Programming language</h3>
        <div>
          {Planguage.map((item) => (
            <motion.p
              drag
              initial={{ y: "-100vw" }}
              animate={{ y: 0 }}
              transition={{ duration: 2 }}
              key={item}
              className="_fontend"
            >
              {item}
            </motion.p>
          ))}
        </div>
      </div>
      <div className="child_4">
        <h3 style={{ textAlign: "center" }}>Other Skills</h3>
        <div>
          {others.map((item) => (
            <motion.p
              drag
              initial={{ y: "-100vw" }}
              animate={{ y: 0 }}
              transition={{ duration: 2 }}
              key={item}
              className="_fontend"
            >
              {item}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
