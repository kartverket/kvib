import { Flex, Stack, Text } from "@kvib/react/src";
import { ReactNode } from "react";

interface Props {
  tittel: string;
  beskrivelse?: string;
  children: ReactNode;
}

export const Dokumentasjonsside = ({ tittel, beskrivelse, children }: Props) => (
  <Flex justifyContent={"center"} pb="5rem">
    <Stack rowGap={"6rem"} maxW="750px">
      <Stack rowGap={"2rem"}>
        <Text as="h1" fontWeight={400} fontSize="5xl" m="0" p="0">
          {tittel}
        </Text>
        {beskrivelse && (
          <Text m="0" p="0" fontSize={"lg"} lineHeight={"28px"}>
            {beskrivelse}
          </Text>
        )}
      </Stack>
      {children}
    </Stack>
  </Flex>
);
