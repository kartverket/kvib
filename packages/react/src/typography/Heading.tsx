import { HeadingProps as ChakraHeadingProps, Text } from "@chakra-ui/react";

export type HeadingProps = Exclude<ChakraHeadingProps, "textStyle"> & {
  variant?: ChakraHeadingProps["textStyle"];
};

export const Heading = ({ variant = "title1", as = "h1", ...props }: any) => {
  return <Text as={as} textStyle={variant} {...props} />;
};
