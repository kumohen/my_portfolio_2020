import * as React from "react";
import { motion } from "framer-motion";

const Example = () => (
  <motion.div
    animate={{ scale: 2, textAlign: "center", duration: 0.1 }}
    transition={{ duration: 1 }}
  >
    <div className="new_item"></div>
  </motion.div>
);

export default Example;
