import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Code } from "@chakra-ui/react";
import { fontWeights } from "@kvib/react/src/theme/foundations";

export const FontWeights = () => {
  return (
    <TableContainer>
      <Table variant="simple" width="100%">
        <Thead textAlign="left">
          <Tr>
            <Th width="20%">Navn</Th>
            <Th width="50%">Verdi</Th>
            <Th width="30%">Kode</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(fontWeights).map(([name, value]) => (
            <Tr key={name}>
              <Td backgroundColor="white">{name}</Td>
              <Td backgroundColor="white">{value}</Td>
              <Td backgroundColor="white">
                <Code>{`var(--kvib-fontWeights-${name})`}</Code>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
