export const TooltipStrings = `const CustomCard = forwardRef(({ children, ...rest }, ref) => (
    <Box p="1">
      <Tag ref={ref} {...rest}>
        {children}
      </Tag>
    </Box>
  ));
  
  const CustomToolTip = () => (
  
  <Tooltip label="Hover me">
    <CustomCard>Tag Here</CustomCard>
  </Tooltip>
  );
  
  render(<CustomToolTip />);`;
