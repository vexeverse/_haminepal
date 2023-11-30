import { useMantineTheme } from "@mantine/core";
import { CircleMarker, LayerGroup, useMap } from "react-leaflet";

export default function ({
  info,
  active,
  setActive,
}: {
  info: any;
  active: any;
  setActive: (key: any, data: any) => void;
}) {
  const theme = useMantineTheme();
  const map = useMap();

  if (active == info.index) {
    return (
      <LayerGroup key={info.index}>
        <CircleMarker
          eventHandlers={{
            click: () => {
              setActive(info.index, info);
              map.flyTo([info.geo_lat, info.geo_long], 11, {
                animate: true,
                duratino: 2,
              });
            },
            mouseover: () => {
              setActive(info.index, info);
              map.flyTo([info.geo_lat, info.geo_long], 11, {
                animate: true,
                duratino: 2,
              });
            },
          }}
          center={[info.geo_lat, info.geo_long]}
          pathOptions={{
            fillColor: theme.colors.gray[5],
            stroke: false,
            opacity: 1,
            fillOpacity: 0.9,
          }}
        />
      </LayerGroup>
    );
  } else {
    return (
      <LayerGroup key={info.index}>
        <CircleMarker
          eventHandlers={{
            click: () => {
              setActive(info.index, info);
              map.flyTo([info.geo_lat, info.geo_long], 11, {
                animate: true,
                duratino: 2,
              });
            },
          }}
          center={[info.geo_lat, info.geo_long]}
          pathOptions={{
            fillColor: theme.colors.red[5],
            stroke: false,
            opacity: 1,
            fillOpacity: 0.6,
          }}
        />
      </LayerGroup>
    );
  }
}
