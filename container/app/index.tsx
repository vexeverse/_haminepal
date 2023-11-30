import { PropsWithChildren } from "react";
import ContextContainer from "./context";
import MantineContainer from "./mantine";
import NextContainer from "./next";
import QueryContainer from "./query";

//css

export default function AppContainer({ children }: PropsWithChildren) {
  return (
    <NextContainer>
      <ContextContainer>
        <MantineContainer>
          <QueryContainer>{children}</QueryContainer>
        </MantineContainer>
      </ContextContainer>
    </NextContainer>
  );
}
