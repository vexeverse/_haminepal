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

export default function CardTeam({ data }: { data: any }) {
  const { hovered, ref } = useHover();
  const theme = useMantineTheme();

  const Router = useRouter();

  return (
    <Paper
      onClick={() => {
        Router.push("/cause/1123");
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
          src={data.image}
          height={700}
          style={{
            transition: ".3s ease-in-out",
            transform: hovered ? "scale(1.05)" : "",
            filter: hovered ? "saturate(1)" : "saturate(0)",
          }}
        />
      </Paper>

      <Space h={32} />

      <Group>
        <Text
          style={{
            color: theme.colors.gray[1],
            textTransform: "uppercase",
          }}
          size="xs"
          color="dimmed"
        >
          {data.field_of_expertise}
        </Text>
      </Group>

      <Text
        my="xs"
        className="heading"
        style={{
          color: theme.colors.gray[0],
          fontSize: "3rem",
          lineHeight: "3rem",
        }}
      >
        {data.name}
      </Text>

      <Group>
        <Group gap="xs">
          <Text
            size="xs"
            style={{
              color: theme.colors.gray[0],
            }}
          >
            {data.address}
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
            {data.bio}
          </Text>
        </Group>
      </Group>
    </Paper>
  );
}
