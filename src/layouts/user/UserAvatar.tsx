// import { headers } from 'next/headers';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import { SyntheticEvent } from 'react';
import Avatar from '@mui/material/Avatar';
import { UserBaseType } from 'src/ui';

// function getUser() {
//   const headerInst = headers();
//   const authBearer = headerInst.get('authorization');

//   //TODO fetch API by bearer token
//   const data: UserProps = authBearer
//     ? {
//         nickname: 'Lanbery',
//         username: 'lanbery',
//         avatar: '/images/avatars/default.png',
//       }
//     : {
//         username: 'not login',
//         avatar: '/images/avatars/default.png',
//       };

//   return data;
// }

interface UserAvatarProps {
  user?: UserBaseType;
  handleDropdownOpen: (event: SyntheticEvent) => void;
}

const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
}));

const UserAvatar = (props: UserAvatarProps) => {
  const { handleDropdownOpen, user = {} } = props;
  // const user: UserProps = getUser() || {};

  const { username, nickname, avatar } = user;

  return (
    <Badge
      overlap="circular"
      onClick={handleDropdownOpen}
      sx={{ ml: 2, cursor: 'pointer' }}
      badgeContent={<BadgeContentSpan />}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Avatar
        alt={nickname || username}
        sx={{ width: 40, height: 40 }}
        onClick={handleDropdownOpen}
        src={avatar}
      />
    </Badge>
  );
};

export default UserAvatar;
