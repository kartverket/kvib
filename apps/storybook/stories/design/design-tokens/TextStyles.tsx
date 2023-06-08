import { Text, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Code } from "@chakra-ui/react";
import { textStyles } from "@kvib/react/src/theme/tokens";

export const TextStyles = () => {
  const renderValue = (value: string | string[]) => {
    if (typeof value === "string") {
      return value;
    }

    return value.map((size: any) => `${size} | `);
  };

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
          {Object.entries(textStyles).map(([name, value]) => (
            <Tr key={name}>
              <Td backgroundColor="white">
                <Text variant={name}>{name}</Text>
              </Td>
              <Td backgroundColor="white">
                <Text margin="0">font-size: {renderValue(value.fontSize)}</Text>
                <Text margin="0">font-weight: {value.fontWeight}</Text>
                <Text margin="0">line-height: {value.lineHeight}</Text>
                <Text margin="0">letter-spacing: {renderValue(value.letterSpacing)}</Text>
              </Td>
              <Td backgroundColor="white">
                <Code>{name}</Code>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
