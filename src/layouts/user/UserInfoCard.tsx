import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { UserBaseType } from 'src/ui';

interface Props extends UserBaseType {
  hidden?: boolean;
}

const BadgeContentSpan = styled('span')(({ theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: theme.palette.success.main,
  boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
}));

const UserInfoCard = (props: Props) => {
  const {
    username,
    nickname,
    avatar = '/images/avatars/default.png',
    role,
  } = props;
  return (
    <Box sx={{ pt: 2, pb: 3, px: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Badge
          overlap="circular"
          badgeContent={<BadgeContentSpan />}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Avatar
            alt={nickname || username}
            src={avatar}
            sx={{ width: '2.5rem', height: '2.5rem' }}
          />
        </Badge>
        <Box
          sx={{
            display: 'flex',
            marginLeft: 3,
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>
            {nickname || username}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: '0.8rem', color: 'text.disabled' }}
          >
            {role ??
              (Array.isArray(role) ? (role as Array<string>).join(',') : role)}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default UserInfoCard;
