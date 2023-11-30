"use client";

import React from "react";
//mantine
import {} from "@mantine/core";
//motion
import { motion } from "framer-motion";
//styles
import classes from "./header.module.css";
import AnimateCharacter from "./components/AnimateCharacter";

export default function ({
  style = {},
  text,
  delay = 0,
}: {
  style?: {};
  text: string;
  delay?: number;
}) {
  const animationStatesContainer = {
    visible: {
      transition: {
        staggerChildren: 0.025,
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      className={classes.root}
      initial="hidden"
      variants={animationStatesContainer}
      animate={"visible"}
    >
      <div style={style} className={classes.container}>
        <div className="font-header">
          <AnimateCharacter text={text} />
        </div>
      </div>
    </motion.div>
  );
}
