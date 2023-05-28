import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';
import themeConfig from 'src/config/theme.config';
import BlankLayout from 'src/layouts/BlankLayout';
import SignLayout from 'src/layouts/sign/SignLayout';
import LoginFormContainer from './LoginForm';

const SigninPage = () => {
  return (
    <SignLayout>
      <>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h6" sx={{ fontWeight: 500, marginBottom: 1.5 }}>
            Welcome to {themeConfig.templateName}! 👋🏻
          </Typography>
          <Typography variant="body2">
            Please sign-in to your account and start the adventure
          </Typography>
        </Box>
        <LoginFormContainer />
      </>
    </SignLayout>
  );
};

SigninPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;
export default SigninPage;
