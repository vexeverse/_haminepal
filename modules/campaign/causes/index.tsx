"use client";

import React, { useContext, useEffect, useState } from "react";
//next
import { usePathname, useRouter } from "next/navigation";
//mantine
import {
  Center,
  Container,
  Grid,
  Group,
  Text,
  useMantineTheme,
  Anchor,
  Space,
  Button,
  Loader,
  UnstyledButton,
  Divider,
  Paper,
  TextInput,
  Tabs,
  SimpleGrid,
} from "@mantine/core";
import { useMouse, useViewportSize, useWindowScroll } from "@mantine/hooks";
//motion
import { motion, useAnimate } from "framer-motion";
//styles
import classes from "./causes.module.css";
//react-query
import { useQuery } from "@tanstack/react-query";
//data
import { getAllData } from "@api/campaign/causes";
import { ArrowLeft, ArrowRight, MagnifyingGlass } from "@phosphor-icons/react";
//images
import imgHero from "@/assets/img/ghopa/277694831_4940004009447870_8095712648445104147_n.jpg";
import CardCause from "@ui/Card/Cause";
import ContextNavProps from "@/context/nav";
//components

export default function () {
  // DEFINITIONS

  //theme
  const theme = useMantineTheme();

  // CONTEXT
  const { state, dispatch } = useContext(ContextNavProps.Context);

  // PRELOAD

  const queryData = useQuery({
    queryKey: ["campaign", "causes"],
    queryFn: async () => {
      const res = getAllData();

      return res;
    },
    initialData: [],
  });

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
            HAMI NEPAL / CAMPAIGN /{" "}
            <span
              style={{
                color: theme.colors.red[6],
                fontWeight: 500,
              }}
            >
              CAUSES
            </span>
          </Text>
        </>
      ),
    });
  }, []);

  // COMPONENTS
  // FUNCTION
  // ANIMATIONS

  return (
    <>
      <section className={classes.root}>
        <Paper
          style={{
            background: `url(${imgHero.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Paper
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.8) 0%, #08090f 100%);",
            }}
          >
            <Container size="xl" py={100}>
              <Text
                className="heading"
                style={{
                  fontSize: "8rem",
                  lineHeight: "7rem",
                  textAlign: "center",
                  color: theme.colors.gray[2],
                }}
              >
                <span
                  style={{
                    color: theme.colors.brand[5],
                  }}
                >
                  INITIATIVES
                </span>{" "}
                FOR <br /> A BETTER TOMORROW.
              </Text>

              <Grid>
                <Grid.Col span={{ xs: 6, lg: 3 }} offset={{ lg: 3 }}>
                  <Text
                    mt="xl"
                    size="xs"
                    style={{
                      fontWeight: 600,
                      color: theme.colors.gray[2],
                      textTransform: "uppercase",
                    }}
                  >
                    64 Causes /<br /> 32,000 participants
                  </Text>
                </Grid.Col>
                <Grid.Col span={5}>
                  <Text
                    mt="xl"
                    size="xs"
                    style={{
                      color: theme.colors.gray[2],
                      textTransform: "uppercase",
                    }}
                  >
                    Causes represent the initiatives of Hami Nepal, dedicated to
                    aiding societies and individuals during critical moments. We
                    continually strive to be the first to respond in any
                    situation.
                  </Text>
                </Grid.Col>
              </Grid>
            </Container>
          </Paper>
        </Paper>

        <Container size="xl" mt={32}>
          <Grid>
            <Grid.Col span={{ xs: 12, lg: 4 }}>
              <Group>
                <ArrowRight color="white" />
                <Text size="xs" color="white">
                  Our Causes
                </Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={{ xs: 12, lg: 4 }}>
              <Group justify="center" mr={24}>
                <Text
                  size="xs"
                  style={{
                    color: "white",
                  }}
                >
                  All Causes
                </Text>
                <Text
                  size="xs"
                  style={{
                    color: theme.colors.gray[6],
                  }}
                >
                  Ongoing
                </Text>
                <Text
                  size="xs"
                  style={{
                    color: theme.colors.gray[6],
                  }}
                >
                  Completed
                </Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={{ xs: 12, lg: 4 }} pt="xl">
              <Group justify="flex-end">
                <TextInput
                  leftSection={<MagnifyingGlass />}
                  styles={{
                    input: {
                      background: "none",
                      color: "white",
                      border: "1px solid gray",
                    },
                  }}
                  size="xs"
                  placeholder="Search Causes..."
                />
              </Group>
            </Grid.Col>
          </Grid>
          {/* <Group>
            <Text
              size="xs"
              style={{
                color: 'white',
              }}
            >
              All
            </Text>
            <Text
              size="xs"
              style={{
                color: theme.colors.gray[6],
              }}
            >
              Disaster Relief
            </Text>
            <Text
              size="xs"
              style={{
                color: theme.colors.gray[6],
              }}
            >
              Health Relief
            </Text>
            <Text
              size="xs"
              style={{
                color: theme.colors.gray[6],
              }}
            >
              Protest
            </Text>
            <Text
              size="xs"
              style={{
                color: theme.colors.gray[6],
              }}
            >
              Donation
            </Text>
          </Group> */}

          <SimpleGrid
            spacing={32}
            cols={{
              xs: 1,
              md: 1,
              lg: 2,
            }}
          >
            {queryData.data.map((cause: any) => (
              <CardCause data={cause} />
            ))}
          </SimpleGrid>
        </Container>
      </section>
    </>
  );
}
