import { Provider } from "@/components/ui/provider";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/700.css";
import "material-symbols";

export const KvibProvider = ({ children }: { children: React.ReactNode }) => <Provider>{children}</Provider>;
