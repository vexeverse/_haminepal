"use client";

import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  createTheme,
  Container,
} from "@mantine/core";
import { generateColors } from "@mantine/colors-generator";
//theme

import "@/styles/global.css";
import "@/styles/leaflet.css";
import "@mantine/carousel/styles.css";

export const metadata = {};

export default function ({ children }: { children: any }) {
  const theme = createTheme({
    colors: {
      brand: generateColors("#C91A25"),
    },
    primaryColor: "brand",
    fontFamily: `'DM Sans', sans-serif;`,
    components: {
      Container: Container.extend({
        defaultProps: {
          px: { base: 48, lg: "md" },
        },
      }),
    },
  });

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bayon&family=DM+Sans:ital,opsz,wght@0,9..40,100;0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;0,9..40,1000;1,9..40,100;1,9..40,200;1,9..40,300;1,9..40,400;1,9..40,500;1,9..40,600;1,9..40,700;1,9..40,800;1,9..40,900;1,9..40,1000&family=Yeseva+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          background: "#0a0a0a",
        }}
      >
        <MantineProvider
          theme={theme}
          defaultColorScheme="dark"
          forceColorScheme="dark"
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
