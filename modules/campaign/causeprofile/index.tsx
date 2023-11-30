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
  Image,
  Progress,
  Tooltip,
} from "@mantine/core";
import { useMouse, useViewportSize, useWindowScroll } from "@mantine/hooks";
//motion
import { motion, useAnimate } from "framer-motion";
//styles
import classes from "./causes.module.css";
//react-query
import { useQuery } from "@tanstack/react-query";
//data
import { getAllData, getSingleData } from "@api/campaign/causes";
import { ArrowLeft, ArrowRight, MagnifyingGlass } from "@phosphor-icons/react";
import { Carousel } from "@mantine/carousel";
import ContextNavProps from "@/context/nav";
//images

export default function ModuleCampaignSingle() {
  //DEFINITIONS

  //theme
  const theme = useMantineTheme();

  // CONTEXT
  const { state, dispatch } = useContext(ContextNavProps.Context);

  // PRELOADER

  const queryData = useQuery({
    queryKey: ["campaign", "causes", "single"],
    queryFn: async () => {
      const res = getSingleData();

      return res;
    },
    initialData: {
      image_album: [],
      campaign_phases: [],
    },
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
            HAMI NEPAL / CAMPAIGN / CAUSES{" "}
            <span
              style={{
                color: theme.colors.red[6],
                fontWeight: 500,
              }}
            >
              CAUSE PROFILE
            </span>
          </Text>
        </>
      ),
    });
  }, []);

  const links = [
    { id: 1, label: "Overview" },
    { id: 2, label: "Phases" },
    { id: 3, label: "The Urgency of Now" },
    { id: 4, label: "Transparency" },
    { id: 5, label: "Image" },
  ];

  return (
    <>
      <Container size="xl" pb={"xl"} pt={100}>
        <Grid my="xl">
          <Grid.Col span={{ xs: 12, lg: 3 }}>
            <Group>
              <ArrowLeft weight="bold" />
              <Text size="sm">BACK TO CAUSES</Text>
            </Group>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, lg: 9 }}>
            <Text
              className="heading"
              style={{
                fontSize: "5rem",
                lineHeight: "5rem",
                color: theme.colors.gray[0],
              }}
            >
              {queryData.data.title}
            </Text>

            <Group my="xl">
              <Text
                size="sm"
                style={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: theme.colors.brand[5],
                }}
              >
                {queryData.data.category}
              </Text>

              <Divider orientation="vertical" />

              <Group gap={4}>
                <Text
                  size="sm"
                  style={{
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  {queryData.data.start_date}
                </Text>
                <Text
                  size="sm"
                  style={{
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  -
                </Text>
                <Text
                  size="sm"
                  style={{
                    textTransform: "uppercase",
                    fontWeight: 600,
                    color: theme.colors.teal[7],
                  }}
                >
                  {queryData.data.end_date || "Ongoing"}
                </Text>
              </Group>

              <Divider orientation="vertical" />

              <Text
                size="sm"
                style={{
                  textTransform: "uppercase",
                  fontWeight: 600,
                }}
              >
                23 Volunteers / 223 Participants
              </Text>
            </Group>
          </Grid.Col>
        </Grid>
      </Container>

      <Container size="xl" my="xl">
        <Image height={700} src={queryData.data.image_album[0]?.image} />
      </Container>

      <Container size="lg" mt={100}>
        <Grid>
          <Grid.Col span={{ xs: 12, lg: 12 }}>
            <Grid gutter="xl">
              <Grid.Col span={12} mb="xl">
                <Text
                  size="sm"
                  style={{
                    color: theme.colors.brand[5],
                    fontWeight: 600,
                  }}
                >
                  {"> OVERVIEW"}
                </Text>
              </Grid.Col>
              <Grid.Col span={{ xs: 12, lg: 4 }}>
                <Text
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    lineHeight: "2rem",
                  }}
                >
                  Nepal Stands in Solidarity with Turkey in Times of Crisis In
                  the wake of the devastating earthquake that has struck Turkey,
                  Nepal, a nation familiar with the tremors of the earth,
                  extends its heartfelt condolences and offers unwavering
                  support to the people of Turkey.
                </Text>

                <Text
                  mt="xl"
                  size="sm"
                  style={{
                    fontWeight: 500,
                    textAlign: "justify",
                  }}
                >
                  The recent earthquake in Turkey has left countless families
                  homeless, injured, and grieving. It is in these moments that
                  the global community must unite to alleviate suffering and
                  provide relief. Nepal, through its own experiences with
                  natural disasters, recognizes the urgency of immediate action.
                  Nepal has a long history of resilience and community support.
                </Text>
              </Grid.Col>
              <Grid.Col span={{ xs: 12, lg: 4 }}>
                <Text
                  size="sm"
                  style={{
                    fontWeight: 500,
                    textAlign: "justify",
                  }}
                >
                  The recent earthquake in Turkey has left countless families
                  homeless, injured, and grieving. It is in these moments that
                  the global community must unite to alleviate suffering and
                  provide relief. Nepal, through its own experiences with
                  natural disasters, recognizes the urgency of immediate action.
                  Nepal has a long history of resilience and community support.
                </Text>

                <Image
                  mt={"xl"}
                  height={400}
                  src="https://images.unsplash.com/photo-1621077742331-2df96a07cca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80"
                />
                <Text
                  mt="xs"
                  style={{
                    color: theme.colors.gray[6],
                  }}
                  size="xs"
                >
                  Source: Picture taken near XX Neighbourhood.
                </Text>
              </Grid.Col>

              <Grid.Col span={{ xs: 12, lg: 4 }}>
                <Text
                  size="sm"
                  style={{
                    fontWeight: 500,
                    textAlign: "justify",
                  }}
                >
                  The recent earthquake in Turkey has left countless families
                  homeless, injured, and grieving. It is in these moments that
                  the global community must unite to alleviate suffering and
                  provide relief. Nepal, through its own experiences with
                  natural disasters, recognizes the urgency of immediate action.
                  Nepal has a long history of resilience and community support.
                  As a nation that rebuilt itself from the ruins of a
                  devastating earthquake, Nepal understands the importance of
                  global solidarity. Nepali citizens, NGOs, and the government
                  have come together to launch a relief campaign for Turkey. Our
                  commitment extends beyond borders, as we stand shoulder to
                  shoulder with the Turkish people.
                </Text>

                <Text
                  mt="xl"
                  size="sm"
                  style={{
                    fontWeight: 500,
                    textAlign: "justify",
                  }}
                >
                  As a nation that rebuilt itself from the ruins of a
                  devastating earthquake, Nepal understands the importance of
                  global solidarity. Nepali citizens, NGOs, and the government
                  have come together to launch a relief campaign for Turkey. Our
                  commitment extends beyond borders, as we stand shoulder to
                  shoulder with the Turkish people.
                </Text>
              </Grid.Col>

              <Grid.Col span={12}>
                <Divider my={73} />

                <Text
                  mt="xl"
                  className="heading"
                  style={{
                    fontSize: "6rem",
                    lineHeight: "6rem",
                  }}
                >
                  CAMPAIGN{" "}
                  <span
                    style={{
                      color: theme.colors.brand[5],
                    }}
                  >
                    PHASES
                  </span>
                </Text>
              </Grid.Col>

              <Grid.Col span={12} mb="xl">
                <SimpleGrid
                  spacing="xs"
                  mt="xl"
                  cols={{
                    xs: 2,
                    lg: 3,
                  }}
                >
                  {queryData.data.campaign_phases.map(
                    (phase: any, index: any) => (
                      <Paper
                        radius="md"
                        style={{
                          background: `url(${phase.img})`,
                          backgroundSize: "cover",
                        }}
                      >
                        <Paper
                          radius="md"
                          style={{
                            background: "rgba(0, 0, 0, 0.56)",
                          }}
                          p="xl"
                          pt={200}
                        >
                          <Group>
                            <Text
                              style={{
                                color: theme.colors.gray[1],
                              }}
                              size="xs"
                            >
                              PHASE {++index}
                            </Text>
                            <Text
                              my="xs"
                              size="xs"
                              style={{
                                color: theme.colors.brand[5],
                                textTransform: "uppercase",
                              }}
                            >
                              {phase.type}
                            </Text>
                          </Group>

                          <Text
                            my="xs"
                            style={{
                              fontSize: "3rem",
                              lineHeight: "3rem",
                              color: theme.colors.gray[0],
                            }}
                            className="heading"
                          >
                            {phase.name}
                          </Text>

                          <Text
                            size="xs"
                            style={{
                              color: theme.colors.gray[5],
                            }}
                          >
                            {phase.description}
                          </Text>
                        </Paper>
                      </Paper>
                    )
                  )}
                </SimpleGrid>
              </Grid.Col>

              {/* <Grid.Col span={12} my={73}>
                <Divider />
              </Grid.Col>

              <Grid.Col span={{ xs: 12, lg: 8 }}>
                <Image
                  height={300}
                  src={queryData.data.image_album[1]?.image}
                />
              </Grid.Col>
              <Grid.Col span={{ xs: 12, lg: 4 }}>
                <Text
                  mb="xl"
                  size="xs"
                  style={{
                    color: theme.colors.brand[5],
                    fontWeight: 600,
                  }}
                >
                  {"> CRITICALITY"}
                </Text>
                <Text
                  className="heading"
                  style={{
                    fontSize: "6rem",
                    lineHeight: "5rem",
                  }}
                >
                  THE{" "}
                  <span
                    style={{
                      color: theme.colors.brand[5],
                    }}
                  >
                    URGENCY OF NOW
                  </span>
                </Text>
              </Grid.Col>
              <Grid.Col span={{ xs: 12, lg: 4 }}>
                <Text
                  size="sm"
                  style={{
                    fontWeight: 500,
                    textAlign: "justify",
                  }}
                >
                  The recent earthquake in Turkey has left countless families
                  homeless, injured, and grieving. It is in these moments that
                  the global community must unite to alleviate suffering and
                  provide relief. Nepal, through its own experiences with
                  natural disasters, recognizes the urgency of immediate action.
                  The recent earthquake in Turkey has left countless families
                  homeless, injured, and grieving. It is in these moments that
                  the global community must unite to alleviate suffering and
                  provide relief. Nepal, through its own experiences with
                  natural disasters, recognizes the urgency of immediate action.
                </Text>
              </Grid.Col>
              <Grid.Col span={{ xs: 12, lg: 4 }}>
                <Text
                  size="sm"
                  style={{
                    fontWeight: 500,
                    textAlign: "justify",
                  }}
                >
                  Nepal has a long history of resilience and community
                  support.As a nation that rebuilt itself from the ruins of a
                  devastating earthquake, Nepal understands the importance of
                  global solidarity. Nepali citizens, NGOs, and the government
                  have come together to launch a relief campaign for Turkey.
                  Nepal has a long history of resilience and community
                  support.As a nation that rebuilt itself from the ruins of a
                  devastating earthquake, Nepal understands the importance of
                  global solidarity. Nepali citizens, NGOs, and the government
                  have come together to launch a relief campaign for Turkey.
                </Text>
              </Grid.Col>
              <Grid.Col span={{ xs: 12, lg: 4 }}>
                <Text
                  size="sm"
                  style={{
                    fontWeight: 500,
                    textAlign: "justify",
                  }}
                >
                  Our commitment extends beyond borders, as we stand shoulder to
                  shoulder with the Turkish people. As a nation that rebuilt
                  itself from the ruins of a devastating earthquake, Nepal
                  understands the importance of global solidarity. Nepali
                  citizens, NGOs, and the government have come together to
                  launch a relief campaign for Turkey.Our commitment extends
                  beyond borders, as we stand shoulder to shoulder with the
                  Turkish people. As a nation that rebuilt itself from the ruins
                  of a devastating earthquake, Nepal understands the importance
                  of global solidarity. Nepali citizens.
                </Text>
              </Grid.Col> */}

              <Grid.Col span={12} my={32}>
                <Divider my={73} />
              </Grid.Col>

              <Grid.Col span={12} mb="xl">
                <Group justify="space-between">
                  <Text
                    mb="xl"
                    size="sm"
                    style={{
                      color: theme.colors.gray[5],
                      fontWeight: 600,
                    }}
                  >
                    {"> TRANSPARENCY"}
                  </Text>
                </Group>
                <Text
                  className="heading"
                  style={{
                    fontSize: "6rem",
                    lineHeight: "5rem",
                  }}
                >
                  ACCOUNTING TRANSPARENCY
                </Text>

                <Text
                  mt="xl"
                  mb="xl"
                  size="sm"
                  style={{
                    color: theme.colors.brand[5],
                    fontWeight: 600,
                  }}
                >
                  Click here for a full transparency report.
                </Text>
              </Grid.Col>

              <Grid.Col span={{ xs: 12, lg: 12 }}>
                <SimpleGrid spacing="xl" cols={{ xs: 1, lg: 3 }}>
                  <div>
                    <Text size="xs">DONATION AMOUNT RECIEVED</Text>
                    <Text
                      size="xl"
                      className="heading"
                      style={{
                        fontSize: "4rem",
                      }}
                    >
                      1,67,000
                      <span
                        style={{
                          color: theme.colors.gray[5],
                        }}
                      >
                        .00
                      </span>
                    </Text>

                    <Progress.Root size={8} my="lg">
                      <Tooltip label="Funds Donated - 12,32,00.00">
                        <Progress.Section
                          value={64}
                          color={theme.colors.teal[7]}
                        />
                      </Tooltip>
                      <Tooltip label="Kinds Donated - 12,32,00.00">
                        <Progress.Section
                          value={36}
                          color={theme.colors.orange[4]}
                        />
                      </Tooltip>
                    </Progress.Root>
                  </div>
                  <div>
                    <Text size="xs" style={{}}>
                      AMOUNT USED
                    </Text>
                    <Text
                      size="xl"
                      className="heading"
                      style={{
                        fontSize: "4rem",
                      }}
                    >
                      1,17,000
                      <span
                        style={{
                          color: theme.colors.gray[5],
                        }}
                      >
                        .00
                      </span>
                    </Text>

                    <Progress.Root size={8} my="lg">
                      <Tooltip label="Operation">
                        <Progress.Section
                          value={64}
                          color={theme.colors.blue[7]}
                        />
                      </Tooltip>
                      <Tooltip label="Goods Purchase">
                        <Progress.Section
                          value={36}
                          color={theme.colors.grape[4]}
                        />
                      </Tooltip>
                      <Tooltip label="Donated to Victims">
                        <Progress.Section
                          value={36}
                          color={theme.colors.red[4]}
                        />
                      </Tooltip>
                      <Tooltip label="Remaining Funds">
                        <Progress.Section
                          value={36}
                          color={theme.colors.gray[4]}
                        />
                      </Tooltip>
                    </Progress.Root>
                  </div>
                  <div>
                    <Text size="xs" style={{}}>
                      REMAINING AMOUNT
                    </Text>
                    <Text
                      size="xl"
                      className="heading"
                      style={{
                        fontSize: "4rem",
                      }}
                    >
                      27,000
                      <span
                        style={{
                          color: theme.colors.gray[5],
                        }}
                      >
                        .00
                      </span>
                    </Text>
                  </div>
                </SimpleGrid>
              </Grid.Col>

              <Grid.Col span={12} my={32}>
                <Divider my={73} />
              </Grid.Col>

              <Grid.Col span={12} mb="xl">
                <Text
                  mb="xl"
                  size="sm"
                  style={{
                    color: theme.colors.brand[5],
                    fontWeight: 600,
                  }}
                >
                  {"> EXPOSURE & MEDIA PRESENCE"}
                </Text>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>

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

      <Container size="lg" mt={100}>
        <Grid>
          <Grid.Col span={{ xs: 12, lg: 12 }}>
            <Grid gutter="xl">
              <Grid.Col span={12} mb="xl">
                <Text
                  size="sm"
                  style={{
                    color: theme.colors.brand[5],
                    fontWeight: 600,
                  }}
                >
                  {"> CONCLUSION"}
                </Text>

                <Text
                  mt="xl"
                  className="heading"
                  style={{
                    fontSize: "6rem",
                    lineHeight: "5rem",
                  }}
                >
                  THE OUTCOME
                </Text>
              </Grid.Col>
              <Grid.Col span={{ xs: 12, lg: 4 }}>
                <Text
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    lineHeight: "2rem",
                  }}
                >
                  Nepal Stands in Solidarity with Turkey in Times of Crisis In
                  the wake of the devastating earthquake that has struck Turkey,
                  Nepal, a nation familiar with the tremors of the earth,
                  extends its heartfelt condolences and offers unwavering
                  support to the people of Turkey.
                </Text>

                <Text
                  mt="xl"
                  size="sm"
                  style={{
                    fontWeight: 500,
                    textAlign: "justify",
                  }}
                >
                  The recent earthquake in Turkey has left countless families
                  homeless, injured, and grieving. It is in these moments that
                  the global community must unite to alleviate suffering and
                  provide relief. Nepal, through its own experiences with
                  natural disasters, recognizes the urgency of immediate action.
                  Nepal has a long history of resilience and community support.
                  The recent earthquake in Turkey has left countless families
                  homeless, injured, and grieving. It is in these moments that
                  the global community must unite to alleviate suffering and
                  provide relief.
                </Text>
                <Text
                  mt="xl"
                  size="sm"
                  style={{
                    fontWeight: 500,
                    textAlign: "justify",
                  }}
                >
                  As a nation that rebuilt itself from the ruins of a
                  devastating earthquake, Nepal understands the importance of
                  global solidarity. Nepali citizens, NGOs, and the government
                  have come together to launch a relief campaign for Turkey. Our
                  commitment extends beyond borders, as we stand shoulder to
                  shoulder with the Turkish people.
                </Text>
              </Grid.Col>
              <Grid.Col span={{ xs: 12, lg: 4 }}>
                <Text
                  size="sm"
                  style={{
                    fontWeight: 500,
                    textAlign: "justify",
                  }}
                >
                  The recent earthquake in Turkey has left countless families
                  homeless, injured, and grieving. It is in these moments that
                  the global community must unite to alleviate suffering and
                  provide relief. Nepal, through its own experiences with
                  natural disasters, recognizes the urgency of immediate action.
                  Nepal has a long history of resilience and community support.
                </Text>

                <Image
                  mt={"xl"}
                  height={400}
                  src="https://images.unsplash.com/photo-1621077742331-2df96a07cca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80"
                />
                <Text
                  mt="xs"
                  style={{
                    color: theme.colors.gray[6],
                  }}
                  size="xs"
                >
                  Source: Picture taken near XX Neighbourhood.
                </Text>

                <Text
                  mt="xl"
                  size="sm"
                  style={{
                    fontWeight: 500,
                    textAlign: "justify",
                  }}
                >
                  The recent earthquake in Turkey has left countless families
                  homeless, injured, and grieving. It is in these moments that
                  the global community must unite to alleviate suffering and
                  provide relief. Nepal, through its own experiences with
                  natural disasters, recognizes the urgency of immediate action.
                  Nepal has a long history of resilience and community support.
                </Text>
              </Grid.Col>

              <Grid.Col span={{ xs: 12, lg: 4 }}>
                <Image
                  height={400}
                  src="https://images.unsplash.com/photo-1621077742331-2df96a07cca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3570&q=80"
                />
                <Text
                  mt="xs"
                  style={{
                    color: theme.colors.gray[6],
                  }}
                  size="xs"
                >
                  Source: Picture taken near XX Neighbourhood.
                </Text>

                <Text
                  mt="xl"
                  size="sm"
                  style={{
                    fontWeight: 500,
                    textAlign: "justify",
                  }}
                >
                  The recent earthquake in Turkey has left countless families
                  homeless, injured, and grieving. It is in these moments that
                  the global community must unite to alleviate suffering and
                  provide relief. Nepal, through its own experiences with
                  natural disasters, recognizes the urgency of immediate action.
                  Nepal has a long history of resilience and community support.
                  As a nation that rebuilt itself from the ruins of a
                  devastating earthquake, Nepal understands the importance of
                  global solidarity. Nepali citizens, NGOs, and the government
                  have come together to launch a relief campaign for Turkey. Our
                  commitment extends beyond borders, as we stand shoulder to
                  shoulder with the Turkish people.
                </Text>
              </Grid.Col>

              <Grid.Col span={12} mt="xl">
                <iframe
                  width="100%"
                  height="600"
                  src="https://www.youtube.com/embed/GNDLB7hrGzE?si=6N6a883XpCg0uoZP"
                  title="YouTube video player"
                  //@ts-ignore
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
