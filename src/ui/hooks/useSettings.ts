'use client';

import { useContext } from 'react';
import { SettingsContext } from 'src/context/settings.context';
import { SettingsContextValue } from '../types';

export const useSettings = (): SettingsContextValue =>
  useContext(SettingsContext);
