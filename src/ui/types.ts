import { PaletteMode } from '@mui/material';
import { ReactNode } from 'react';

declare module '@mui/material/styles' {
  interface Palette {
    customColors: {
      main: string;
      tableHeaderBg: string;
      primaryGradient: string;
    };
  }

  interface PaletteOptions {
    customColors?: {
      main?: string;
      tableHeaderBg?: string;
      primaryGradient?: string;
    };
  }
}

export type ContentWidth = 'full' | 'boxed';
export type ThemeColor =
  | 'primary'
  | 'secondary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success';

export type Settings = {
  mode: PaletteMode;
  contentWidth: ContentWidth;
  themeColor: ThemeColor;
  navAnchor: 'left' | 'right' | 'bottom';
};

export type SettingsContextValue = {
  settings: Settings;
  saveSettings: (values: Settings) => void;
};

export type NavLink = {
  path?: string;
  title: string;
  action?: string;
  subject?: string;
  disabled?: boolean;
  badgeContent?: string;
  externalLink?: boolean;
  openInNewTab?: boolean;
  icon?: string | string[] | ReactNode | { muiName: string };
  badgeColor?: ThemeColor | 'default';
};

export type NavSectionTitle = {
  action?: string;
  label: string;
  subject?: string;
};

export type VerticalNavItemsType = (NavLink | NavSectionTitle)[];

export type NavCommonPropsType = {
  hidden: boolean;
  settings: Settings;
  saveSettings?: (values: Settings) => void;
  toggleNavVisibility?: () => void;
};

export type LayoutProps = {
  hidden: boolean;
  settings: Settings;
  children: ReactNode;
  verticalNavItems: VerticalNavItemsType;
  scrollToTop?: (props?: any) => void;
  saveSettings: (values: Settings) => void;
  appBarContent?: (props: any) => ReactNode;
  verticalNavMenuContent?: (props?: any) => ReactNode;
  verticalNavMenuBranding?: (props?: any) => ReactNode;
  afterVerticalNavMenuContent?: (props?: any) => ReactNode;
  beforeVerticalNavMenuContent?: (props?: any) => ReactNode;
};

export type UserBaseType = {
  username?: string;
  nickname?: string;
  avatar?: string;
  role?: string | string[];
};

export {};
