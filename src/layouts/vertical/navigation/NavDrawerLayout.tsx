import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import { ReactNode } from 'react';
import { NavCommonPropsType } from 'src/ui';

interface NavDrawerProps extends NavCommonPropsType {
  navWidth: number;
  navVisible: boolean;
  setNavVisible: (visible: boolean) => void;
  children: ReactNode;
}

const NavDrawer = styled(MuiDrawer)<DrawerProps>(() => ({
  overflowX: 'hidden',
  transition: 'width .25s ease-in-out',
  '& ul': {
    listStyle: 'none',
  },
  '& .MuiListItem-gutters': {
    paddingLeft: 4,
    paddingRight: 4,
  },
  '& .MuiDrawer-paper': {
    left: 'unset',
    right: 'unset',
    overflowX: 'hidden',
    transition: 'width .25s ease-in-out, box-shadow .25s ease-in-out',
  },
}));

const NavDrawerLayout = (props: NavDrawerProps) => {
  const { settings, children, hidden, navWidth, navVisible, setNavVisible } =
    props;

  // hooks
  const theme = useTheme();

  const MobileDrawerProps = {
    open: navVisible,
    onClose: () => setNavVisible(false),
    ModalProps: {
      keepMounted: true,
    },
  };
  const DesktopDrawerProps = {
    open: true,
    onClose: () => null,
  };
  return (
    <NavDrawer
      anchor={settings.navAnchor}
      className="layout-vertical-nav"
      variant={hidden ? 'temporary' : 'permanent'}
      {...(hidden ? { ...MobileDrawerProps } : { ...DesktopDrawerProps })}
      PaperProps={{ sx: { width: navWidth } }}
      sx={{
        width: navWidth,
        '& .MuiDrawer-paper': {
          borderRight: 0,
          backgroundColor: theme.palette.background.default,
        },
      }}
    >
      {children}
    </NavDrawer>
  );
};

export default NavDrawerLayout;
