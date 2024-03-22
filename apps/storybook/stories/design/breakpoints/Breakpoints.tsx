import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Code } from "@kvib/react/src";
import { breakpoints } from "@kvib/react/src/theme/tokens";

export const Breakpoints = () => {
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
          {Object.entries(breakpoints).map(([name, value]) => (
            <Tr key={name}>
              <Td backgroundColor="white">{name}</Td>
              <Td backgroundColor="white">{value}</Td>
              <Td backgroundColor="white">
                <Code>{`var(--kvib-breakpoints-${name})`}</Code>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
