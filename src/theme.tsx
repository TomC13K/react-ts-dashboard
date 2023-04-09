import React, { createContext,useState,useMemo } from "react";
import {createTheme} from "@mui/material/styles";

//color design tokens
export interface Colors {
  redAccent: any;
  blueAccent: any;
  greenAccent: any;
  grey: any;
  primary: any;
}
export const tokens = (mode:string) :Colors => ({
  ...(mode === "dark" 
  ? {
    grey: {
      100: "#e0e0e0",
      200: "#c2c2c2",
      300: "#a3a3a3",
      400: "#858585",
      500: "#666666",
      600: "#525252",
      700: "#3d3d3d",
      800: "#292929",
      900: "#141414"
    },
    primary: {
      100: "#d0d1d5",
      200: "#a1a4ab",
      300: "#727681",
      400: "#1F2A40",
      500: "#141b2d",
      600: "#101624",
      700: "#0c101b",
      800: "#080b12",
      900: "#040509"
    },
    greenAccent: {
      100: "#dbf5ee",
      200: "#b7ebde",
      300: "#94e2cd",
      400: "#70d8bd",
      500: "#4cceac",
      600: "#3da58a",
      700: "#2e7c67",
      800: "#1e5245",
      900: "#0f2922"
    },
    redAccent: {
      100: "#f8dcdb",
      200: "#f1b9b7",
      300: "#e99592",
      400: "#e2726e",
      500: "#db4f4a",
      600: "#af3f3b",
      700: "#832f2c",
      800: "#58201e",
      900: "#2c100f"
    },
    blueAccent: {
      100: "#e1e2fe",
      200: "#c3c6fd",
      300: "#a4a9fc",
      400: "#868dfb",
      500: "#6870fa",
      600: "#535ac8",
      700: "#3e4396",
      800: "#2a2d64",
      900: "#151632"
    }
  } : {
    grey: {
      100: "#141414",
      200: "#292929",
      300: "#3d3d3d",
      400: "#525252",
      500: "#666666",
      600: "#858585",
      700: "#a3a3a3",
      800: "#c2c2c2",
      900: "#e0e0e0"
    },
    primary: {
      100: "#040509",
      200: "#080b12",
      300: "#0c101b",
      400: "#f2f0f0",
      500: "#141b2d",
      600: "#434957",
      700: "#727681",
      800: "#a1a4ab",
      900: "#d0d1d5"
    },
    greenAccent: {
      100: "#0f2922",
      200: "#1e5245",
      300: "#2e7c67",
      400: "#3da58a",
      500: "#4cceac",
      600: "#70d8bd",
      700: "#94e2cd",
      800: "#b7ebde",
      900: "#dbf5ee"
    },
    redAccent: {
      100: "#2c100f",
      200: "#58201e",
      300: "#832f2c",
      400: "#af3f3b",
      500: "#db4f4a",
      600: "#e2726e",
      700: "#e99592",
      800: "#f1b9b7",
      900: "#f8dcdb"
    },
    blueAccent: {
      100: "#151632",
      200: "#2a2d64",
      300: "#3e4396",
      400: "#535ac8",
      500: "#6870fa",
      600: "#868dfb",
      700: "#a4a9fc",
      800: "#c3c6fd",
      900: "#e1e2fe"
    }
  }),
});

export interface Palette {
  primary:any;
  secondary:any;
  neutral:any;
  background:any;
  mode: any;
}

export interface ThemeObject {
  palette: Palette;
  typography: any;
}

// MUI theme settings
export const themeSettings  = (mode:string) :ThemeObject => {
  const colors :Colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
      ? {
        primary:{
          main:colors.primary[500],
        },
        secondary:{
          main:colors.greenAccent[500],
        },
        neutral:{
          dark:colors.grey[700],
          main:colors.grey[500],
          light:colors.grey[100],
        },
        background:{
          default:colors.primary[500],
        }
      }:{
        primary:{
          main:colors.primary[100],
        },
        secondary:{
          main:colors.greenAccent[500],
        },
        neutral:{
          dark:colors.grey[700],
          main:colors.grey[500],
          light:colors.grey[100],
        },
        background:{
          default:"#fcfcfc",
        }
      }),
    },
    typography: {
      fontFamily: ["Roboto, sans-serif"].join(","),
      fontSize: 12,
      h1:{
        fontFamily: ["Roboto, sans-serif"].join(","),
        fontSize: 12,
      },
      h2:{
        fontFamily: ["Roboto, sans-serif"].join(","),
        fontSize: 32,
      },
      h3:{
        fontFamily: ["Roboto, sans-serif"].join(","),
        fontSize: 24,
      },
      h4:{
        fontFamily: ["Roboto, sans-serif"].join(","),
        fontSize: 20,
      },
      h5:{
        fontFamily: ["Roboto, sans-serif"].join(","),
        fontSize: 16,
      },
      h6:{
        fontFamily: ["Roboto, sans-serif"].join(","),
        fontSize: 14,
      },
    },
  }
};

//react context for the color mode
export const ColorModeContext: React.Context<{toggleColorMode: () => void}> = createContext({
  toggleColorMode: ():void => {}
});

export interface ColorUseMode {
    theme: ThemeObject;
    colorMode: {
        toggleColorMode: () => void;
    }
}
export const useMode = () :ColorUseMode => {
  const [mode,setMode] =  useState<string>("dark");

  const colorMode: {toggleColorMode: () => void} = useMemo(
    () => ({
      toggleColorMode: () => 
        setMode((prev: string): string => (prev === "light" ? "dark" : "light")),
  }),
  []
  );

  // mode in here is not string !
  const theme :any = useMemo( () => createTheme(themeSettings(mode)), [mode]);

  return {theme, colorMode};
};

