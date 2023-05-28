'use client';

import { ReactNode } from 'react';
import { useSettings } from 'src/ui/hooks/useSettings';
import VerticalLayout from './vertical/VerticalLayout';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavigationItems from './navigation';
import { Theme } from '@mui/material/styles';
import AppBarContent from './vertical/topbar/AppBarContent';

const DefaultLayout = ({ children }: { children: ReactNode }) => {
  const { settings, saveSettings } = useSettings();
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
  return (
    <VerticalLayout
      hidden={hidden}
      settings={settings}
      saveSettings={saveSettings}
      verticalNavItems={NavigationItems()}
      appBarContent={(props) => (
        <AppBarContent
          hidden={hidden}
          settings={settings}
          saveSettings={saveSettings}
          toggleNavVisibility={props.toggleNavVisibility}
        />
      )}
    >
      {children}
    </VerticalLayout>
  );
};

export default DefaultLayout;
