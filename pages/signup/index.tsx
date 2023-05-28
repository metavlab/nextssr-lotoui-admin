import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';
import BlankLayout from 'src/layouts/BlankLayout';
import SignLayout from 'src/layouts/sign/SignLayout';
import RegisteredForm from './RegisteredForm';

const SignupPage = () => {
  return (
    <SignLayout>
      <>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h6" sx={{ fontWeight: 500, marginBottom: 1.5 }}>
            Adventure starts here 🚀
          </Typography>
          <Typography variant="body2">
            Make your app management easy and fun!
          </Typography>
        </Box>
        <RegisteredForm />
      </>
    </SignLayout>
  );
};

SignupPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;
export default SignupPage;
