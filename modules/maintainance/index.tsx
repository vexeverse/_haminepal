"use client";

import { Container, Space, Text } from "@mantine/core";

import { motion } from "framer-motion";

export default function () {
  return (
    <>
      <Container size="xs">
        <section
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <motion.svg
            width="122"
            height="112"
            viewBox="0 0 122 112"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                // repeat: Infinity,
                // repeatType: "loop",
                // repeatDelay: 1,
              }}
              d="M67.0371 1L40.0557 1.00009V84.0199C57.7527 101.737 67.0371 94.3974 67.0371 84.0199V61.1894H94.0186V96.4729L121 111.001V1H94.0186V34.208H67.0371V1Z"
              //fill="#CC343B"
              stroke="#CC343B"
              strokeWidth={2}
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                // repeat: Infinity,
                // repeatType: "loop",
                // repeatDelay: 1,
              }}
              d="M31.7528 34.424V77.4213C-3.0368 47.895 -4.77368 34.4239 9.12081 34.4238L31.7528 34.424Z"
              //fill="#CC343B"
              stroke="#CC343B"
              strokeWidth={2}
            />
          </motion.svg>

          <Space h={32} />

          <Text>
            We're currently undergoing a quick site maintenance. Please bear
            with us as we work to resolve this. Apologies for any inconvenience
            caused.
          </Text>
        </section>
      </Container>
    </>
  );
}
