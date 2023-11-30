"use client";

import React, { useState, useEffect, useContext } from "react";
//mantine
import {
  Container,
  Divider,
  Grid,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";
//sections
import {
  SectionCauses,
  SectionHero,
  SectionImpactMap,
  SectionIntro,
  SectionSupporters,
  SectionTransparency,
} from "@/components/section/home";
import ContextNavProps from "@/context/nav";
//context

export default function () {
  // DEFINITION
  const theme = useMantineTheme();
  // CONTEXT
  const { state, dispatch } = useContext(ContextNavProps.Context);

  useEffect(() => {
    dispatch({
      type: "UPDATE_LABEL",
      value: (
        <>
          <Text
            size="xs"
            style={{
              textAlign: "center",
              color: theme.colors.gray[7],
            }}
          >
            HAMI NEPAL /{" "}
            <span
              style={{
                color: theme.colors.red[6],
                fontWeight: 500,
              }}
            >
              HOME
            </span>
          </Text>
        </>
      ),
    });
  }, []);

  return (
    <>
      <SectionHero />
      <SectionImpactMap />
      <Space h={100} />
      <SectionIntro />
      <Container size="xl">
        <Divider style={{ opacity: 0.3 }} />
      </Container>

      <SectionCauses />

      <Container size="xl">
        <Divider style={{ opacity: 0.3 }} />
      </Container>
      <Space
        h={{
          base: 32,
          lg: 100,
        }}
      />
      <SectionTransparency />
      <Space
        h={{
          base: 32,
          lg: 100,
        }}
      />
      <Container size="xl">
        <Divider style={{ opacity: 0.3 }} />
      </Container>

      <SectionSupporters />

      <Container size="xl">
        <Divider style={{ opacity: 0.3 }} />
      </Container>

      <Grid py={160}>
        <Grid.Col span={{ xs: 12 }} mt="xs">
          <Text
            className="heading"
            style={{
              fontSize: "6rem",
              lineHeight: "5rem",
              //color: 'var(--color-primary)',
              textAlign: "center",
            }}
          >
            FOR THE PEOPLE.{" "}
            <span
              style={{
                color: theme.colors.brand[5],
              }}
            >
              BY THE PEOPLE.
            </span>
          </Text>
        </Grid.Col>
      </Grid>
    </>
  );
}
