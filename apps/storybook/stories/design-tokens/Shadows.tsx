import { Box, Center, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Code } from "@chakra-ui/react";
import { shadows } from "@kvib/react/src/theme/foundations";

const example = (shadow: any) => (
  <Box backgroundColor="gainsboro" width="80px" height="80px" boxShadow={shadow} borderRadius="4px" />
);

export const Shadows = () => {
  return (
    <TableContainer>
      <Table variant="simple" width="100%">
        <Thead textAlign="left">
          <Tr>
            <Th width="30%">Eksempel</Th>
            <Th width="auto">Verdi</Th>
            <Th width="auto">Kode</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(shadows).map(([size, value]) => (
            <Tr key={size}>
              <Td>
                <Center>{example(value)}</Center>
              </Td>
              <Td>{`${size} / ${value}`}</Td>
              <Td>
                <Code>{`var(--kvib-shadows-${size})`}</Code>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
