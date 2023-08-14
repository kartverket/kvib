export const PortalCustomString = `const PortalCustomExample = ({ ...args }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <Box bg="red.400" color="white">
      Dette er en box
      <Portal containerRef={ref}>
        Portal: Denne teksten er portaled til den gule boksen!
      </Portal>
      <Box ref={ref} bg="yellow.500">
        <div>Container: Hei</div>
      </Box>
    </Box>
  );
};`;

export const PortalNestedString = `const PortalNestedExample = ({ ...args }) => {
  const ref = useRef(null);
  return (
    <div>
      <Portal containerRef={ref}>
        <Box bg="teal.500" color="white">
          Parent: Hei, velkommen
          <Portal>Child: Jeg er festet til min parent portal</Portal>
        </Box>
      </Portal>
      <Box bg="red.400" color="white" ref={ref} />
    </div>
  );
};`;

export const PortalNotAppendedString = `function PortalNotAppendedExample({ ...args }) {
  const ref = useRef(null);
  return (
    <div>
      <Portal containerRef={ref}>
        <Box bg="teal.500" color="white">
          Parent: Hei, velkommen
          <Portal appendToParentPortal={false}>
            Child: Jeg går til document.body
          </Portal>
        </Box>
      </Portal>
      <div style={{ background: "red" }} ref={ref} />
    </div>
  );
}`;
