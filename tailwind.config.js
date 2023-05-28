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
        discord_serverbg: "#36393f",
        discord_serversBG: "#202225",
        discord_channelsBG: "#2f3136",
        discord_serverNameHoverBg: "#34373c",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
