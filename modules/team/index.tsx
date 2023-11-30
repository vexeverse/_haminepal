"use client";

import React, { useContext, useEffect, useState } from "react";
//mantine
import {
  Badge,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Space,
  Tabs,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { getAllData } from "@api/team";
import CardTeam from "@ui/Card/Team";
import ContextNavProps from "@/context/nav";

import classes from "./team.module.css";

export default function () {
  const theme = useMantineTheme();

  const [activeTab, setActiveTab] = useState("donations");
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
            HAMI NEPAL /{" "}
            <span
              style={{
                color: theme.colors.red[6],
                fontWeight: 500,
              }}
            >
              TEAM
            </span>
          </Text>
        </>
      ),
    });
  }, []);

  return (
    <>
      <Space h={100} />

      <Container size="xl">
        <Text
          className="heading"
          style={{
            fontSize: "6rem",
            lineHeight: "6rem",
            color: "white",
          }}
        >
          TEAM/
          <br />
          <span
            style={{
              color: theme.colors.brand[5],
            }}
          >
            VOLUNTEER.
          </span>
        </Text>

        <Tabs
          classNames={{
            tab: classes.tab,
            list: classes.tab_list,
          }}
          keepMounted={false}
          value={activeTab}
          color="red"
          variant="pills"
        >
          <Grid py="xl" my="xl">
            <Grid.Col
              span={{ xs: 12, lg: 6 }}
              style={{
                borderBottom: 0,
              }}
            >
              <Tabs.List>
                <Tabs.Tab value="donations">
                  <Group>
                    Donations
                    <Badge size="xs" color="red">
                      122
                    </Badge>
                  </Group>
                </Tabs.Tab>
                <Tabs.Tab value="spent">
                  <Group>
                    Spent
                    <Badge size="xs" color="red">
                      122
                    </Badge>
                  </Group>
                </Tabs.Tab>
                <Tabs.Tab value="in-house">
                  <Group>
                    In-House
                    <Badge size="xs" color="red">
                      122
                    </Badge>
                  </Group>
                </Tabs.Tab>
              </Tabs.List>
            </Grid.Col>
          </Grid>
        </Tabs>

        <SimpleGrid cols={{ xs: 2, lg: 4 }}>
          {queryData.data.map((user: any, index: number) => (
            <CardTeam data={user} />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
