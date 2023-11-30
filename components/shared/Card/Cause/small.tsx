import {
  Breadcrumbs,
  Divider,
  Group,
  Image,
  Paper,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useRouter } from "next/navigation";

//images

export default function CardCause({ data }: any) {
  const { hovered, ref } = useHover();
  const theme = useMantineTheme();

  const Router = useRouter();

  return (
    <>
      <Paper
        onClick={() => {
          Router.push("/campaign/causes/" + data.id);
        }}
        ref={ref}
        py={54}
        style={{
          transition: "ease-in-out .3s",
          background: "none",
          opacity: hovered ? 1 : 0.6,
          cursor: "pointer",
        }}
      >
        <Paper
          style={{
            height: 500,
            overflow: "hidden",
          }}
        >
          <Image
            src={data.image_album[0]?.image}
            height={700}
            style={{
              transition: ".3s ease-in-out",
              transform: hovered ? "scale(1.05)" : "",
            }}
          />
        </Paper>

        <Space h={32} />

        <div
          style={{
            paddingRight: 50,
          }}
        >
          <Group>
            <Text
              style={{
                color: theme.colors.gray[1],
                textTransform: "uppercase",
              }}
              size="xs"
              color="dimmed"
            >
              {data.category}
            </Text>
          </Group>

          <Text
            my="xs"
            className="heading"
            style={{
              color: theme.colors.gray[1],
              fontSize: "3rem",
              lineHeight: "3rem",
            }}
          >
            {data.title}
          </Text>

          <Group>
            <Group gap="xs">
              <Text
                size="xs"
                style={{
                  color: theme.colors.gray[0],
                }}
              >
                {data.start_date}
              </Text>
              <Text
                size="xs"
                style={{
                  color: theme.colors.gray[0],
                }}
              >
                -
              </Text>
              <Text size="xs" color={data.enddata ? "dimmed" : "teal"}>
                {data.end_date || "Ongoing"}
              </Text>
            </Group>

            <Divider style={{ opacity: 0.5 }} orientation="vertical" />

            <Group gap="xs">
              <Text
                size="xs"
                style={{
                  color: theme.colors.gray[0],
                }}
              >
                34 Volunteers
              </Text>

              <Text
                size="xs"
                style={{
                  color: theme.colors.gray[0],
                }}
              >
                3344 Participants
              </Text>
            </Group>
          </Group>
        </div>
      </Paper>
    </>
  );
}
