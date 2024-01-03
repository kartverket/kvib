import { useMergeRefs, useOutsideClick, useDisclosure, Box } from "@kvib/react";
import { usePopper } from "@chakra-ui/react";
import React from "react";

export const MergeRefsExample = ({ ref, ...props }) => {
  const internalRef = React.useRef();
  const refs = useMergeRefs(internalRef, ref);

  return (
    <div {...props} ref={refs}>
      A div with multiple refs.
    </div>
  );
};

export const MergeRefsOtherExample = ({ ref, ...props }) => {
  const outsideRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { popperRef, referenceRef } = usePopper();

  useOutsideClick({
    ref: outsideRef,
    handler: () => isOpen && onClose(),
  });

  const buttonEl = useMergeRefs(outsideRef, referenceRef);

  return (
    <>
      <button ref={buttonEl} onClick={onOpen}>
        Click me to see the popover
      </button>
      {isOpen && (
        <Box ref={popperRef} bg="green">
          Click outside to close me
        </Box>
      )}
    </>
  );
};
