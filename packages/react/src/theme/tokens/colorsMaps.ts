type ColorShades = {
  [key: number]: string;
};

export type MapColorsType = {
  blue: ColorShades;
  purple: ColorShades;
  pink: ColorShades;
  red: ColorShades;
  brown: ColorShades;
  yellow: ColorShades;
  green: ColorShades;
  black: ColorShades;
};

export const mapColors: MapColorsType = {
  blue: {
    1: "#476ED4",
    2: "#537EFF",
    3: "#3E8DF6",
    4: "#2BBCE0",
    5: "#00E3FF",
    6: "#00BEFF",
  },
  purple: {
    1: "#5952D2",
    2: "#AE7FE9",
    3: "#C0AFFB",
    4: "#D163E6",
    5: "#D163E6",
  },
  pink: {
    1: "#8A034F",
    2: "#B92659",
  },
  red: {
    1: "#E54848",
    2: "#F15D4E",
    3: "#FF9287",
    4: "#DF6E79",
  },
  brown: {
    1: "#90120A",
    2: "#9A5252",
    3: "#E1562C",
    4: "#E56D31",
    5: "#FFAE49",
  },
  yellow: {
    1: "#EBAB3B",
    2: "#EBAC23",
    3: "#D3C439",
    4: "#EFE645",
    5: "#FDDB56",
  },
  green: {
    1: "#005900",
    2: "#01A47D",
    3: "#00A76C",
    4: "#00CB85",
  },
  black: {
    1: "#000000",
    2: "#6C7980",
    3: "#C7D3D9",
  },
};
