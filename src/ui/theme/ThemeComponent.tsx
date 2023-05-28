'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ReactNode } from 'react';
import themeBuilder from './ThemeBuilder';
import Overrides from './overrides';
import GlobalStyling from './globalStyles';
import typography from './typography';
import { Settings } from '../types';

interface Props {
  settings: Settings;
  children: ReactNode;
}

const ThemeComponent = (props: Props) => {
  const { settings, children } = props;

  const coreThemeConfig = themeBuilder(settings);

  let theme = createTheme(coreThemeConfig);

  theme = createTheme(theme, {
    components: { ...Overrides(theme) },
    typography: { ...typography(theme) },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
      {children}
    </ThemeProvider>
  );
};
export default ThemeComponent;
