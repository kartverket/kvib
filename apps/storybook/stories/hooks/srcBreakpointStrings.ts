export const breakpointStrings = `  
function Example() {
  const variant = useBreakpointValue(
    {
      base: "md",
      lg: "lg",
    },
    {
      // Breakpoint to use when mediaqueries cannot be used, such as in server-side rendering
      // (Defaults to 'base')
      fallback: 'lg'
    },
  )
  return (
    <VStack align='flex-start'>
      <Text>Resize your window to see the button size change</Text>
      <Button size={size}>
        Button
      </Button>
    </VStack>
  )
}
`;
