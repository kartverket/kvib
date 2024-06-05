import { Card, Text, Flex, Grid, Icon, Box } from "@kvib/react/src";

export const IntroButton = ({
  href,
  title,
  description,
  isExternal,
}: {
  icon: "home";
  href: string;
  title: string;
  description: string;
  isExternal: boolean;
}) => {
  return (
    <Card
      as="a"
      variant="outline"
      _hover={{ background: "green.50" }}
      padding="1rem"
      href={href}
      target={isExternal ? "_blank" : ""}
    >
      <Flex gap="0.5rem" fontWeight="bold" marginBottom="0.5rem" alignItems="center">
        <Text fontSize="lg" as="b" color="green.500">
          {title}{" "}
          <Box sx={{ display: isExternal ? "inline-block" : "none" }}>
            <Icon icon="open_in_new" className="docs-icon" size={18} weight={400} />
          </Box>
        </Text>
      </Flex>
      <Text fontWeight="500" margin="0" color="green.500">
        {description}
      </Text>
    </Card>
  );
};

export const IntroCardGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid gap="1rem" templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]} marginBottom="1rem">
      {children}
    </Grid>
  );
};
