import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fire: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        concrete: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
          950: "#0a0a0a",
        },
        blood: {
          500: "#dc2626",
          600: "#b91c1c",
          700: "#991b1b",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        display: ['"Bebas Neue"', '"Arial Black"', "sans-serif"],
        body: ['"Space Grotesk"', "system-ui", "sans-serif"],
      },
      animation: {
        "smoke-rise": "smokeRise 8s ease-in-out infinite",
        "smoke-drift": "smokeDrift 12s ease-in-out infinite",
        "flicker": "flicker 3s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-left": "slideLeft 0.6s ease-out forwards",
        "slide-right": "slideRight 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "text-glitch": "textGlitch 5s ease-in-out infinite",
        "burn": "burn 4s ease-in-out infinite",
        "ember-float": "emberFloat 6s ease-in-out infinite",
        "grate-sizzle": "grateSizzle 0.5s ease-in-out",
      },
      keyframes: {
        smokeRise: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.3" },
          "50%": { transform: "translateY(-80px) scale(1.5)", opacity: "0.6" },
          "100%": { transform: "translateY(-160px) scale(2)", opacity: "0" },
        },
        smokeDrift: {
          "0%": { transform: "translateX(0) translateY(0) rotate(0deg)", opacity: "0.2" },
          "25%": { transform: "translateX(30px) translateY(-40px) rotate(5deg)", opacity: "0.4" },
          "50%": { transform: "translateX(10px) translateY(-80px) rotate(-3deg)", opacity: "0.5" },
          "75%": { transform: "translateX(-20px) translateY(-120px) rotate(2deg)", opacity: "0.3" },
          "100%": { transform: "translateX(0) translateY(-160px) rotate(0deg)", opacity: "0" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "10%": { opacity: "0.8" },
          "20%": { opacity: "1" },
          "30%": { opacity: "0.6" },
          "40%": { opacity: "1" },
          "50%": { opacity: "0.9" },
          "60%": { opacity: "1" },
          "70%": { opacity: "0.7" },
          "80%": { opacity: "1" },
          "90%": { opacity: "0.85" },
        },
        glowPulse: {
          "0%, 100%": { textShadow: "0 0 10px #f97316, 0 0 20px #ea580c, 0 0 40px #c2410c" },
          "50%": { textShadow: "0 0 20px #fb923c, 0 0 40px #f97316, 0 0 80px #ea580c" },
        },
        slideUp: {
          "0%": { transform: "translateY(60px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(60px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-60px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        textGlitch: {
          "0%, 90%, 100%": { transform: "translate(0)", clipPath: "inset(0 0 0 0)" },
          "92%": { transform: "translate(-2px, 1px)", clipPath: "inset(20% 0 40% 0)" },
          "94%": { transform: "translate(2px, -1px)", clipPath: "inset(60% 0 10% 0)" },
          "96%": { transform: "translate(-1px, 2px)", clipPath: "inset(10% 0 70% 0)" },
          "98%": { transform: "translate(1px, -2px)", clipPath: "inset(50% 0 20% 0)" },
        },
        burn: {
          "0%, 100%": { 
            textShadow: "0 0 2px #ea580c, 0 0 4px #f97316, 0 0 6px #fb923c",
            color: "#f97316" 
          },
          "25%": { 
            textShadow: "0 0 4px #f97316, 0 0 8px #ea580c, 0 0 12px #c2410c",
            color: "#fb923c" 
          },
          "50%": { 
            textShadow: "0 0 6px #c2410c, 0 0 12px #ea580c, 0 0 18px #9a3412",
            color: "#f97316" 
          },
          "75%": { 
            textShadow: "0 0 3px #ea580c, 0 0 6px #fb923c, 0 0 9px #f97316",
            color: "#fb923c" 
          },
        },
        emberFloat: {
          "0%": { transform: "translateY(0) translateX(0)", opacity: "0.8" },
          "25%": { transform: "translateY(-30px) translateX(10px)", opacity: "1" },
          "50%": { transform: "translateY(-60px) translateX(-5px)", opacity: "0.6" },
          "75%": { transform: "translateY(-90px) translateX(15px)", opacity: "0.4" },
          "100%": { transform: "translateY(-120px) translateX(0)", opacity: "0" },
        },
        grateSizzle: {
          "0%, 100%": { transform: "scale(1)" },
          "25%": { transform: "scale(1.02)" },
          "50%": { transform: "scale(0.98)" },
          "75%": { transform: "scale(1.01)" },
        },
      },
      backgroundImage: {
        "concrete-texture": "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
        "fire-gradient": "linear-gradient(135deg, #7c2d12 0%, #ea580c 50%, #f97316 100%)",
      },
    },
  },
  plugins: [],
}

export default config
