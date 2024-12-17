import { Box, Flex, Stack, Text } from "@kvib/react";
import { ReactNode } from "react";

interface Props {
  tittel?: string;
  children: ReactNode;
}

export const Tekstblokk = ({ tittel, children }: Props) => (
  <Stack rowGap={2}>
    {tittel && (
      <Flex alignItems={"center"}>
        <Text
          as="h3"
          fontWeight={700}
          fontSize={"md"}
          lineHeight={"md"}
          borderBottom={"none"}
          m="0"
          p="0"
          id={tittel.replace(/\s/g, "-").toLowerCase()}
        >
          {tittel}
        </Text>
      </Flex>
    )}
    <Box>{children}</Box>
  </Stack>
);
