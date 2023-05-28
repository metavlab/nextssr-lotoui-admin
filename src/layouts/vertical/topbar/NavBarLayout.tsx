import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar';
import { styled, useTheme } from '@mui/material/styles';

import { NavCommonPropsType } from 'src/ui';
import { ReactNode } from 'react';

interface TopBarProps extends NavCommonPropsType {
  appBarContent?: (props: NavCommonPropsType) => ReactNode;
}

const AppBar = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
  transition: 'none',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 6),
  backgroundColor: 'transparent',
  color: theme.palette.text.primary,
  minHeight: theme.mixins.toolbar.minHeight,
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

const Toolbar = styled(MuiToolbar)<ToolbarProps>(({ theme }) => ({
  width: '100%',
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  padding: `${theme.spacing(0)} !important`,
  minHeight: `${theme.mixins.toolbar.minHeight}px !important`,
  transition:
    'padding .25s ease-in-out, box-shadow .25s ease-in-out, backdrop-filter .25s ease-in-out, background-color .25s ease-in-out',
}));

const NavBarLayout = (props: TopBarProps) => {
  const {
    settings,
    saveSettings,
    hidden,
    toggleNavVisibility,
    appBarContent: verticalAppBarContent,
  } = props;

  const { contentWidth } = settings;

  // ** Hooks
  const theme = useTheme();
  return (
    <AppBar
      elevation={0}
      color="default"
      className="layout-navbar"
      position="static"
    >
      <Toolbar
        className="navbar-content-container"
        sx={{
          ...(contentWidth === 'boxed' && {
            maxWith: `calc(1440px - ${theme.spacing(6)} * 2)`,
          }),
        }}
      >
        {verticalAppBarContent
          ? verticalAppBarContent({
              hidden,
              settings,
              saveSettings,
              toggleNavVisibility,
            })
          : null}
      </Toolbar>
    </AppBar>
  );
};

export default NavBarLayout;
