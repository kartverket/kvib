import { Box, Logo, TableContainer, Table, Thead, Tr, Th, Tbody, Td, Code, Center } from "@kvib/react/src";
import { blur } from "@kvib/react/src/theme/tokens";

export const example = (value) => {
  return (
    <Box filter="auto" blur={value} w="80px">
      <Logo size={80} />
    </Box>
  );
};

export const Blurs = () => {
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
          {Object.entries(blur).map(([size, value]) => (
            <Tr key={size}>
              <Td backgroundColor="#F7FAFC">
                <Center>{example(value)}</Center>
              </Td>
              <Td backgroundColor="white">{`${size} / ${value}`}</Td>
              <Td backgroundColor="white">
                <Code>{`var(--kvib-blur-${size})`}</Code>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
