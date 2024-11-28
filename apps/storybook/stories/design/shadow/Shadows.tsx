import {
  Box,
  Center,
  Code,
  shadows,
  Table,
  TableBody as Tbody,
  TableCell as Td,
  TableCell as Th,
  TableHeader as Thead,
  TableRow as Tr,
} from "@kvib/react";

const example = (shadow: any) => (
  <Box backgroundColor="white" width="80px" height="80px" boxShadow={shadow} borderRadius="4px" />
);

export const Shadows = () => {
  return (
    <Table width="100%">
      <Thead textAlign="left">
        <Tr>
          <Th width="20%">Eksempel</Th>
          <Th width="50%">Verdi</Th>
          <Th width="30%">Kode</Th>
        </Tr>
      </Thead>
      <Tbody>
        {Object.entries(shadows).map(([size, value]) => {
          const val = value.value;
          return (
            <Tr key={size}>
              <Td backgroundColor="#F7FAFC">
                <Center>{example(val)}</Center>
              </Td>
              <Td backgroundColor="white">{`${size} / ${val}`}</Td>
              <Td backgroundColor="white">
                <Code>{`var(--kvib-shadows-${size})`}</Code>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
