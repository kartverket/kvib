type ColorShades = {
  [key: number]: { value: string };
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
    1: { value: "#476ED4" },
    2: { value: "#537EFF" },
    3: { value: "#3E8DF6" },
    4: { value: "#2BBCE0" },
    5: { value: "#00E3FF" },
    6: { value: "#00BEFF" },
  },
  purple: {
    1: { value: "#5952D2" },
    2: { value: "#AE7FE9" },
    3: { value: "#C0AFFB" },
    4: { value: "#D163E6" },
    5: { value: "#D163E6" },
  },
  pink: {
    1: { value: "#8A034F" },
    2: { value: "#B92659" },
  },
  red: {
    1: { value: "#E54848" },
    2: { value: "#F15D4E" },
    3: { value: "#FF9287" },
    4: { value: "#DF6E79" },
  },
  brown: {
    1: { value: "#90120A" },
    2: { value: "#9A5252" },
    3: { value: "#E1562C" },
    4: { value: "#E56D31" },
    5: { value: "#FFAE49" },
  },
  yellow: {
    1: { value: "#EBAB3B" },
    2: { value: "#EBAC23" },
    3: { value: "#D3C439" },
    4: { value: "#EFE645" },
    5: { value: "#FDDB56" },
  },
  green: {
    1: { value: "#005900" },
    2: { value: "#01A47D" },
    3: { value: "#00A76C" },
    4: { value: "#00CB85" },
  },
  black: {
    1: { value: "#000000" },
    2: { value: "#6C7980" },
    3: { value: "#C7D3D9" },
  },
};

export const mapColorsRGBA: MapColorsType = {
  blue: {
    1: { value: "rgba(71, 110, 212, 1)" },
    2: { value: "rgba(83, 126, 255, 1)" },
    3: { value: "rgba(62, 141, 246, 1)" },
    4: { value: "rgba(43, 188, 224, 1)" },
    5: { value: "rgba(0, 227, 255, 1)" },
    6: { value: "rgba(0, 190, 255, 1)" },
  },
  purple: {
    1: { value: "rgba(89, 82, 210, 1)" },
    2: { value: "rgba(174, 127, 233, 1)" },
    3: { value: "rgba(192, 175, 251, 1)" },
    4: { value: "rgba(209, 99, 230, 1)" },
    5: { value: "rgba(209, 99, 230, 1)" },
  },
  pink: {
    1: { value: "rgba(138, 3, 79, 1)" },
    2: { value: "rgba(185, 38, 89, 1)" },
  },
  red: {
    1: { value: "rgba(229, 72, 72, 1)" },
    2: { value: "rgba(241, 93, 78, 1)" },
    3: { value: "rgba(255, 146, 135, 1)" },
    4: { value: "rgba(223, 110, 121, 1)" },
  },
  brown: {
    1: { value: "rgba(144, 18, 10, 1)" },
    2: { value: "rgba(154, 82, 82, 1)" },
    3: { value: "rgba(225, 86, 44, 1)" },
    4: { value: "rgba(229, 109, 49, 1)" },
    5: { value: "rgba(255, 174, 73, 1)" },
  },
  yellow: {
    1: { value: "rgba(235, 171, 59, 1)" },
    2: { value: "rgba(235, 172, 35, 1)" },
    3: { value: "rgba(211, 196, 57, 1)" },
    4: { value: "rgba(239, 230, 69, 1)" },
    5: { value: "rgba(253, 219, 86, 1)" },
  },
  green: {
    1: { value: "rgba(0, 89, 0, 1)" },
    2: { value: "rgba(1, 164, 125, 1)" },
    3: { value: "rgba(0, 167, 108, 1)" },
    4: { value: "rgba(0, 203, 133, 1)" },
  },
  black: {
    1: { value: "rgba(0, 0, 0, 1)" },
    2: { value: "rgba(108, 121, 128, 1)" },
    3: { value: "rgba(199, 211, 217, 1)" },
  },
};
