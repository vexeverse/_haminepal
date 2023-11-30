"use client";

import React, { useState, useEffect, useContext } from "react";
//nextjs

//mantine
import {
  ActionIcon,
  Center,
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
import {} from "@mantine/hooks";

// styles
import classes from "./about.module.css";

//images
import imgHeader from "@/assets/img/covid_relief.jpg";
import {
  ArrowRight,
  Browser,
  FacebookLogo,
  Globe,
  InstagramLogo,
} from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";

//img
import imgSanduk from "@/assets/img/SandukRuit2.png";
import { Carousel } from "@mantine/carousel";
import dummyData from "@/json/data";
import ContextNavProps from "@/context/nav";
import { variantGeneral, variantGeneralDelay } from "@/animation/general";

export default function () {
  // DEFINITIONS

  // styling
  const theme = useMantineTheme();
  //route

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
              ABOUT
            </span>
          </Text>
        </>
      ),
    });
  }, []);

  // PRELOADER

  // PRE STATES

  const [activeSection, setActiveSection] = useState(0);

  return (
    <>
      <Container size="xl" pt={54}>
        <Grid py={100} gutter="xl" visibleFrom="lg">
          <Grid.Col span={{ xs: 1 }} pt={100}>
            <motion.div
              variants={variantGeneral}
              initial="initial"
              animate="visible"
            >
              <Text
                size="xs"
                style={{ color: theme.colors.brand[5], fontWeight: 600 }}
              >
                MORE THEN JUST AN ORGANIZATION
              </Text>
            </motion.div>
          </Grid.Col>
          <Grid.Col span={{ xs: 10 }}>
            <motion.div
              variants={variantGeneral}
              initial="initial"
              animate="visible"
            >
              <Text
                className="heading"
                style={{
                  fontSize: "13rem",
                  lineHeight: "11rem",
                  textAlign: "center",
                  color: theme.colors.brand[5],
                }}
              >
                WE ARE A<br /> YOUTH MOVEMENT
              </Text>
            </motion.div>
          </Grid.Col>
          <Grid.Col span={{ xs: 1 }} pt={100}>
            <motion.div
              variants={variantGeneral}
              initial="initial"
              animate="visible"
            >
              <Text
                size="xs"
                style={{
                  textAlign: "right",
                  color: theme.colors.brand[5],
                  fontWeight: 600,
                }}
              >
                FOR THE PEOPLE, BY THE PEOPLE
              </Text>
            </motion.div>
          </Grid.Col>
        </Grid>

        <Grid py={100} gutter="xl" hiddenFrom="lg">
          <Grid.Col span={{ base: 12 }} pt={32}>
            <motion.div
              variants={variantGeneral}
              initial="initial"
              animate="visible"
            >
              <Text
                size="xs"
                style={{
                  color: theme.colors.brand[5],
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                MORE THEN JUST AN ORGANIZATION
              </Text>
            </motion.div>
          </Grid.Col>
          <Grid.Col span={{ base: 12 }}>
            <motion.div
              variants={variantGeneral}
              initial="initial"
              animate="visible"
            >
              <Text
                className="heading"
                style={{
                  fontSize: "6rem",
                  lineHeight: "6rem",
                  textAlign: "center",
                  color: theme.colors.brand[5],
                }}
              >
                WE ARE A<br /> YOUTH MOVEMENT
              </Text>
            </motion.div>
          </Grid.Col>
        </Grid>

        <motion.div
          variants={variantGeneralDelay(1)}
          initial="initial"
          animate="visible"
        >
          <Image
            radius="lg"
            src={imgHeader.src}
            mt={{
              base: 0,
              lg: "-10rem",
            }}
            style={{
              position: "relative",
              zIndex: -1,
            }}
          />
        </motion.div>

        <Grid py={160} gutter="xl">
          <Grid.Col span={{ xs: 12, lg: 2 }} mt="xs">
            <Group
              onClick={() => {
                setActiveSection(0);
              }}
              gap="xs"
              className={activeSection !== 0 ? classes.tab_inactive : ""}
            >
              <ArrowRight
                weight="bold"
                size={14}
                style={{
                  color: theme.colors.brand[5],
                }}
              />
              <Text
                size="xs"
                style={{
                  fontWeight: 700,
                }}
              >
                OVERVIEW
              </Text>
            </Group>

            <Group
              onClick={() => {
                setActiveSection(1);
              }}
              gap="xs"
              mt="md"
              className={activeSection !== 1 ? classes.tab_inactive : ""}
            >
              <ArrowRight
                weight="bold"
                size={14}
                style={{
                  color: theme.colors.brand[5],
                  opacity: activeSection !== 1 ? 0 : 1,
                }}
              />
              <Text
                size="xs"
                style={{
                  fontWeight: 700,
                }}
              >
                HISTORY
              </Text>
            </Group>
          </Grid.Col>

          <Grid.Col span={{ xs: 12, lg: 5 }}>
            <AnimatePresence>
              {activeSection == 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  <Text
                    hiddenFrom="lg"
                    size={"2rem"}
                    className="heading"
                    style={{
                      lineHeight: "2rem",
                    }}
                  >
                    <span
                      style={{
                        color: theme.colors.brand[5],
                      }}
                    >
                      Power in Unity:
                    </span>{" "}
                    Championing the Greater Good and Fighting for What's Right
                  </Text>

                  <Text
                    visibleFrom="lg"
                    size={"4rem"}
                    className="heading"
                    style={{
                      lineHeight: "4rem",
                    }}
                  >
                    <span
                      style={{
                        color: theme.colors.brand[5],
                      }}
                    >
                      Power in Unity:
                    </span>{" "}
                    Championing the Greater Good and Fighting for What's Right
                  </Text>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.3,
                    },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  <Text
                    size={"4rem"}
                    className="heading"
                    style={{
                      lineHeight: "4rem",
                    }}
                  >
                    <span
                      style={{
                        color: theme.colors.brand[5],
                      }}
                    >
                      {" "}
                      The Beginning
                    </span>{" "}
                    of Hami Nepal. A MOVEMENT BORN IN TIMES OF NEED.
                  </Text>
                </motion.div>
              )}
            </AnimatePresence>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, lg: 5 }}>
            <AnimatePresence>
              {activeSection == 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3,
                      duration: 0.3,
                    },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  <Text
                    size="sm"
                    style={{
                      lineHeight: "1.6rem",
                    }}
                  >
                    Hami Nepal is a non-profit organisation, established in 2015
                    A.D. and registered in 2020 A.D. (Regd.no. 609789065), which
                    directly connects the donors and the recipients. Our main
                    objective is to help anyone in need without any hesitations
                    and expectation of payback. The organisation doesn’t spend
                    any of the received donations on administration cost as we
                    believe that 100% of the donation should reach the recipient
                    in order to establish effective helping. All of our
                    volunteers, mobilised for the authentication of the problem,
                    logistics and delivery, cover their own expenses in order to
                    save the administrative expense.
                  </Text>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.3,
                      duration: 0.3,
                    },
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                  exit={{ opacity: 0 }}
                >
                  <Text
                    size="sm"
                    style={{
                      lineHeight: "1.6rem",
                    }}
                  >
                    On 25 April, 2015 an earthquake with a magnitude of 7.8
                    Richter scale struck Nepal along with continued aftershocks
                    occurring throughout the nation at the intervals of 15-20
                    minutes. The earthquake affected a huge population of the
                    nation with about 9,000 fatalities and nearly 22,000 injured
                    people.
                    <br /> <br />
                    All of the hospitals in Kathmandu were in chaos and
                    unmanaged with injured people flowing in rapidly. The
                    National Trauma Center, a government hospital, was open but
                    not on functionable state. Our organization founder, Mr.
                    Sudan Gurung, who was not even from the social-work
                    background, saw the miserable condition of the hospital and
                    decided to help however he could.
                    <br /> <br />
                    Nonetheless, the situation was much worse and one single
                    person couldn’t make a whole hospital operational so he
                    called out volunteers. After hearing about the condition of
                    the hospital 200 volunteers showed up for help. The number
                    grew from 200 to 300 reaching 1600 total.
                    <br /> <br />
                    Together, the young army of volunteers first volunteered in
                    order to help the hospital to run properly and then expanded
                    out of Kathmandu Valley to provide relief in 48 different
                    remote areas of Nepal beginning the third day of the 2015
                    earthquake.
                  </Text>
                </motion.div>
              )}
            </AnimatePresence>
          </Grid.Col>
        </Grid>

        <Divider />

        <Grid
          pt={{
            base: 32,
            lg: 160,
          }}
          gutter="xl"
        >
          <Grid.Col span={{ xs: 12, lg: 2 }} mt="xs">
            <motion.div
              variants={variantGeneralDelay(0)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={classes.root}
            >
              <Group
                onClick={() => {
                  setActiveSection(1);
                }}
                gap="xs"
              >
                <ArrowRight
                  weight="bold"
                  size={14}
                  style={{
                    color: theme.colors.brand[5],
                  }}
                />
                <Text
                  size="xs"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  INSPIRATION
                  <br /> & GUIDANCE
                </Text>
              </Group>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ xs: 12, lg: 5 }}>
            <motion.div
              variants={variantGeneralDelay(0.6)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={classes.root}
            >
              <Image
                style={{
                  width: 400,
                }}
                radius="lg"
                src={imgSanduk.src}
              />
            </motion.div>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, lg: 5 }}>
            <motion.div
              variants={variantGeneralDelay(0.9)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={classes.root}
            >
              <Text
                size="sm"
                style={{
                  lineHeight: "1.6rem",
                }}
              >
                Dr. Sanduk Ruit, is a world renowned ophthalmologist and
                philanthropist widely recognised for restoring the sight of over
                130,000 people. He is an eminent eye-surgeon and also the first
                to pioneer a method for delivering high-quality microsurgical
                procedures in remote eye camps. Dr. Sanduk’s humanitarian
                efforts have changed the lives of many, he has been a mentor and
                ally for Hami Nepal.
              </Text>

              <Text
                size="sm"
                mt="xs"
                style={{
                  lineHeight: "1.6rem",
                }}
              >
                His assistance has been paramount during times of crisis,
                providing his expertise in the medical field to carry out the
                task more efficiently. During the second lockdown, he shared
                Barbara foundation ‘s office space where Hami Nepal family has
                found a home. His continued moral support, guidance has helped
                us pursue a vision for better Nepal.
              </Text>

              <Text
                my="xl"
                size={"1.6rem"}
                style={{
                  lineHeight: "2rem",
                  fontWeight: 600,
                }}
              >
                When I am operating, my soul, my heart, my brain, everything is
                in the eye. Because I don't think about anything else, just the
                eye.{" "}
              </Text>

              <Text size={"3rem"} className="heading" mt="xl">
                Dr. Sanduk{" "}
                <span
                  style={{
                    color: theme.colors.brand[5],
                  }}
                >
                  {" "}
                  Ruit.
                </span>
              </Text>
              <Text
                mt="xs"
                size="xs"
                style={{
                  color: theme.colors.brand[4],
                }}
              >
                Founder and Executive Director of Tilganga Institute of
                Ophthalmology
              </Text>

              <Group gap={0} mt="xs">
                <ActionIcon variant="light" color="orange">
                  <InstagramLogo />
                </ActionIcon>
                <ActionIcon variant="subtle" color="blue">
                  <FacebookLogo />
                </ActionIcon>
                <ActionIcon variant="subtle" color="blue">
                  <Globe />
                </ActionIcon>
              </Group>
            </motion.div>
          </Grid.Col>
        </Grid>

        {/* <Grid pb={160} gutter="xl" mt={100}>
          <Grid.Col span={{ xs: 12, lg: 2 }} mt="xs">
            <div
              style={{
                position: "sticky",
                top: "0",
              }}
            >
              <Group
                onClick={() => {
                  setActiveSection(1);
                }}
                gap="xs"
              >
                <ArrowRight
                  weight="bold"
                  size={14}
                  style={{
                    color: theme.colors.brand[5],
                  }}
                />
                <Text
                  size="xs"
                  style={{
                    fontWeight: 700,
                  }}
                >
                  DR. SANDUK RUIT
                  <br />
                  NEWS & ARTICLES
                </Text>
              </Group>
            </div>
          </Grid.Col>

          <Grid.Col span={{ xs: 12, lg: 12 }} mt={100}>
            <Carousel
              withIndicators
              slideSize="33.33%"
              height={500}
              slideGap="md"
              align="start"
              loop
            >
              <Carousel.Slide>
                <Image
                  height={500}
                  src="https://images.unsplash.com/photo-1626695840539-a8821cdbcd9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3182&q=80"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  height={500}
                  src="https://images.unsplash.com/photo-1641213131995-06e2cf0790d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  height={500}
                  src="https://images.unsplash.com/photo-1677233861362-c3aa97f11638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=900&q=60"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  height={500}
                  src="https://images.unsplash.com/photo-1601581710442-ad98861aa24a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGVhcnRocXVha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  height={500}
                  src="https://images.unsplash.com/photo-1566151473216-7dc7f92db206?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=900&q=60"
                />
              </Carousel.Slide>
            </Carousel>
          </Grid.Col>
        </Grid> */}

        <motion.div
          variants={variantGeneralDelay(0)}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Divider mt={100} />
        </motion.div>

        <Grid py={100}>
          <Grid.Col span={{ xs: 12, lg: 2 }} mt="xs" visibleFrom="lg">
            <motion.div
              variants={variantGeneralDelay(0)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div
                style={{
                  position: "sticky",
                  top: "0",
                }}
              >
                <Group
                  onClick={() => {
                    setActiveSection(1);
                  }}
                  gap="xs"
                >
                  <ArrowRight
                    weight="bold"
                    size={14}
                    style={{
                      color: theme.colors.brand[5],
                    }}
                  />
                  <Text
                    size="xs"
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    SUPPORTERS
                  </Text>
                </Group>
              </div>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ xs: 12, lg: 4 }}>
            <motion.div
              variants={variantGeneralDelay(0.5)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={classes.root}
            >
              <Text
                className="heading"
                style={{
                  fontSize: "5rem",
                  lineHeight: "4rem",
                  color: theme.colors.brand[5],
                }}
                visibleFrom="lg"
              >
                BRANDS THAT SUPPORT US
              </Text>
              <Text
                className="heading"
                style={{
                  fontSize: "3rem",
                  lineHeight: "3rem",
                  color: theme.colors.brand[5],
                  textAlign: "center",
                }}
                hiddenFrom="lg"
              >
                BRANDS THAT SUPPORT US
              </Text>
            </motion.div>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, lg: 8 }} offset={{ lg: 2 }} py="xl">
            <AnimatePresence>
              <SimpleGrid spacing={0} cols={{ base: 2, md: 3, lg: 5 }}>
                {dummyData.supporters.map((sup: any, index: any) => (
                  <motion.div
                    variants={variantGeneralDelay(0)}
                    initial="initial"
                    whileInView="visible"
                  >
                    <Paper
                      key={index}
                      style={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 206,
                        width: 206,
                        background: "none",
                        margin: "auto",
                      }}
                    >
                      <Image
                        style={{
                          //filter: "invert(100%)",
                          maxHeight: "3rem",
                          maxWidth: "7rem",
                          objectFit: "contain",
                        }}
                        src={sup.img}
                      />

                      <div
                        style={{
                          color: theme.colors.brand[5],
                          position: "absolute",
                          top: 0,
                          left: 0,
                          opacity: 0.2,
                        }}
                      >
                        +
                      </div>
                      <div
                        style={{
                          color: theme.colors.brand[5],
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          opacity: 0.2,
                        }}
                      >
                        +
                      </div>
                      <div
                        style={{
                          color: theme.colors.brand[5],
                          position: "absolute",
                          top: 0,
                          right: 0,
                          opacity: 0.2,
                        }}
                      >
                        +
                      </div>
                      <div
                        style={{
                          color: theme.colors.brand[5],
                          position: "absolute",
                          bottom: 0,
                          right: 0,
                          opacity: 0.2,
                        }}
                      >
                        +
                      </div>
                    </Paper>
                  </motion.div>
                ))}
              </SimpleGrid>
            </AnimatePresence>
          </Grid.Col>
        </Grid>

        <motion.div
          variants={variantGeneralDelay(0)}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Divider />
        </motion.div>

        <Grid
          py={{
            base: 32,
            lg: 160,
          }}
        >
          <Grid.Col span={{ xs: 12 }} mt="xs">
            <motion.div
              variants={variantGeneralDelay(0)}
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <Text
                hiddenFrom="lg"
                className="heading"
                style={{
                  fontSize: "4rem",
                  lineHeight: "4rem",
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
              <Text
                visibleFrom="lg"
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
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
