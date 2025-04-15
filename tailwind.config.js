/** @type {import('tailwindcss').Config} */
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
    extend: {
      keyframes: {
        seamlessScroll: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        seamlessScroll: "seamlessScroll 25s linear infinite",
      },
      rotate: {
        72: "72deg", // 新增72度旋轉
        162: "162.2deg",
        113: "113deg",
      },
    },
  },
  plugins: [],
};
