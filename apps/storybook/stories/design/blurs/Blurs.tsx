import {
  Box,
  Center,
  Clipboard,
  ClipboardIconButton,
  Code,
  Flex,
  Logo,
  Table,
  TableBody as Tbody,
  TableCell as Td,
  TableCell as Th,
  TableHeader as Thead,
  TableRow as Tr,
  useKvibContext,
} from "@kvib/react";

export const example = (value: string) => (
  <Box filter="auto" blur={value} w="80px">
    <Logo size={80} />
  </Box>
);

export const Blurs = () => {
  const system = useKvibContext();
  const tokens = system.tokens;
  const variants = Object.keys(tokens.getCategoryValues("blurs"));

  return (
    <Table width="100%">
      <Thead textAlign="left">
        <Tr>
          <Th width="20%">Eksempel</Th>
          <Th width="50%">Verdi</Th>
          <Th width="30%">Bruk</Th>
        </Tr>
      </Thead>
      <Tbody>
        {variants.map(variant => {
          return (
            <Tr key={variant}>
              <Td backgroundColor="#F7FAFC">
                <Center>{example(variant)}</Center>
              </Td>
              <Td backgroundColor="white">{`${variant} / ${tokens.getByName(`blurs.${variant}`)?.originalValue}`}</Td>
              <Td backgroundColor="white">
                <Flex gap="1rem" justifyContent={"space-between"}>
                  <Code>{`blur="${variant}"`}</Code>
                  <Clipboard value={`blur="${variant}`}>
                    <ClipboardIconButton />
                  </Clipboard>
                </Flex>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
