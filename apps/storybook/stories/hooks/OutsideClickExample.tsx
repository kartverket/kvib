import { useOutsideClick } from "@kvib/react";
import React from "react";

export const OutsideClickExample = () => {
  const ref = React.useRef();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  useOutsideClick({
    ref: ref,
    handler: () => setIsModalOpen(false),
  });

  return (
    <>
      {isModalOpen ? (
        <div ref={ref}>👋 Hey, I'm a modal. Click anywhere outside of me to close.</div>
      ) : (
        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      )}
    </>
  );
};
