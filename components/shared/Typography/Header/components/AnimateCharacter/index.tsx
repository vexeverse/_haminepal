"use client";

//mantine
import {} from "@mantine/core";
import { motion } from "framer-motion";

const WordWrapper = ({ children }: { children: string }) => {
  return <span>{children}</span>;
};

export default function AChar({ text }: { text: string }) {
  // DEFINITIONS

  // CONTAINERS

  const AnimationCharacterState = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  // Deriving Array of Words
  const splitWords = text.split(" ");

  // Array of Letters
  const words: any[] = [];

  for (const item of splitWords) {
    words.push(item.split(""));
  }

  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
    <span>
      {words.map((word, index) => {
        return (
          <WordWrapper key={index}>
            {words[index].flat().map((element: any, index: number) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={AnimationCharacterState}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </WordWrapper>
        );
      })}
      {/* {} */}
    </span>
  );
}
