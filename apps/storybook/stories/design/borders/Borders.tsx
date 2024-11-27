import {
  Code,
  Table,
  TableBody as Tbody,
  TableCell as Td,
  TableCell as Th,
  TableHeader as Thead,
  TableRow as Tr,
} from "@kvib/react/src";
import { borders } from "@kvib/react/theme/tokens";

export const Borders = () => {
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
        {Object.entries(borders).map(([name, value]) => {
          const val = value.value;
          return (
            <Tr key={name}>
              <Td backgroundColor="white">{name}</Td>
              <Td backgroundColor="white">{val}</Td>
              <Td backgroundColor="white">
                <Code>{`var(--kvib-borders-${name})`}</Code>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
