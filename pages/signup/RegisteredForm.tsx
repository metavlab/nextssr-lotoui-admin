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
import { ChangeEvent, Fragment, MouseEvent, useState } from 'react';
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface State {
  password: string;
  mobile: string;
  showPassword: boolean;
  agree: boolean;
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

const RegisteredForm = () => {
  const [values, setValues] = useState<State>({
    password: '',
    mobile: '',
    showPassword: false,
    agree: false,
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
      <TextField fullWidth id="mobile" label="Phone" sx={{ marginBottom: 4 }} />
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
      <FormControlLabel
        control={
          <Checkbox
            checked={Boolean(values.agree)}
            onChange={handleChange('agree')}
          />
        }
        label={
          <Fragment>
            <span>I agree to </span>
            <Link href="/" passHref>
              <LinkStyled
                onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}
              >
                privacy policy & terms
              </LinkStyled>
            </Link>
          </Fragment>
        }
      />
      {/** Action Button */}
      <Button
        fullWidth
        size="large"
        variant="contained"
        sx={{ marginBottom: 7 }}
        onClick={() => router.push('/')}
      >
        Sign Up
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
          Already have an account?
        </Typography>
        <Typography variant="body2">
          <Link passHref href="/signin">
            <LinkStyled>Sign in instead</LinkStyled>
          </Link>
        </Typography>
      </Box>
    </form>
  );
};

export default RegisteredForm;
