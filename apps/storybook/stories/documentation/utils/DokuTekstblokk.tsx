import { Box, Stack, Text } from "@kvib/react/src";
import { ReactNode } from "react";

interface Props {
  tittel: string;
  children: ReactNode;
}

export const DokuTekstblokk = ({ tittel, children }: Props) => (
  <Stack rowGap={"1.125rem"}>
    <Text as="h2" fontWeight={700} borderBottom={"none"}>
      {tittel}
    </Text>
    <Box>{children}</Box>
  </Stack>
);
