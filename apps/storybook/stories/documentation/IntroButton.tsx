import { Card, Link, Text, Image, Flex, Grid } from "@kvib/react/src";
import { useState } from "react";

export const IntroButton = ({
  icon,
  href,
  title,
  description,
}: {
  icon: "string";
  href: string;
  title: string;
  description: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card
      as="a"
      variant="outline"
      _hover={{ shadow: "md" }}
      _focus={{ borderColor: "green.400", boxShadow: "0 0 0 1px green" }}
      borderColor="gray.300"
      shadow="sm"
      backgroundColor={"green.50"}
      padding="1rem"
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Flex gap="0.5rem" fontWeight="bold" marginBottom="0.5rem">
        <Image src={icon} />
        <Link sx={{ textDecoration: isHovered ? "none" : "underline", color: isHovered ? "green.400" : "green.500" }}>
          {title}
        </Link>
      </Flex>
      <Text fontWeight="500" margin="0">
        {description}
      </Text>
    </Card>
  );
};

export const IntroCardGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid gap="1rem" templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]} marginBottom={"2rem"}>
      {children}
    </Grid>
  );
};
