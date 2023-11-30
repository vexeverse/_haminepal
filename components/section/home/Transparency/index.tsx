"use client";

import { getAllData } from "@api/transparency";
import { Container, Grid, Space, Text, useMantineTheme } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";

export default function Transparency() {
  const theme = useMantineTheme();

  const queryData = useQuery({
    queryKey: ["campaign", "causes"],
    queryFn: async () => {
      const res = getAllData();
      return res;
    },
    initialData: {
      kinds: 0,
      funds: 0,
      used: 0,
      remaining: 0,
    },
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
        <Grid.Col span={{ xs: 12, lg: 6 }}>
          <Text
            visibleFrom="lg"
            className="heading"
            style={{
              fontSize: "3rem",
              color: theme.colors.gray[0],
              lineHeight: "3rem",
            }}
          >
            <span style={{ color: theme.colors.brand[5] }}>
              Nothing to hide.
            </span>{" "}
            <br />
            Revealing Our Account.
          </Text>

          <Text
            hiddenFrom="lg"
            className="heading"
            style={{
              fontSize: "2rem",
              color: theme.colors.gray[0],
              lineHeight: "2rem",
            }}
          >
            <span style={{ color: theme.colors.brand[5] }}>
              Nothing to hide.
            </span>{" "}
            <br />
            Revealing Our Account.
          </Text>
        </Grid.Col>

        <Grid.Col span={{ xs: 12, lg: 6 }} visibleFrom="lg">
          <Text
            className="heading"
            style={{
              fontSize: "3rem",
              color: theme.colors.gray[9],
              textAlign: "right",
            }}
          >
            TRANSPARENCY
          </Text>
        </Grid.Col>

        <Grid.Col span={12}>
          <Space
            h={{
              base: 32,
              lg: 100,
            }}
          />
        </Grid.Col>
      </Grid>

      <Grid hiddenFrom="lg">
        <Grid.Col span={{ base: 6, lg: 6 }}>
          <Text size="xs">FUNDS COLLECTED</Text>
          <Text
            size="xl"
            className="heading"
            style={{
              color: theme.colors.gray[0],
            }}
          >
            RS. 67,34,233.22
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 6, lg: 6 }}>
          <Text size="xs">KINDS COLLECTED</Text>
          <Text
            className="heading"
            style={{
              color: theme.colors.gray[0],
            }}
          >
            RS. 67,34,233.22
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 6, lg: 6 }}>
          <Text size="xs">FUNDS & KINDS USED</Text>
          <Text
            className="heading"
            style={{
              color: theme.colors.gray[0],
            }}
          >
            RS. 67,34,233.22
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 6, lg: 6 }}>
          <Text size="xs">REMAINING</Text>
          <Text
            className="heading"
            style={{
              color: theme.colors.gray[0],
            }}
          >
            RS. 67,34,233.22
          </Text>
        </Grid.Col>
      </Grid>
      <Grid visibleFrom="lg">
        <Grid.Col span={{ xs: 12, lg: 6 }}>
          <Text size="xs">FUNDS COLLECTED</Text>
          <Text
            className="heading"
            style={{
              color: theme.colors.gray[0],
            }}
          >
            RS. 67,34,233.22
          </Text>
        </Grid.Col>
        <Grid.Col span={{ xs: 12, lg: 6 }}>
          <Text size="xs">KINDS COLLECTED</Text>
          <Text
            className="heading"
            style={{
              fontSize: "5rem",
              color: theme.colors.gray[0],
            }}
          >
            RS. 67,34,233.22
          </Text>
        </Grid.Col>
        <Grid.Col span={{ xs: 12, lg: 6 }}>
          <Text size="xs">FUNDS & KINDS USED</Text>
          <Text
            className="heading"
            style={{
              fontSize: "5rem",
              color: theme.colors.gray[0],
            }}
          >
            RS. 67,34,233.22
          </Text>
        </Grid.Col>
        <Grid.Col span={{ xs: 12, lg: 6 }}>
          <Text size="xs">REMAINING</Text>
          <Text
            className="heading"
            style={{
              fontSize: "5rem",
              color: theme.colors.gray[0],
            }}
          >
            RS. 67,34,233.22
          </Text>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
