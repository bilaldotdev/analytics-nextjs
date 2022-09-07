import React from 'react';
import { createTheme } from '@mui/material/styles';
import typography from './typography';
interface create_theme {
  palette: object;
  typography: any;
}
const _theme: create_theme = {
  palette: {
    primary: { main: '#65359f' },
    bg: { main: '#ebf1ff', dark: '#becffe', darker: '#93a9fd' },
    loader: { main: '#65359f' },
    text: {
      primary: '#65359f',
      secondary: '#000000',
    },
  },
  typography: typography,
};
export const app_theme = createTheme({ ..._theme });
