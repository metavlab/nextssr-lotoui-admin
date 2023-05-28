'use client';

import Box, { BoxProps } from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import ListItem from '@mui/material/ListItem';
import ListItemButton, {
  ListItemButtonProps,
} from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ElementType, ReactNode } from 'react';
import themeConfig from 'src/config/theme.config';
import { handleURLQueries } from 'src/ui/helpers/url-handler';
import { NavMetaIcon } from 'src/ui/icons';
import { NavLink, Settings } from 'src/ui/types';

interface Props {
  item: NavLink;
  settings: Settings;
  navVisible?: boolean;
  toggleNavVisibility: () => void;
}

// ** Styled Components
const MenuNavLink = styled(ListItemButton)<
  ListItemButtonProps & {
    component?: ElementType;
    target?: '_blank' | undefined;
  }
>(({ theme }) => ({
  width: '100%',
  borderTopRightRadius: 100,
  borderBottomRightRadius: 100,
  color: theme.palette.text.primary,
  padding: theme.spacing(2.25, 3.5),
  transition: 'opacity .25s ease-in-out',
  '&.active, &.active:hover': {
    boxShadow: theme.shadows[3],
    backgroundImage: `linear-gradient(98deg, ${theme.palette.customColors.primaryGradient}, ${theme.palette.primary.main} 94%)`,
  },
  '&.active .MuiTypography-root, &.active .MuiSvgIcon-root': {
    color: `${theme.palette.common.white} !important`,
  },
}));

const MenuItemTextMetaWrapper = styled(Box)<BoxProps>({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  transition: 'opacity .25s ease-in-out',
  ...(themeConfig.menuTextTruncate && { overflow: 'hidden' }),
});

const NavLinkWrapper = styled(Link)<LinkProps>(() => ({
  textDecoration: 'none',
  width: '100%',
}));

const VerticalNavLink = ({ item, navVisible, toggleNavVisibility }: Props) => {
  // ** Hooks
  const router = useRouter();

  //@ts-ignore
  const IconTag: ReactNode = item.icon;

  const isNavLinkActive = () => {
    if (router.pathname === item.path || handleURLQueries(router, item.path)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <ListItem
      disablePadding
      className="nav-link"
      disabled={item.disabled || false}
      sx={{ mt: 1.5, px: '0 !important' }}
    >
      <NavLinkWrapper
        passHref
        href={item.path === undefined ? '/' : `${item.path}`}
      >
        <MenuNavLink
          component={'span'}
          className={isNavLinkActive() ? 'active' : ''}
          {...(item.openInNewTab ? { target: '_blank' } : null)}
          onClick={(e) => {
            if (item.path === undefined) {
              e.preventDefault();
              e.stopPropagation();
            }
            if (navVisible) {
              toggleNavVisibility();
            }
          }}
          sx={{
            pl: 5.5,
            ...(item.disabled
              ? { pointerEvents: 'none' }
              : { cursor: 'pointer' }),
          }}
        >
          <ListItemIcon
            sx={{
              mr: 2.5,
              color: 'text.primary',
              transition: 'margin .25s ease-in-out',
            }}
          >
            <NavMetaIcon icon={IconTag} />
          </ListItemIcon>

          <MenuItemTextMetaWrapper>
            <Typography {...(themeConfig.menuTextTruncate && { noWrap: true })}>
              {item.title}
            </Typography>
            {item.badgeContent ? (
              <Chip
                label={item.badgeContent}
                color={item.badgeColor || 'primary'}
                sx={{
                  height: 20,
                  fontWeight: 500,
                  marginLeft: 1.25,
                  '& .MuiChip-label': { px: 1.5, textTransform: 'capitalize' },
                }}
              />
            ) : null}
          </MenuItemTextMetaWrapper>
        </MenuNavLink>
      </NavLinkWrapper>
    </ListItem>
  );
};

export default VerticalNavLink;
