import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MuiCard, { CardProps } from '@mui/material/Card';
import { ReactNode } from 'react';
import { AnglerLogo } from 'src/ui/icons';
import FooterIllustrationsV1 from './FooterIllustration';
import themeConfig from 'src/config/theme.config';

export type SignLayoutProps = {
  children: ReactNode;
  title?: string;
};

const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' },
}));

const SignLayout = (props: SignLayoutProps) => {
  const { children, title = themeConfig.templateName } = props;
  return (
    <Box className="content-center">
      <Card sx={{ zIndex: 1 }}>
        <CardContent
          sx={{ padding: (theme) => `${theme.spacing(12, 9, 7)} !important` }}
        >
          <Box
            sx={{
              mb: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <AnglerLogo
              sx={{
                strokeWidth: 2,
                color: (theme) => theme.palette.primary.main,
                fontSize: 48,
              }}
            />

            <Typography
              variant="h6"
              sx={{
                ml: 1,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: 'capitalize',
                fontSize: '1.5rem !important',
                color: (theme) => theme.palette.primary.main,
              }}
            >
              {title}
            </Typography>
          </Box>
          {children}
        </CardContent>
      </Card>
      <FooterIllustrationsV1 />
    </Box>
  );
};

export default SignLayout;
