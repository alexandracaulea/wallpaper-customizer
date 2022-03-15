const data = {
  themes: ["light", "dark"],
  colors: [
    "black",
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "teal",
    "yellow",
  ],
  groupByTheme: {
    light: ["black"],
    dark: [
      "blue",
      "green",
      "orange",
      "purple",
      "red",
      "teal",
      "yellow",
    ],
  },
  groupByColor: {
    black: ["light", "dark"],
    blue: ["dark"],
    green: ["dark"],
    orange: ["dark"],
    purple: ["dark"],
    teal: ["dark"],
    yellow: ["dark"],
    red: ["dark"],
  },
};

export default data;
