import {
  Box,
  Table,
  TableBody as Tbody,
  TableCell as Td,
  TableCell as Th,
  TableHeader as Thead,
  TableRow as Tr,
  useKvibContext,
} from "@kvib/react";

const example = (spacing: any) => <Box bg={"blue.400"} w={spacing} h="16px" />;

export const Spacing = () => {
  const system = useKvibContext();
  const tokens = system.tokens;
  const variants = tokens.getCategoryValues("spacing");
  // filter strings that negative numbers
  const filtered = Object.entries(variants).filter(elem => {
    const size = elem[0];
    // try to parse the size as a number
    const parsed = parseFloat(size);
    // if the size is a number and it's not negative
    return !isNaN(parsed) && parsed >= 0;
  });

  // sort the sizes
  const sorted = filtered.sort((a, b) => {
    const aSize = parseFloat(a[0]);
    const bSize = parseFloat(b[0]);
    return aSize - bSize;
  });

  return (
    <Table width="100%">
      <Thead textAlign="left">
        <Tr>
          <Th width="40%">Eksempel</Th>
          <Th width="30%">Verdi</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sorted.map(elem => {
          const size = elem[0];
          const variantValue = tokens.getByName(`spacing.${size}`)?.originalValue;

          return (
            <Tr key={size}>
              <Td backgroundColor="white">{example(size)}</Td>
              <Td backgroundColor="white">{`${size} / ${variantValue}`}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
