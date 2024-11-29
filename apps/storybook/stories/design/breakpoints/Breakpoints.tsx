import {
  breakpoints,
  Code,
  Table,
  TableBody as Tbody,
  TableCell as Td,
  TableCell as Th,
  TableHeader as Thead,
  TableRow as Tr,
} from "@kvib/react";

export const Breakpoints = () => {
  return (
    <Table width="100%">
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
  );
};
