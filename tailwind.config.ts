
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#1E40AF",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "#9333EA",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "#F3F4F6",
          foreground: "#111827",
        },
        learnly: {
          purple: "#9b87f5",
          blue: "#7E69AB",
          light: "#D6BCFA",
          gray: "#F1F0FB",
        },
      },
      keyframes: {
        "text-slide": {
          "0%, 27%": {
            transform: "translateY(0%)",
          },
          "33%, 60%": {
            transform: "translateY(-33.33%)",
          },
          "66%, 93%": {
            transform: "translateY(-66.66%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "text-slide": "text-slide 9s cubic-bezier(0.83, 0, 0.17, 1) infinite",
        "fade-in": "fade-in 0.5s ease-out",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
