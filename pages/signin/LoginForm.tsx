'use client';

import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import MuiFormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import { ChangeEvent, MouseEvent, useState } from 'react';
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface State {
  password: string;
  showPassword: boolean;
}

const LinkStyled = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main,
}));

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(
  ({ theme }) => ({
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(4),
    '& .MuiFormControlLabel-label': {
      fontSize: '0.875rem',
      color: theme.palette.text.secondary,
    },
  }),
);

const LoginFormContainer = () => {
  const [values, setValues] = useState<State>({
    password: '',
    showPassword: false,
  });

  // hooks
  const router = useRouter();

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <form noValidate autoComplete="off" onSubmit={(e) => e.preventDefault()}>
      <TextField
        autoFocus
        fullWidth
        id="username"
        label="Username"
        sx={{ marginBottom: 4 }}
      />
      <FormControl fullWidth>
        <InputLabel htmlFor="auth-login-password">Password</InputLabel>
        <OutlinedInput
          label="Password"
          value={values.password}
          id="auth-login-password"
          onChange={handleChange('password')}
          type={values.showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                edge="end"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                aria-label="toggle password visibility"
              >
                {values.showPassword ? (
                  <VisibilityOutlined />
                ) : (
                  <VisibilityOffOutlined />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Box
        sx={{
          mb: 4,
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <FormControlLabel control={<Checkbox />} label="Remember Me" />
        <Link passHref href="/">
          <LinkStyled onClick={(e) => e.preventDefault()}>
            Forgot Password?
          </LinkStyled>
        </Link>
      </Box>
      <Button
        fullWidth
        size="large"
        variant="contained"
        sx={{ marginBottom: 7 }}
        onClick={() => router.push('/')}
      >
        Login
      </Button>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Typography variant="body2" sx={{ marginRight: 2 }}>
          New on our platform?
        </Typography>
        <Typography variant="body2">
          <Link passHref href="/signup">
            <LinkStyled>Create an account</LinkStyled>
          </Link>
        </Typography>
      </Box>
    </form>
  );
};

export default LoginFormContainer;
