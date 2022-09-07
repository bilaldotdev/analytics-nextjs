import React, { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { app_theme } from './app_theme';
interface theme_ifc {
  children: ReactNode;
}
const MuiTheme = (props: theme_ifc) => {
  const { children } = props;
  return <ThemeProvider theme={app_theme}>{children}</ThemeProvider>;
};
export default MuiTheme;
