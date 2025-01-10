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

const example = (radii: any) => (
  <Box border="2px solid #4DB450" backgroundColor="#E9F4EC" width="80px" height="80px" borderRadius={radii} />
);

export const Radius = () => {
  const system = useKvibContext();
  const tokens = system.tokens;
  const variants = Object.keys(tokens.getCategoryValues("radii"));
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
          const variantValue = tokens.getByName(`radii.${variant}`)?.originalValue;

          return (
            <Tr key={variant}>
              <Td backgroundColor="white">
                <Center>{example(variant)}</Center>
              </Td>
              <Td backgroundColor="white">{variantValue}</Td>
              <Td backgroundColor="white">
                <Flex gap="1rem" justifyContent={"space-between"}>
                  <Code>{`borderRadius="${variant}"`}</Code>
                  <Clipboard value={`borderRadius="${variant}`}>
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
