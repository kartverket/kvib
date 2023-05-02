import { Box, Center, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import { shadows } from "@kvib/react/src/theme/foundations";

const example = (shadow: any) => (
  <Box backgroundColor="gainsboro" width="80px" height="80px" boxShadow={shadow} borderRadius="4px" />
);

export const ShadowsTable = () => {
  return (
    <TableContainer>
      <Table variant="simple" width="100%">
        <Thead textAlign="left">
          <Tr>
            <Th>Eksempel</Th>
            <Th>Verdi</Th>
            <Th>Kode</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(shadows).map(([size, value]) => (
            <Tr key={size}>
              <Td>
                <Center>{example(value)}</Center>
              </Td>
              <Td>{`${size} / ${value}`}</Td>
              <Td>{`var(--kvib-shadows-${size})`}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
