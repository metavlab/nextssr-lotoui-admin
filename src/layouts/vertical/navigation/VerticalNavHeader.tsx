import Box, { BoxProps } from '@mui/material/Box';
import { SvgIconProps } from '@mui/material/SvgIcon';
import Typography, { TypographyProps } from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Link, { LinkProps } from 'next/link';
import themeConfig from 'src/config/theme.config';
import { AnglerLogo } from 'src/ui/icons';

const MenuHeaderWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingRight: theme.spacing(4.5),
  transition: 'padding .25s ease-in-out',
  minHeight: theme.mixins.toolbar.minHeight,
}));

const HeaderTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  lineHeight: 'normal',
  color: theme.palette.text.primary,
  transition: 'opacity .25s ease-in-out, margin .25s ease-in-out',
}));

const StyledLink = styled(Link)<LinkProps>({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
});

const LogoWrapper = styled(AnglerLogo)<SvgIconProps>(({ theme }) => ({
  color:
    theme.palette.mode === 'dark'
      ? theme.palette.error.main
      : theme.palette.customColors.main,
}));
const VerticalNavHeader = () => {
  return (
    <MenuHeaderWrapper className="nav-header" sx={{ pl: 6 }}>
      <StyledLink href="/" passHref>
        <LogoWrapper sx={{ fontSize: 40 }} />
        <HeaderTitle>{themeConfig.templateName}</HeaderTitle>
      </StyledLink>
    </MenuHeaderWrapper>
  );
};
export default VerticalNavHeader;
