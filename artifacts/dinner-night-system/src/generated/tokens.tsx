/* GENERATED FROM tokens.json -- DO NOT EDIT. Run scripts/build-tokens.mjs. */
// Portable design tokens (colors as hex). Web consumes the theme via
// src/index.css; mobile (Expo) and any other platform import this object so the
// whole product shares one source of truth.
export const tokens = {
  "color": {
    "light": {
      "background": "#f6eddb",
      "foreground": "#633c30",
      "border": "#bfa17b",
      "card": "#f6eddb",
      "cardForeground": "#633c30",
      "popover": "#f6eddb",
      "popoverForeground": "#633c30",
      "primary": "#713d30",
      "primaryForeground": "#f6eddb",
      "secondary": "#eee2ca",
      "secondaryForeground": "#633c30",
      "muted": "#e9dbc0",
      "mutedForeground": "#80624f",
      "accent": "#b98c51",
      "accentForeground": "#291a10",
      "destructive": "#a23227",
      "destructiveForeground": "#ffffff",
      "input": "#bfa17b",
      "ring": "#713d30",
      "chart1": "#713d30",
      "chart2": "#b98c51",
      "chart3": "#58634a",
      "chart4": "#996f58",
      "chart5": "#574651",
      "sidebar": "#eee2ca",
      "sidebarForeground": "#633c30",
      "sidebarBorder": "#bfa17b",
      "sidebarPrimary": "#713d30",
      "sidebarPrimaryForeground": "#f6eddb",
      "sidebarAccent": "#e9dbc0",
      "sidebarAccentForeground": "#633c30",
      "sidebarRing": "#713d30"
    },
    "dark": {
      "background": "#23130f",
      "foreground": "#f6eddb",
      "border": "#986e51",
      "card": "#3a1f18",
      "cardForeground": "#f6eddb",
      "popover": "#3a1f18",
      "popoverForeground": "#f6eddb",
      "primary": "#d6a58b",
      "primaryForeground": "#23130f",
      "secondary": "#513128",
      "secondaryForeground": "#f6eddb",
      "muted": "#483028",
      "mutedForeground": "#d0b8a2",
      "accent": "#c99b62",
      "accentForeground": "#23130f",
      "destructive": "#ec9588",
      "destructiveForeground": "#23130f",
      "input": "#986e51",
      "ring": "#d6a58b",
      "chart1": "#713d30",
      "chart2": "#b98c51",
      "chart3": "#58634a",
      "chart4": "#996f58",
      "chart5": "#574651",
      "sidebar": "#301b15",
      "sidebarForeground": "#f6eddb",
      "sidebarBorder": "#986e51",
      "sidebarPrimary": "#d6a58b",
      "sidebarPrimaryForeground": "#23130f",
      "sidebarAccent": "#513128",
      "sidebarAccentForeground": "#f6eddb",
      "sidebarRing": "#d6a58b"
    }
  },
  "fontFamily": {
    "sans": [
      "Trebuchet MS",
      "sans-serif"
    ],
    "serif": [
      "Georgia",
      "Times New Roman",
      "serif"
    ],
    "mono": [
      "Menlo",
      "monospace"
    ]
  },
  "radius": "2px",
  "spacing": "2px"
} as const;

export type Tokens = typeof tokens;
export default tokens;
