"use client";

import React, { useState, useEffect } from "react";
//nextjs

//mantine
import {
  ActionIcon,
  Group,
  Image,
  Paper,
  Text,
  useMantineTheme,
} from "@mantine/core";
//hooks
import {} from "@mantine/hooks";
//icons
import {
  ArrowArcRight,
  ArrowCircleRight,
  CircleDashed,
} from "@phosphor-icons/react";
//leaflet
import { MapContainer, TileLayer, useMap } from "react-leaflet";
//query
import { useQuery } from "@tanstack/react-query";
//api
import { getAllData } from "@api/campaign/causes";
//styles
import classes from "./map.module.css";
//framer
import { motion, AnimatePresence } from "framer-motion";
//components
import RenderPointers from "./components/RenderPointers";

export default function () {
  // * DEFINITIONS
  const theme = useMantineTheme();

  // * STATES

  const [activeCause, setActiveCause] = useState<null | number>(null);
  const [activeCauseData, setActiveCauseData] = useState<any>({});

  const [zoom, setZoom] = useState(8);

  // * PRELOADING

  useEffect(() => {}, [zoom]);

  const queryData = useQuery({
    queryKey: ["campaign", "causes"],
    queryFn: async () => {
      const res = getAllData();

      return res;
    },
    initialData: [],
  });

  // * FUNCTIONALITY

  // * COMPONENTS

  if (queryData.isLoading) {
    return <></>;
  } else {
    return (
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        className={classes.root}
      >
        <MapContainer
          //@ts-ignore
          center={[28.4, 84]}
          zoom={zoom}
          scrollWheelZoom={false}
          style={{
            height: "100vh",
          }}
          markerZoomAnimation={true}
        >
          <TileLayer
            //@ts-ignore
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <RenderPointers
            data={queryData.data}
            active={activeCause}
            setActive={(key: any, data: any) => {
              setActiveCause(key);
              setActiveCauseData(data);

              setZoom(10);
            }}
          />
        </MapContainer>

        <div className={classes.infobox_container}>
          <AnimatePresence>
            {activeCause == null ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Paper className={classes.infobox} p="xl">
                  <Text size="xs">Click over a dot for info</Text>
                </Paper>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Paper className={classes.infobox} shadow="xl" radius="md">
                  <Image src={activeCauseData.image_album[0]?.image} />
                  <Paper p="xl">
                    <Text
                      size="xs"
                      style={{
                        color: theme.colors.gray[6],
                        textTransform: "uppercase",
                      }}
                    >
                      {activeCauseData.category}
                    </Text>
                    <Text
                      mt="sm"
                      mb="md"
                      className="heading"
                      style={{
                        color: theme.colors.gray[0],
                        fontSize: "2rem",
                        lineHeight: "2rem",
                      }}
                    >
                      {activeCauseData.title}
                    </Text>
                    <Group gap="xs">
                      <Text
                        size="xs"
                        style={{
                          color: theme.colors.red[5],
                        }}
                      >
                        {activeCauseData.start_date}
                      </Text>
                      <CircleDashed
                        weight="fill"
                        size={4}
                        color={theme.colors.red[4]}
                      />
                      <Text
                        size="xs"
                        style={{
                          color: theme.colors.red[5],
                        }}
                      >
                        {activeCauseData.end_date || "Ongoing"}
                      </Text>
                    </Group>
                  </Paper>
                </Paper>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
    );
  }
}
