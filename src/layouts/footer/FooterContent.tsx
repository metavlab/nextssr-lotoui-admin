import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const FooterContent = () => {
  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, Made with `}
        <Box component="span" sx={{ color: 'error.main' }}>
          ❤️
        </Box>
        {` by `}
        <Link target="_blank" href="https://blog.lanbery.cc">
          LotoMui
        </Link>
      </Typography>
      {hidden ? null : (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            '& :not(:last-child)': { mr: 4 },
          }}
        >
          <Link
            target="_blank"
            href="https://github.com/metavlab/nextssr-mui-admin/blob/main/LICENSE"
          >
            MIT License
          </Link>

          <Link target="_blank" href="http://blog.lanbery.cc/about/">
            Give a Coffee
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default FooterContent;
