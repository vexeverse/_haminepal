"use client";

import React, { useEffect, useState } from "react";
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
} from "@mantine/core";
import { useMouse, useViewportSize, useWindowScroll } from "@mantine/hooks";
//motion
import { motion, useAnimate } from "framer-motion";
//styles
import classes from "./hero.module.css";
//react-query
import { useQuery } from "@tanstack/react-query";
//data
import { getAllData } from "@api/campaign/causes";
import { ArrowLeft, ArrowRight, Circle } from "@phosphor-icons/react";

//components

export default function ModuleCampaignCauses() {
  ///// DEFINITIONS
  const theme = useMantineTheme();
  const pathname = usePathname();

  //scroll
  const [scroll, scrollTo] = useWindowScroll();

  //hooks

  const mousePosition = useMouse();
  const { width, height } = useViewportSize();

  ///// PRELOAD

  // pre states
  const [activeCause, setActiveCause] = useState<any>({});
  const [activeIndex, setActiveIndex] = useState(0);

  // api preload
  const queryData = useQuery({
    queryKey: ["campaign", "causehero"],
    queryFn: async () => {
      const res = getAllData();

      setActiveCause(res[0]);
      return res;
    },
  });

  useEffect(() => {}, []);

  ///// COMPONENTS

  ///// FUNCTIONS

  ////// ANIMATIONS

  // Framer Pointers

  const [animationProgress, setAnimationProgress] = useState(100);

  const [scopeTextMain, animateTextMain] = useAnimate();
  const [scopeTextSub, animateTextSub] = useAnimate();
  const [scopeImageContainer, animateImageContainer] = useAnimate();
  const [scopeControl, animateControl] = useAnimate();

  // OnClick Handlers
  function triggerNext() {
    triggerAnimation();

    setTimeout(() => {
      const newIndex =
        activeIndex == queryData.data.length - 1 ? 0 : activeIndex + 1;

      setActiveCause(queryData.data[newIndex]);
      setActiveIndex(newIndex);
      setAnimationProgress(100);

      animateTextMain(scopeTextMain.current, {
        y: 0,
        opacity: 1,
      });

      animateTextSub(scopeTextSub.current, {
        y: 0,
        opacity: 1,
      });

      animateControl(scopeControl.current, {
        y: 0,
        opacity: 1,
      });

      animateImageContainer(scopeImageContainer.current, {
        scale: 1,
        opacity: 1,
      });
    }, 1000);
  }

  function triggerPrev() {
    triggerAnimation();

    setTimeout(() => {
      const newIndex =
        activeIndex == 0 ? queryData.data.length - 1 : activeIndex - 1;

      setActiveCause(queryData.data[newIndex]);
      setActiveIndex(newIndex);
      setAnimationProgress(100);

      animateTextMain(scopeTextMain.current, {
        y: 0,
        opacity: 1,
      });

      animateTextSub(scopeTextSub.current, {
        y: 0,
        opacity: 1,
      });

      animateControl(scopeControl.current, {
        y: 0,
        opacity: 1,
      });

      animateImageContainer(scopeImageContainer.current, {
        scale: 1,
        opacity: 1,
      });
    }, 1000);
  }

  function triggerAnimation() {
    setAnimationProgress(0);

    animateTextMain(scopeTextMain.current, {
      y: -10,
      opacity: 0,
    });

    animateTextSub(scopeTextSub.current, {
      y: -10,
      opacity: 0,
    });

    animateControl(scopeControl.current, {
      opacity: 0,
    });

    animateImageContainer(scopeImageContainer.current, {
      scale: 1.2,
      opacity: 0,
    });
  }

  if (queryData.isLoading) {
    return <section className={classes.root}></section>;
  }

  if (queryData.isError) {
    return <>Error Loading</>;
  }

  // Animation States

  const stageText = {
    transition: {
      y: -10,
      opacity: 0,
    },
    active: {
      opacity: 1,
      y: 0,
    },
  };

  const stageImage = {
    transition: {
      y: -10,
      opacity: 0,
    },
    active: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <section ref={mousePosition.ref} className={classes.root}>
        <div className={classes.image} ref={scopeImageContainer}>
          <div className={classes.image_overlay}></div>

          <motion.div
            initial={{ zIndex: 0, opacity: 0.5 }}
            animate={{
              y: animationProgress == 100 ? mousePosition.y / 10 : 0,
              x:
                animationProgress == 100
                  ? mousePosition.x / 30 - mousePosition.x / 15
                  : 0,
              zIndex: 0,
              opacity: 0.3,
            }}
            transition={{ type: "tween" }}
          >
            <img
              src={activeCause.imgBack}
              className={classes.image_background}
            />
          </motion.div>

          <motion.div
            initial={{ zIndex: 2 }}
            animate={{
              y: animationProgress == 100 ? mousePosition.y / 30 : 0,
              x:
                animationProgress == 100
                  ? mousePosition.x / 30 - mousePosition.x / 15
                  : 0,
              zIndex: 2,
            }}
            transition={{ type: "tween" }}
          >
            <div className={classes.image_shape_container}>
              <Center>
                <div className={classes.image_shape}></div>
              </Center>
            </div>
          </motion.div>

          <motion.div
            initial={{ zIndex: 3 }}
            animate={{
              y: animationProgress == 100 ? mousePosition.y / 30 : 0,
              zIndex: 3,
            }}
            transition={{ type: "tween" }}
          >
            <img
              src={activeCause.imgFront}
              className={classes.image_foreground}
            />
          </motion.div>

          <div className={classes.image_backlines}>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>

        <div className={classes.info}>
          <Container size="xl" pb={"5rem"}>
            <Grid ref={scopeTextMain}>
              <Grid.Col span={12}>
                <Group gap="xs">
                  <Text
                    size="xs"
                    style={{
                      fontWeight: 700,
                      color: theme.colors.gray[5],
                    }}
                  >
                    {activeCause.start_date}
                  </Text>
                  <Text size="xs">-</Text>
                  <Text size="xs">{activeCause.end_date || "Ongoing"}</Text>
                </Group>
              </Grid.Col>
              <Grid.Col span={{ sm: 12, lg: 7 }}>
                <Text
                  className="heading"
                  visibleFrom="lg"
                  style={{
                    fontWeight: 700,
                    fontSize: "5rem",
                    lineHeight: "6rem",
                  }}
                >
                  {activeCause.title}
                </Text>
                <Text
                  className="heading"
                  hiddenFrom="lg"
                  style={{
                    fontWeight: 700,
                    fontSize: "3rem",
                    lineHeight: "3rem",
                  }}
                >
                  {activeCause.title}
                </Text>

                <Text
                  mt="xs"
                  size="xs"
                  style={{
                    fontWeight: 700,
                    color: theme.colors.red[5],
                  }}
                >
                  13 Volunteers | 122 Participants
                </Text>
              </Grid.Col>
              <Grid.Col
                span={{ sm: 12, lg: 4 }}
                offset={{ lg: 1 }}
                ref={scopeTextSub}
              >
                <Text size="xs">{activeCause.description}</Text>
                <Space h={16} />
                <Anchor size="xs" href={pathname + "/" + activeCause.id}>
                  READ MORE
                </Anchor>
              </Grid.Col>
            </Grid>
          </Container>
        </div>
        <div className={classes.controller} ref={scopeControl}>
          <Group justify="space-between" mt={54}>
            <UnstyledButton
              onClick={triggerPrev}
              className={classes.btnControl}
            >
              <Group>
                <Text size="xs">
                  {activeIndex == 0
                    ? queryData.data[queryData.data.length - 1].name
                    : queryData.data[activeIndex - 1].name}
                </Text>
                <Group gap="xs">
                  <ArrowLeft size={14} />
                  <Text size="xs">Back</Text>
                </Group>
              </Group>
            </UnstyledButton>

            <UnstyledButton
              onClick={triggerNext}
              className={classes.btnControl}
            >
              <Group justify="flex-end">
                <Text
                  style={{
                    textAlign: "right",
                    fontSize: 12,
                  }}
                >
                  {activeIndex == queryData.data.length - 1
                    ? queryData.data[0].name
                    : queryData.data[activeIndex + 1].name}
                </Text>

                <Group gap="xs">
                  <Text size="xs">Next</Text>
                  <ArrowRight size={14} />
                </Group>
              </Group>
            </UnstyledButton>
          </Group>
        </div>
      </section>
    </>
  );
}
