"use client";

import React, { useState, useEffect } from "react";
//mantine
import {
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Text,
  useMantineTheme,
} from "@mantine/core";

//section
import {
  SectionCauses,
  SectionImpactMap,
  SectionSupporters,
  SectionTransparency,
} from "@/components/section/home";
import dummyData from "@/json/data";
import { ArrowRight } from "@phosphor-icons/react";

export default function () {
  const theme = useMantineTheme();

  return (
    <>
      <SectionImpactMap />

      <section>
        <Container size="sm" py={"12rem"}>
          <Text
            visibleFrom="lg"
            className="heading"
            style={{
              textAlign: "center",
              fontSize: "12rem",
              lineHeight: "10rem",
              color: "white",
            }}
          >
            WE ARE A{" "}
            <span
              style={{
                color: theme.colors.brand[5],
              }}
            >
              MOVEMENT
            </span>
          </Text>

          <Text
            hiddenFrom="lg"
            className="heading"
            style={{
              textAlign: "center",
              fontSize: "5rem",
              lineHeight: "5rem",
              color: "white",
            }}
          >
            WE ARE A{" "}
            <span
              style={{
                color: theme.colors.brand[5],
              }}
            >
              MOVEMENT
            </span>
          </Text>

          <Text
            mt="xl"
            px={{ xs: 0, lg: "4rem" }}
            size="xs"
            style={{
              textAlign: "center",
              lineHeight: "1.3rem",
            }}
          >
            Hami Nepal is a non-profit organisation, established in 2015 A.D.
            and registered in 2020 A.D. (Regd.no. 609789065), which directly
            connects the donors and the recipients. Our main objective is to
            help anyone in need without any hesitations and expectation of
            payback. The organisation doesn’t spend any of the received
            donations on administration cost as we believe that 100% of the
            donation should reach the recipient in order to establish effective
            helping. All of our volunteers, mobilised for the authentication of
            the problem, logistics and delivery, cover their own expenses in
            order to save the administrative expense.
          </Text>
        </Container>
      </section>

      <Divider style={{ opacity: 0.5 }} />

      <SectionCauses />

      <Divider style={{ opacity: 0.5 }} />

      <SectionTransparency />

      <Divider style={{ opacity: 0.5 }} />

      <SectionSupporters />

      <Divider style={{ opacity: 0.5 }} />
    </>
  );
}
