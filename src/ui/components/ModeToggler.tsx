import { IconButton, PaletteMode } from '@mui/material';
import LightMode from '@mui/icons-material/LightMode';
import DarkMode from '@mui/icons-material/DarkMode';
import { Settings } from '../types';

interface Props {
  settings: Settings;
  saveSettings: (values: Settings) => void;
}

const ModeToggler = (props: Props) => {
  const { settings, saveSettings } = props;
  const handleModeChange = (mode: PaletteMode) => {
    saveSettings({
      ...settings,
      mode,
    });
  };
  const handleModeToggle = () => {
    if (settings.mode === 'light') {
      handleModeChange('dark');
    } else {
      handleModeChange('light');
    }
  };

  return (
    <IconButton color="inherit" aria-haspopup="true" onClick={handleModeToggle}>
      {settings.mode === 'dark' ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default ModeToggler;
