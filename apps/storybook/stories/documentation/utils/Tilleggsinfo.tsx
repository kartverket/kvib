import { Stack, StackProps, Text } from "@kvib/react";
import { ReactNode } from "react";

interface Props extends StackProps {
  tittel: string;
  beskrivelse?: ReactNode;
  children?: ReactNode;
}

export const Tilleggsinfo = ({ tittel, beskrivelse, ...props }: Props) => (
  <Stack rowGap={"34px"} pt="12px" pb="12px" {...props}>
    <Stack rowGap={"16px"}>
      <Text
        as="h3"
        fontWeight={700}
        fontSize={"xl"}
        lineHeight={"xl"}
        borderBottom={"none"}
        m="0"
        p="0"
        id={tittel.replace(/\s/g, "-").toLowerCase()}
      >
        {tittel}
      </Text>
      {beskrivelse && (
        <Text m="0" p="0" fontSize={"md"} lineHeight={"md"} fontWeight={500}>
          {beskrivelse}
        </Text>
      )}
    </Stack>
    {props.children}
  </Stack>
);
