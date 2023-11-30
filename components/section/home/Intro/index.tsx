"use client";

import { Container, Image, Text, useMantineTheme } from "@mantine/core";
//styles
import classes from "./into.module.css";
//assets
import imgFist from "@/assets/img/powerfist.jpg";

export default function () {
  const theme = useMantineTheme();

  return (
    <>
      <section className={classes.root}>
        <Image
          className={classes.backImage}
          w={{
            base: 225,
            lg: 450,
          }}
          h={{
            base: 375,
            lg: 750,
          }}
          src={imgFist.src}
        />
        <Text className={classes.backText}>
          Justice Equality Freedom Empower Solidarity Revolution Voices Change
          Future Unity Hope Resistance Progress Rights Activism Peace Power
          Together Believe Inspire
        </Text>

        <Container
          size="sm"
          pt={{
            base: "xl",
            lg: 200,
          }}
          pb={{
            base: "xl",
            lg: 0,
          }}
        >
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
              fontSize: "3rem",
              lineHeight: "3rem",
              color: "white",
            }}
          >
            WE ARE A<br />
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
            size="sm"
            style={{
              textAlign: "center",
              lineHeight: "170%",
            }}
            visibleFrom="lg"
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
          <Text
            mt="xl"
            px={{ xs: 0, lg: "4rem" }}
            size="xs"
            style={{
              textAlign: "center",
              lineHeight: "170%",
              maxWidth: 300,
              margin: "auto",
            }}
            hiddenFrom="lg"
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
    </>
  );
}
