import { Box, Stack, Text } from "@kvib/react/src";
import { ReactNode } from "react";

interface Props {
  tittel?: string;
  children: ReactNode;
}

export const Tekstblokk = ({ tittel, children }: Props) => (
  <Stack rowGap="16px">
    {tittel && (
      <Text as="h2" fontWeight={700} fontSize={"xl"} lineHeight={"xl"} borderBottom={"none"} m="0" p="0">
        {tittel}
      </Text>
    )}
    <Box>{children}</Box>
  </Stack>
);
