import { Box, Stack, Text } from "@kvib/react";
import { ReactNode } from "react";

interface Props {
  tittel?: string;
  children: ReactNode;
}

export const Tekstblokk = ({ tittel, children }: Props) => (
  <Stack rowGap={0}>
    {tittel && (
      <Text as="h2" fontWeight={700} fontSize={"md"} lineHeight={"md"} borderBottom={"none"} m="0" p="0">
        {tittel}
      </Text>
    )}
    <Box>{children}</Box>
  </Stack>
);
