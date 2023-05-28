import Menu from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import { Settings } from 'src/ui';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ModeToggler from 'src/ui/components/ModeToggler';
import UserDropdown from 'src/layouts/user/UserDropdown';

interface Props {
  hidden: boolean;
  settings: Settings;
  saveSettings: (values: Settings) => void;
  toggleNavVisibility: () => void;
}

const AppBarContent = (props: Props) => {
  const { settings, hidden, saveSettings, toggleNavVisibility } = props;

  // ** Hook
  const hiddenSm = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm'),
  );

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        className="app-toolbar-left"
        sx={{ mr: 2, display: 'flex', alignItems: 'center' }}
      >
        {hidden ? (
          <IconButton
            color="inherit"
            onClick={toggleNavVisibility}
            sx={{ ml: -2.75, ...(hiddenSm ? {} : { mr: 3.5 }) }}
          >
            <Menu />
          </IconButton>
        ) : (
          <TextField
            size="small"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 4,
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        )}
      </Box>

      {/** Right Action */}
      <Box
        className="app-toolbar-right"
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <ModeToggler settings={settings} saveSettings={saveSettings} />
        <UserDropdown />
      </Box>
    </Box>
  );
};

export default AppBarContent;
