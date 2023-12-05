const plugin = require("tailwindcss/plugin");

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    // 導致浪費兩小時除錯，會噴自定義-[xxpx]
    // screens: {
    //   sm: "390px",
    // 'sm': '390px',
    // },
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
    },
    spacing: {
      xxs: "4px",
      xs: "8px",
      s: "12px",
      m: "16px",
      l: "20px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "40px",
      "4xl": "48px",
      "5xl": "64px",
    },
    extend: {
      colors: {
        primary: "#262E49",
        disabled: "#BFBFBF",
        numberOne: "#DFA175",
        numberTwo: "#8894D8",
        numberThree: "#84CB98",
      },
      screens: {
        // 成功
        'sm': '1166px',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
      addVariant("hocus", ["&:hover", "&:focus"]);
    },
    plugin(function ({ matchVariant }) {
      matchVariant(
        "nth",
        (value) => {
          return `&:nth-child(${value})`;
        },
        {
          values: {
            1: "1",
            2: "2",
            3: "3",
          },
        },
      );
    }),
  ],
};
