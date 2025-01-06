import { List as ChakraList } from "@chakra-ui/react";
import React from "react";

export const ListRoot = React.forwardRef<HTMLUListElement, ChakraList.RootProps>(({ children, ...props }, ref) => (
  <ChakraList.Root as="ul" listStyleType="circle" listStylePosition="outside" ref={ref} {...props}>
    {children}
  </ChakraList.Root>
));

export const ListItem = React.forwardRef<HTMLLIElement, ChakraList.ItemProps>(({ children, ...props }, ref) => (
  <ChakraList.Item as="li" marginLeft={"1em"} ref={ref} {...props}>
    {children}
  </ChakraList.Item>
));
