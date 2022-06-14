module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      spacing: {
        "full-vh": "100vh",
        "header-sm": "calc(100% - 128px)",
        1120: "1120px",
      },
      colors: {},
      backgroundImage: {
        "img-header":
          "linear-gradient(180deg, #141616 0%, rgba(20, 22, 22, 0) 100%)",
      },
    },

    screens: {
      "2xl": "1536px",
      xl: "1280px",
      lg: "1024px",
      md: "768px",
      sm: "640",
      "header-md": "960px",
      "header-sm": "640px",
    },
  },
  plugins: [],
};
