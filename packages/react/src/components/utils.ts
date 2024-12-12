// Utility type to merge two interfaces, prioritizing properties from B
export type Merge<A, B> = Omit<A, keyof B> & B;
