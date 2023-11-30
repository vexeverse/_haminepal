"use client";

import {
  Badge,
  Button,
  Divider,
  Grid,
  Group,
  Modal,
  NumberInput,
  Paper,
  Progress,
  Select,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { CaretRight, Circle, Users } from "@phosphor-icons/react";

import { useForm } from "@mantine/form";
import { useState } from "react";

export default function ({
  info,
  key,
  active = false,
}: {
  info: any;
  key: any;
  active?: boolean;
}) {
  const theme = useMantineTheme();

  const { hovered, ref } = useHover();

  const defaultInputProps = { size: "xs" };

  const [openDonation, setOpenDonation] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <>
      <Paper
        radius="sm"
        style={{
          transition: ".6s ease",
          minHeight: 550,
          background: `url(${info.img})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
        }}
      >
        <Paper
          ref={ref}
          radius="md"
          px={32}
          style={{
            cursor: "pointer",
            height: "100%",
            background:
              "linear-gradient(rgba(0,0,0,.3) 0%, rgba(10,10,10,1) 90%)",
            backgroundSize: "200%",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: ".3s ease-in-out",

            // '&:hover': {
            //   borderBottom: '5px solid ' + theme.colors.brand[5],
            // },
          }}
        >
          <Group mt={32} gap="xs" justify="space-apart">
            <Group gap="xs">
              <Text
                style={{
                  textTransform: "uppercase",
                  fontSize: 10,
                  color: theme.colors.gray[3],
                }}
              >
                {info.category}
              </Text>
              <CaretRight color="white" size={10} />
              <Text
                style={{
                  textTransform: "uppercase",
                  fontSize: 10,
                  color: theme.colors.gray[5],
                }}
              >
                {info.subcategory}
              </Text>
            </Group>

            {info.endDate ? (
              ""
            ) : (
              <Badge radius="xs" size="xs" color="blue" variant="filled">
                ONGOING
              </Badge>
            )}
          </Group>

          <div>
            <Text size="xs" color="gray">
              {info.startDate} - {info.endDate || "Today"}
            </Text>
            <Text
              mt="xs"
              mb="xs"
              size={"xl"}
              color="white"
              style={{
                lineHeight: 1.2,
              }}
            >
              {info.name}
            </Text>

            {info.description && (
              <>
                <Divider
                  color="brand"
                  my="sm"
                  size="sm"
                  style={{
                    width: 32,
                  }}
                />

                <Text size="xs" color="gray" mb="md">
                  {info.description}
                </Text>
              </>
            )}

            <Divider
              my="xs"
              style={{
                opacity: 0.2,
              }}
            />

            {!info.endDate ? (
              <>
                <Group>
                  <Text size="sm" color="white">
                    {info.events} Volunteers
                  </Text>
                  <Text size="sm" color="white">
                    {info.volunteer} Donations
                  </Text>
                </Group>

                <Progress size="xs" value={50} mt={32} mb="xs" />

                <Group justify="space-apart">
                  <Group gap={4}>
                    <Text size="sm" color="white">
                      {Number(info.donation).toLocaleString("en-IN")}
                    </Text>
                    <Text size="sm" color="dimmed">
                      / {Number(info.donationTotal).toLocaleString("en-IN")}
                    </Text>
                  </Group>

                  <Text size="sm" color="white">
                    {info.donator} Donations
                  </Text>
                </Group>
              </>
            ) : (
              <Group gap={4}>
                <Text size="sm" color="white">
                  {Number(info.donation).toLocaleString("en-IN")}
                </Text>
                <Text size="sm" color="dimmed">
                  / {Number(info.donationTotal).toLocaleString("en-IN")}{" "}
                  Collected
                </Text>
              </Group>
            )}

            <Paper
              pb={32}
              style={{
                opacity: hovered ? 1 : 0,
                overflow: "hidden",
                transition: ".3s ease-in-out",
                background: "none",
                maxHeight: hovered ? 100 : 0,
              }}
            >
              <Group mt={32}>
                {!info.endDate ? (
                  <Button size="sm" onClick={() => setOpenDonation(true)}>
                    Donate Now.
                  </Button>
                ) : (
                  <Group>
                    <Button size="sm">Check the full story.</Button>
                  </Group>
                )}
              </Group>
            </Paper>
          </div>
        </Paper>
      </Paper>

      <Modal
        title="Make a Donation"
        opened={openDonation}
        onClose={() => setOpenDonation(false)}
      >
        <form>
          <Grid>
            <Grid.Col
              span={{
                xs: 12,
                lg: 6,
              }}
            >
              <TextInput
                {...defaultInputProps}
                disabled
                required
                label="Donation ID"
                //description="Auto Generated"
                placeholder="e.g. G001"
                {...form.getInputProps("id")}
              />
            </Grid.Col>
            <Grid.Col
              span={{
                xs: 12,
                lg: 6,
              }}
            ></Grid.Col>
            <Grid.Col
              span={{
                xs: 12,
                lg: 6,
              }}
            >
              <Select
                {...defaultInputProps}
                required
                data={["Relief", "Welfare", "Movement", "Protest", "Help"]}
                label="Donation For"
                //description="Auto Generated"
                placeholder="Select Cause Type"
                {...form.getInputProps("type")}
              />
            </Grid.Col>
            <Grid.Col
              span={{
                xs: 12,
                lg: 6,
              }}
            >
              <NumberInput
                {...defaultInputProps}
                min={0}
                max={9999}
                label="Donated Amount"
                description=""
                placeholder="00.00"
                rightSectionWidth={75}
                {...form.getInputProps("fund")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                {...defaultInputProps}
                required
                label="Donation Title"
                //description="Auto Generated"
                placeholder="e.g. Earthquake Relief Program 2023"
                {...form.getInputProps("name")}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <TextInput
                {...defaultInputProps}
                required
                label="Full Name"
                //description="Auto Generated"
                placeholder="Enter full name"
                {...form.getInputProps("fullname")}
              />
            </Grid.Col>
            <Grid.Col
              span={{
                xs: 12,
                lg: 6,
              }}
            >
              <TextInput
                {...defaultInputProps}
                required
                label="Email Address"
                //description="Auto Generated"
                placeholder="e.g. xyz@haminepal.org.np"
                {...form.getInputProps("email")}
              />
            </Grid.Col>
            <Grid.Col
              span={{
                xs: 12,
                lg: 6,
              }}
            >
              <TextInput
                {...defaultInputProps}
                required
                label="Mobile"
                //description="Auto Generated"
                placeholder="e.g. 981212312"
                {...form.getInputProps("mobile")}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <TextInput
                {...defaultInputProps}
                required
                label="Location"
                //description="Auto Generated"
                placeholder="e.g. Kathmandu, Nepal"
                {...form.getInputProps("address")}
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <Group mt="xl" onClick={() => setOpenDonation(false)}>
                <Button size="xs">Donate</Button>
                <Button size="xs" variant="light">
                  Cancel
                </Button>
              </Group>
            </Grid.Col>
          </Grid>
        </form>
      </Modal>
    </>
  );
}
