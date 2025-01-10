import {
  Box,
  Clipboard,
  ClipboardIconButton,
  Code,
  Flex,
  Table,
  TableBody as Tbody,
  TableCell as Td,
  TableCell as Th,
  TableHeader as Thead,
  TableRow as Tr,
  useKvibContext,
} from "@kvib/react";

const Example = ({ border }: { border: string }) => (
  <Box border={border} borderColor="black" borderRadius="md" p="4" w="80px">
    {border}
  </Box>
);

export const Borders = () => {
  const system = useKvibContext();
  const tokens = system.tokens;
  const variants = Object.keys(tokens.getCategoryValues("borders"));

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
          const variantValue = tokens.getByName(`borders.${variant}`)?.originalValue;
          return (
            <Tr key={variant}>
              <Td backgroundColor="white">
                <Box>
                  <Example border={variant} />
                </Box>
              </Td>
              <Td backgroundColor="white">{variantValue}</Td>
              <Td backgroundColor="white">
                <Flex gap="1rem" justifyContent={"space-between"}>
                  <Code>{`border="${variant}"`}</Code>
                  <Clipboard value={`border="${variant}`}>
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
