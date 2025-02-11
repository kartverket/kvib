import {
  Clipboard,
  ClipboardIconButton,
  Code,
  Flex,
  Table,
  TableBody as Tbody,
  TableCell as Td,
  Text,
  TableCell as Th,
  TableHeader as Thead,
  TableRow as Tr,
  useKvibContext,
} from "@kvib/react";
import { Kodeeksempel } from "../../documentation/migrering/Kodeeksempel";

export const Breakpoints = () => {
  const system = useKvibContext();
  const breakpoints = system.breakpoints;

  return (
    <>
      <Table width="100%">
        <Thead textAlign="left">
          <Tr>
            <Th width="20%">Navn</Th>
            <Th width="50%">Verdi</Th>
            <Th width="30%">Bruk</Th>
          </Tr>
        </Thead>
        <Tbody>
          {breakpoints.values.map(b => (
            <Tr key={b.name}>
              <Td backgroundColor="white">{b.name}</Td>
              <Td backgroundColor="white">{b.min}</Td>
              <Td backgroundColor="white">
                <Flex gap="1rem" justifyContent={"space-between"}>
                  <Code>{`breakpoints.${b.name}`}</Code>
                  <Clipboard value={`breakpoints.${b.name}`}>
                    <ClipboardIconButton />
                  </Clipboard>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <Text as="h2" fontSize={"lg"} fontWeight={700} mt="2rem">
        Breakpoint-betingelser
      </Text>
      <Kodeeksempel
        beskrivelse={`
        For å gjøre det enklere å hente ut breakpoint-betingelser tilbyr Kvib støttefunksjonen getBreakpointCondition() som tar systemet man bruker og navnet på et breakpoint som argument og returnerer en media query i CSS. Nyttig i kombinasjon med useMediaQuery-hooken.
      `}
        kildekode={`
const system = useKvibContext();
const isTablet = useMediaQuery(getBreakpointCondition(system, "mdToLg"));
console.log(isTablet); // true hvis skjermstørrelsen er mellom md og lg
`}
      />
      <Table width="100%" marginTop="2rem">
        <Thead textAlign="left">
          <Tr>
            <Th width="20%">Betingelse</Th>
            <Th width="80%">Media Query</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(breakpoints.conditions).map(([conditionName, mediaQuery]) => (
            <Tr key={conditionName}>
              <Td backgroundColor="white">{conditionName}</Td>
              <Td backgroundColor="white">
                <Flex gap="1rem" justifyContent={"space-between"} alignItems={"center"}>
                  {mediaQuery}
                  <Clipboard value={mediaQuery}>
                    <ClipboardIconButton />
                  </Clipboard>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};
