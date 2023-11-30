"use client";

import React, { useState, useEffect } from "react";
import ReactDOMServer from "react-dom/server";
//nextjs

import { usePathname } from "next/navigation";
//mantine
import {
  Button,
  Card,
  Divider,
  Group,
  Image,
  Paper,
  Text,
  useMantineTheme,
} from "@mantine/core";
//icon
import { CircleDashed, MapPin } from "@phosphor-icons/react";
//hooks
import {
  useHover,
  useMouse,
  useViewportSize,
  useWindowScroll,
} from "@mantine/hooks";
//motion
import { motion } from "framer-motion";
//leaflet
import {
  Circle,
  CircleMarker,
  LayerGroup,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";

//styles
import classes from "./map.module.css";
//reactQuery
import { useQuery } from "@tanstack/react-query";
//api
import { getAllData } from "@api/campaign/causes";

export default function Map() {
  // DEFINITIONS
  //theme
  const theme = useMantineTheme();
  const pathname = usePathname();

  //   //scroll
  //   const [scroll, scrollTo] = useWindowScroll();

  //   //hooks

  //   const mousePosition = useMouse();
  //   const { width, height } = useViewportSize();

  //states

  // PRELOADER

  // pre states

  const [zoom, setZoom] = useState(8);

  const [activeCause, setActiveCause] = useState<null | number>(null);
  const [activeCauseData, setActiveCauseData] = useState<any>({});

  // useEffect

  useEffect(() => {}, []);

  // query

  const queryCause = useQuery({
    queryKey: ["campaign", "causes"],
    queryFn: async () => {
      const res = getAllData();

      return res;
    },
    initialData: [],
  });

  //components

  function RenderPointers() {
    function RenderCircle({ cause, key }: { cause: any; key: number }) {
      if (key !== activeCause) {
        return (
          <LayerGroup key={key}>
            <CircleMarker
              eventHandlers={{
                click: () => {
                  setActiveCause(key);
                  setActiveCauseData(cause);
                },
              }}
              center={[cause.geo_lat, cause.geo_long]}
              pathOptions={{
                fillColor: theme.colors.red[5],
                stroke: false,
                opacity: 1,
                fillOpacity: 0.6,
              }}
            />
          </LayerGroup>
        );
      } else {
        return (
          <LayerGroup key={key}>
            <CircleMarker
              eventHandlers={{
                click: () => {
                  setActiveCause(key);
                  setActiveCauseData(cause);
                },
              }}
              center={[cause.geo_lat, cause.geo_long]}
              pathOptions={{
                fillColor: theme.colors.red[5],
                stroke: false,
                opacity: 1,
                fillOpacity: 0.6,
              }}
            />
            <CircleMarker
              eventHandlers={{
                click: () => {
                  setActiveCause(key);
                  setActiveCauseData(cause);
                },
              }}
              center={[cause.geo_lat, cause.geo_long]}
              pathOptions={{
                fillColor: theme.colors.gray[0],
                stroke: false,
                opacity: 1,
                fillOpacity: 1,
              }}
            />
          </LayerGroup>
        );
      }
    }

    if (queryCause.isLoading) {
      return <></>;
    }

    return queryCause.data.map((cause: any, index: number) => (
      <RenderCircle cause={cause} key={index} />
    ));
  }

  return (
    <>
      <div
        style={{
          height: "100vh",
        }}
      >
        <MapContainer
          //@ts-ignore
          center={[28.4, 84]}
          zoom={8}
          scrollWheelZoom={false}
          style={{
            height: "100vh",
          }}
        >
          <TileLayer
            //@ts-ignore
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <RenderPointers />
        </MapContainer>

        <motion.div className={classes.infobox_container}>
          {activeCause == null ? (
            <Paper
              radius="md"
              px="xl"
              py="lg"
              shadow="xl"
              className={classes.infobox}
            >
              <Text
                size="xs"
                style={{
                  color: theme.colors.gray[9],
                  //background: 'rgba(0, 0, 0, 0.1)',
                  backdropFilter: "blur(8px)",
                }}
              >
                Hover over a dot for info
              </Text>
            </Paper>
          ) : (
            <Paper
              radius="md"
              shadow="xl"
              p="xl"
              className={classes.infobox}
              style={{
                //minHeight: 300,
                width: 400,
                backdropFilter: "blur(8px)",
              }}
            >
              <Text
                size="xs"
                style={{
                  color: theme.colors.gray[6],
                }}
              >
                Disaster Relief
              </Text>
              <Text
                size="xl"
                mt="sm"
                mb="md"
                className="font-header"
                style={{
                  color: theme.colors.gray[9],
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
          )}
        </motion.div>
      </div>
    </>
  );
}
