import { SystemContext } from "@/theme-utils";

export const breakpoints = {
  base: { value: "0em" },
  sm: { value: "30em" },
  md: { value: "48em" },
  lg: { value: "62em" },
  xl: { value: "80em" },
  "2xl": { value: "96em" },
};

type BreakpointCondition =
  | "sm"
  | "smOnly"
  | "smDown"
  | "md"
  | "mdOnly"
  | "mdDown"
  | "lg"
  | "lgOnly"
  | "lgDown"
  | "xl"
  | "xlOnly"
  | "xlDown"
  | "2xl"
  | "2xlOnly"
  | "2xlDown"
  | "smToMd"
  | "smToLg"
  | "smToXl"
  | "smTo2xl"
  | "mdToLg"
  | "mdToXl"
  | "mdTo2xl"
  | "lgToXl"
  | "lgTo2xl"
  | "xlTo2xl";

export function getBreakpointCondition(system: SystemContext, breakpoint: BreakpointCondition) {
  return system.breakpoints.conditions[breakpoint].toString().replace("@media", "only");
}
