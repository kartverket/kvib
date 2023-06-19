import { Box, Center, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Code } from "@chakra-ui/react";
import { radii } from "@kvib/react/src/theme/tokens";

const example = (radii: any) => (
  <Box border="2px solid #4DB450" backgroundColor="#E9F4EC" width="80px" height="80px" borderRadius={radii} />
);

export const Radii = () => {
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
          {Object.entries(radii).map(([size, value]) => (
            <Tr key={size}>
              <Td backgroundColor="white">
                <Center>{example(value)}</Center>
              </Td>
              <Td backgroundColor="white">{`${size} / ${value}`}</Td>
              <Td backgroundColor="white">
                <Code>{`var(--kvib-radii-${size})`}</Code>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
