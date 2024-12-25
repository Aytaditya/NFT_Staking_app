import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,jsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,jsx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
