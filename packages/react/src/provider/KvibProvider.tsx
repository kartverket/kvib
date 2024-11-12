import "@fontsource/mulish/400.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/700.css";
import "material-symbols";

import { Provider } from "@/components/ui/provider";

import { FC } from "react";

interface KvibProviderProps {
  children: React.ReactNode;
}

export const KvibProvider: FC<KvibProviderProps> = ({ children }) => {
  return <Provider>{children}</Provider>;
};
