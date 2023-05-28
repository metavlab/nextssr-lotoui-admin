import { ThemeOptions } from '@mui/material';
import { Settings } from 'src/context/types';
import palette from './palette';
import { deepmerge } from '@mui/utils';
import spacing from './spacing';
import breakpoints from './breakpoints';
import shadows from './shadows';

const themeBuilder = (settings: Settings): ThemeOptions => {
  const { mode, themeColor } = settings;

  const themeConfig = {
    palette: palette(mode, themeColor),
    typography: {
      fontFamily: [
        'Inter',
        'sans-serif',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    breakpoints: breakpoints(),
    ...spacing,
    shadows: shadows(mode),
    shape: {
      borderRadius: 6,
    },
    mixins: {
      toolbar: {
        minHeight: 64,
      },
    },
  };

  return deepmerge(themeConfig, {
    palette: {
      primary: {
        ...themeConfig.palette[themeColor],
      },
    },
  });
};

export default themeBuilder;
