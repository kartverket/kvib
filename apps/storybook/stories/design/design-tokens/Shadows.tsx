import { Box, Center, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Code } from "@kvib/react/react";
import { shadows } from "@kvib/react/src/theme/tokens";

const example = (shadow: any) => (
  <Box backgroundColor="white" width="80px" height="80px" boxShadow={shadow} borderRadius="4px" />
);

export const Shadows = () => {
  return (
    <TableContainer>
      <Table variant="simple" width="100%">
        <Thead textAlign="left">
          <Tr>
            <Th width="20%">Eksempel</Th>
            <Th width="50%">Verdi</Th>
            <Th width="30%">Kode</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Object.entries(shadows).map(([size, value]) => (
            <Tr key={size}>
              <Td backgroundColor="#F7FAFC">
                <Center>{example(value)}</Center>
              </Td>
              <Td backgroundColor="white">{`${size} / ${value}`}</Td>
              <Td backgroundColor="white">
                <Code>{`var(--kvib-shadows-${size})`}</Code>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
