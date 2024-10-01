import { usePopper } from "@chakra-ui/react";
import { Box, useDisclosure, useMergeRefs, useOutsideClick } from "@kvib/react/src";
import React from "react";
import { DocsCanvas } from "../templates/DocsCanvas";

export const MergeRefsExample = ({ ref, ...props }) => {
  const internalRef = React.useRef();
  const refs = useMergeRefs(internalRef, ref);

  return (
    <DocsCanvas>
      <div {...props} ref={refs}>
        A div with multiple refs.
      </div>
    </DocsCanvas>
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
    <DocsCanvas>
      <div>
        <button ref={buttonEl} onClick={onOpen}>
          Click me to see the popover
        </button>
        {isOpen && (
          <Box ref={popperRef} bg="green">
            Click outside to close me
          </Box>
        )}
      </div>
    </DocsCanvas>
  );
};
