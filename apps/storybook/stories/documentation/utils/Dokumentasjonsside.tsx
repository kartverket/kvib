import { Stack, StackProps, Text } from "@kvib/react/src";
import { ReactNode } from "react";

interface Props extends StackProps {
  tittel: string;
  beskrivelse?: ReactNode;
  children: ReactNode;
}

export const Dokumentasjonsside = ({ tittel, beskrivelse, ...props }: Props) => (
  <Stack rowGap={"34px"} pb="80px" {...props}>
    <Stack rowGap={"16px"}>
      <Text as="h1" fontWeight={700} fontSize="3xl" m="0" p="0">
        {tittel}
      </Text>
      {beskrivelse && (
        <Text m="0" p="0" fontSize={"md"} lineHeight={"md"} fontWeight={400}>
          {beskrivelse}
        </Text>
      )}
    </Stack>
    {props.children}
  </Stack>
);
