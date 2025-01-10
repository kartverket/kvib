import {
  Box,
  Center,
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

const example = (shadow: any) => (
  <Box backgroundColor="white" width="80px" height="80px" boxShadow={shadow} borderRadius="4px" />
);

export const Shadows = () => {
  const system = useKvibContext();
  const tokens = system.tokens;
  const variants = Object.keys(tokens.getCategoryValues("shadows"));
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
          const variantValue = tokens.getByName(`shadows.${variant}`)?.value;
          return (
            <Tr key={variant}>
              <Td backgroundColor="#F7FAFC">
                <Center>{example(variant)}</Center>
              </Td>
              <Td backgroundColor="white">{variantValue}</Td>
              <Td backgroundColor="white">
                <Flex gap="1rem" justifyContent={"space-between"}>
                  <Code>{`boxShadow="${variant}"`}</Code>
                  <Clipboard value={`boxShadow="${variant}`}>
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
