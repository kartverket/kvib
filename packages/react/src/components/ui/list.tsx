import { BoxProps } from "@/layout";
import { List as ChakraList } from "@chakra-ui/react";
import React from "react";
import { Merge } from "../utils";

interface ListRootProps extends Merge<BoxProps, ChakraList.RootProps> {}
export const ListRoot = React.forwardRef<HTMLUListElement, ListRootProps>(({ children, ...props }, ref) => (
  <ChakraList.Root as="ul" listStyleType="circle" listStylePosition="outside" ref={ref} {...props}>
    {children}
  </ChakraList.Root>
));

export type { ListRootProps };

interface ListItemProps extends Merge<BoxProps, ChakraList.ItemProps> {}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(({ children, ...props }, ref) => (
  <ChakraList.Item as="li" marginLeft={"1em"} ref={ref} {...props}>
    {children}
  </ChakraList.Item>
));

export type { ListItemProps };
