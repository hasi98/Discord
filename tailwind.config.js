module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  // content: [
  //   "./src/**/*.{js,jsx,ts,tsx}",
  // ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        discord_blue: "#404EED",
        discord_blurple: "#7289da",
        discord_purple: "#5865f2",
        discord_green: "#3ba55c",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}