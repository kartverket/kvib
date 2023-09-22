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

export const mapColorsRGBA: MapColorsType = {
  blue: {
    1: "rgba(71, 110, 212, 1)",
    2: "rgba(83, 126, 255, 1)",
    3: "rgba(62, 141, 246, 1)",
    4: "rgba(43, 188, 224, 1)",
    5: "rgba(0, 227, 255, 1)",
    6: "rgba(0, 190, 255, 1)",
  },
  purple: {
    1: "rgba(89, 82, 210, 1)",
    2: "rgba(174, 127, 233, 1)",
    3: "rgba(192, 175, 251, 1)",
    4: "rgba(209, 99, 230, 1)",
    5: "rgba(209, 99, 230, 1)",
  },
  pink: {
    1: "rgba(138, 3, 79, 1)",
    2: "rgba(185, 38, 89, 1)",
  },
  red: {
    1: "rgba(229, 72, 72, 1)",
    2: "rgba(241, 93, 78, 1)",
    3: "rgba(255, 146, 135, 1)",
    4: "rgba(223, 110, 121, 1)",
  },
  brown: {
    1: "rgba(144, 18, 10, 1)",
    2: "rgba(154, 82, 82, 1)",
    3: "rgba(225, 86, 44, 1)",
    4: "rgba(229, 109, 49, 1)",
    5: "rgba(255, 174, 73, 1)",
  },
  yellow: {
    1: "rgba(235, 171, 59, 1)",
    2: "rgba(235, 172, 35, 1)",
    3: "rgba(211, 196, 57, 1)",
    4: "rgba(239, 230, 69, 1)",
    5: "rgba(253, 219, 86, 1)",
  },
  green: {
    1: "rgba(0, 89, 0, 1)",
    2: "rgba(1, 164, 125, 1)",
    3: "rgba(0, 167, 108, 1)",
    4: "rgba(0, 203, 133, 1)",
  },
  black: {
    1: "rgba(0, 0, 0, 1)",
    2: "rgba(108, 121, 128, 1)",
    3: "rgba(199, 211, 217, 1)",
  },
};
