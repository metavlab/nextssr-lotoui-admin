'use client';

import { ReactNode, createContext, useState } from 'react';
import themeConfig from '../config/theme.config';
import { Settings, SettingsContextValue } from '../ui/types';

const initialSettings: Settings = {
  mode: themeConfig.mode,
  themeColor: 'primary',
  contentWidth: themeConfig.contentWidth,
  navAnchor: 'left',
};

export const SettingsContext = createContext<SettingsContextValue>({
  saveSettings: () => null,
  settings: initialSettings,
});

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  //states make sure in  client side
  const [settings, setSettings] = useState<Settings>({ ...initialSettings });

  const saveSettings = (updateSettings: Settings) => {
    setSettings(updateSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;
