"use client";

import { PropsWithChildren, useReducer } from "react";
//next
import { usePathname, useRouter } from "next/navigation";
//mantine
import {
  AppShell,
  Burger,
  Container,
  Grid,
  Group,
  Image,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
//context
import ContextNavProps from "@/context/nav";
//logo
import imgLogo from "@/assets/img/brand/logo_brand.png";
//framer
import { AnimatePresence, motion } from "framer-motion";
import jsonNav from "@/config/pages";
import PageTransition from "@ui/Misc/PageTransition";
import Link from "next/link";

export default function LayoutSite({ children }: PropsWithChildren) {
  // DEFINITIONS
  const theme = useMantineTheme();
  const pathname = usePathname();
  const Router = useRouter();

  // CONTEXTS

  const [state, dispatch] = useReducer(
    ContextNavProps.reducer,
    ContextNavProps.initial
  );

  // STATES

  const { show, label } = state;

  const Header = () => {
    return (
      <motion.div
        initial={{
          y: -50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.5,
        }}
      >
        <Container size="xxl" p={{ lg: "xl" }} py={{ base: "lg", lg: "xl" }}>
          <Grid>
            <Grid.Col span={{ base: 4, lg: 2 }}>
              <Link href="/">
                <Image
                  height={24}
                  fit="contain"
                  src={imgLogo.src}
                  style={{
                    objectPosition: "left",
                  }}
                />
              </Link>
            </Grid.Col>
            <Grid.Col span={4} hiddenFrom="md">
              <Text
                size="xs"
                style={{
                  textTransform: "uppercase",
                  textAlign: "center",
                }}
              >
                HAMI NEPAL
              </Text>
            </Grid.Col>
            <Grid.Col span={{ xs: 0, lg: 8 }} visibleFrom="lg">
              <AnimatePresence>
                {show ? (
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ type: "tween" }}
                  >
                    <Group gap="md" justify="center">
                      {jsonNav.map((navitem: any, index: number) => (
                        <Link href={navitem.url} key={index}>
                          <UnstyledButton
                            style={{
                              color:
                                pathname == navitem.url
                                  ? theme.colors.gray[4]
                                  : theme.colors.gray[7],
                            }}
                          >
                            <Text
                              size="xs"
                              style={{
                                textTransform: "uppercase",
                              }}
                            >
                              {navitem.label}
                            </Text>
                          </UnstyledButton>
                        </Link>
                      ))}
                    </Group>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ type: "tween" }}
                  >
                    {label}
                  </motion.div>
                )}
              </AnimatePresence>
            </Grid.Col>
            <Grid.Col span={{ base: 4, lg: 2 }}>
              <Group justify="flex-end">
                <Burger
                  opened={show}
                  onClick={() => {
                    dispatch({
                      type: "TOGGLE_NAV",
                    });
                  }}
                  size={14}
                />
              </Group>
            </Grid.Col>
          </Grid>
        </Container>
      </motion.div>
    );
  };

  return (
    <>
      <AppShell>
        <AppShell.Header
          style={{
            background: "none",
            border: "none",
          }}
        >
          <Header />
        </AppShell.Header>

        <AppShell.Main>
          {/* <PageTransition /> */}
          <motion.section
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.7,
              duration: 0.5,
            }}
          >
            <ContextNavProps.Context.Provider value={{ state, dispatch }}>
              {children}
            </ContextNavProps.Context.Provider>
          </motion.section>
        </AppShell.Main>
      </AppShell>
    </>
  );
}
