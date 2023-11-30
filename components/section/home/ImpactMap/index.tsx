"use client";
//react
import React from "react";
//next
import dynamic from "next/dynamic";
//mantine
import {} from "@mantine/core";
//mantine-hooks
import {} from "@mantine/hooks";
//icons
import {} from "@phosphor-icons/react";
//framer
import { motion } from "framer-motion";
//styles
import classes from "./impact.module.css";

const ImpactMap = dynamic(() => import("./components/newmap"), {
  ssr: false,
});

export default function () {
  return (
    <>
      <ImpactMap />
    </>
  );
}
