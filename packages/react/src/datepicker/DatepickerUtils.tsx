import { ChangeEvent } from "react";

export const DateChanged = (event: ChangeEvent<HTMLInputElement>): Date | string | null => {
  if (event) {
    return new Date();
  }

  return null;
};
