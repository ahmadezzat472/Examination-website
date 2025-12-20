tailwind.config = {
  theme: {
    extend: {
      colors: {
        /* =========================
        Primary Colors
        ========================= */
        primary: {
          50: "#ecfdf6",
          100: "#ccfbf5",
          200: "#99f6ea",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          DEFAULT: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",

          hover: "#0f766e",
          soft: "#ccfbf1",
        },

        /* =========================
        Secondary Colors
        ========================= */
        secondary: {
          DEFAULT: "#f43f5e",
          hover: "#e11d48",
        },

        /* =========================
        Status Colors
        ========================= */
        success: "#10b981",
        warning: "#f59e0b",
        danger: "#ef4444",

        /* =========================
        Light Mode
        ========================= */
        background: "#f3f4f6",
        surface: "#ffffff",
        "text-main": "#1f2937",
        muted: "#64748b",
        border: "#e5e7eb",

        /* =========================
        Dark Mode
        ========================= */
        "background-dark": "#131522",
        "surface-dark": "#1c1f33",
        "text-dark": "#e2e8f0",
        "muted-dark": "#94a3b8",
        "border-dark": "#2a2e4a",
      },

      /* =========================
         Font Family
      ========================= */
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      /* =========================
         Shadows
      ========================= */
      boxShadow: {
        navbar: "0 1px 3px rgba(0, 0, 0, 0.05)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        input: "0 2px 3px rgba(13, 148, 136, 0.3)",
        glow: "0 0 15px rgba(20, 184, 166, 0.35)",
      },
    },
  },
};
