import dummyData from "@/json/data";
import {
  Container,
  Grid,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";

export default function () {
  const theme = useMantineTheme();

  return (
    <Container size="xl" mt={100} mb={73}>
      <Grid>
        <Grid.Col span={{ xs: 12 }}>
          <Text
            className="heading"
            style={{
              fontSize: "3rem",
              color: theme.colors.gray[0],
              lineHeight: "3rem",
              textAlign: "center",
            }}
          >
            <span style={{ color: theme.colors.brand[5] }}>OUR</span> SUPPORTERS
          </Text>
        </Grid.Col>

        <Grid.Col span={12}>
          <Space h={100} />
        </Grid.Col>
      </Grid>

      <SimpleGrid spacing={0} cols={{ base: 2, md: 3, lg: 5 }}>
        {dummyData.supporters.map((sup: any, index: any) => (
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
        ))}
      </SimpleGrid>
    </Container>
  );
}
