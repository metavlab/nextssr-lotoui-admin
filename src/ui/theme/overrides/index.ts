import { Theme } from '@mui/material/styles';
import MuiInput from './input';

const Overrides = (theme: Theme) => {
  const input = MuiInput(theme);

  return Object.assign(input);
};

export default Overrides;
