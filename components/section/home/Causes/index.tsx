import { getAllData } from "@api/campaign/causes";
import { Carousel } from "@mantine/carousel";
import {
  Container,
  Grid,
  SimpleGrid,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import CardCause from "@ui/Card/Cause/small";

export default function () {
  const theme = useMantineTheme();

  const queryData = useQuery({
    queryKey: ["campaign", "causes"],
    queryFn: async () => {
      const res = getAllData();

      return res;
    },
    initialData: [],
  });

  return (
    <Container
      size="xl"
      mt={{
        base: 32,
        lg: 100,
      }}
      mb={{
        base: 32,
        lg: 73,
      }}
    >
      <Grid>
        <Grid.Col span={{ base: 12, lg: 4 }}>
          <Text
            className="heading"
            style={{
              fontSize: "3rem",
              color: theme.colors.gray[0],
            }}
            visibleFrom="lg"
          >
            OUR{" "}
            <span
              style={{
                color: theme.colors.brand[5],
              }}
            >
              CAUSES
            </span>
          </Text>
          <Text
            hiddenFrom="lg"
            className="heading"
            style={{
              fontSize: "3rem",
              color: theme.colors.gray[0],
              textAlign: "center",
            }}
          >
            OUR{" "}
            <span
              style={{
                color: theme.colors.brand[5],
              }}
            >
              CAUSES
            </span>
          </Text>
        </Grid.Col>
        <Grid.Col span={{ xs: 12, lg: 4 }}>
          <Text
            mt={{
              base: "xs",
              lg: "md",
            }}
            size="xs"
            style={{
              textAlign: "center",
              color: theme.colors.gray[0],
            }}
          >
            Initiatives for a better tomorrow.
          </Text>
        </Grid.Col>
        <Grid.Col span={{ xs: 12, lg: 4 }} visibleFrom="lg">
          <Text
            className="heading"
            style={{
              fontSize: "3rem",
              color: theme.colors.gray[9],
              textAlign: "right",
            }}
          >
            SEE MORE
          </Text>
        </Grid.Col>

        <Grid.Col span={12}>
          <Carousel
            slideSize={{
              base: "100%",
              md: "33.33%",
            }}
            align="start"
            slideGap={"xs"}
          >
            {queryData.data.map((cause: any, index: any) => (
              <Carousel.Slide key={index}>
                <CardCause data={cause} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
