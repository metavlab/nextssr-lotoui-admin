'use client';

import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { Fragment, SyntheticEvent, useEffect, useState } from 'react';
import UserAvatar from './UserAvatar';
import Menu from '@mui/material/Menu';
import { UserBaseType } from 'src/ui';
import UserInfoCard from './UserInfoCard';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

// const getUserAvatar = async (): Promise<string> => {
//   const mockAvatar = '/images/avatars/default.png';
//   return Promise.resolve(mockAvatar);
// };

const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
}));

const UserDropdown = () => {
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const [user, setUser] = useState<UserBaseType>({});

  useEffect(() => {
    const u: UserBaseType = {
      nickname: 'Lanbery',
      username: 'lanbery',
      avatar: '/images/avatars/default.png',
      role: 'Admin',
    };
    setUser({ ...u });
  }, []);

  // ** Hooks
  const router = useRouter();
  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = (url?: string) => {
    if (url) {
      router.push(url);
    }
    setAnchorEl(null);
  };
  return (
    <Fragment>
      <UserAvatar handleDropdownOpen={handleDropdownOpen} user={user} />

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleDropdownClose()}
        sx={{ '& .MuiMenu-paper': { width: 230, marginTop: 4 } }}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <UserInfoCard {...user} />
        <Divider sx={{ mt: 0, mb: 1 }} />

        <MenuItem sx={{ py: 2 }} onClick={() => handleDropdownClose('/signin')}>
          <LogoutOutlinedIcon
            sx={{
              marginRight: 2,
              fontSize: '1.375rem',
              color: 'text.secondary',
            }}
          />
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default UserDropdown;
