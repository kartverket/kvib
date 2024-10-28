import { Box, Stack, Text } from "@kvib/react/src";
import { ReactNode } from "react";

interface Props {
  tittel: string;
  children: ReactNode;
}

export const Tekstblokk = ({ tittel, children }: Props) => (
  <Stack rowGap={"1.125rem"}>
    <Text as="h2" fontWeight={700} fontSize={"2xl"} lineHeight={"2xl"} borderBottom={"none"} m="0" p="0">
      {tittel}
    </Text>
    <Box>{children}</Box>
  </Stack>
);
