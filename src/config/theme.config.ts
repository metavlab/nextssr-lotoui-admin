import { PaletteMode } from '@mui/material';
import { ContentWidth } from 'src/ui/types';

export type ThemeConfig = {
  mode: PaletteMode;
  templateName: string;
  contentWidth: ContentWidth;
  routingLoader: boolean;
  disableRipple: boolean;
  navigationSize: number;
  menuTextTruncate: boolean;
  responsiveFontSizes: boolean;
};

const themeConfig: ThemeConfig = {
  templateName: 'LotoMui Admin',
  mode: 'light',
  contentWidth: 'boxed',

  // ** Routing Configs
  routingLoader: true /* true | false */,

  // ** Navigation (Menu) Configs
  menuTextTruncate: true /* true | false */,
  navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,

  // ** Other Configs
  responsiveFontSizes: true /* true | false */,
  disableRipple: false /* true | false */,
};

export default themeConfig;
