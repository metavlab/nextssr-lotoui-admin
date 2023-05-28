import HomeOutlined from '@mui/icons-material/HomeOutlined';
import { VerticalNavItemsType } from 'src/ui';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';

const NavigationItems = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      path: '/',
      icon: HomeOutlined,
    },
    {
      label: 'Accounts',
    },
    {
      title: 'Profile',
      path: '/account/profile',
      icon: Person2OutlinedIcon,
    },
    {
      title: 'Settings',
      path: '/account/settings',
      icon: SettingsOutlinedIcon,
    },
    {
      label: 'System',
    },
    {
      title: 'Role',
      path: '/system/role',
      icon: PeopleAltOutlinedIcon,
    },
    {
      title: 'User',
      path: '/system/user',
      icon: AccessibilityOutlinedIcon,
    },
    {
      title: 'authorize',
      path: '/system/auth',
      icon: SecurityOutlinedIcon,
    },
    {
      label: 'Business',
    },
  ];
};

export default NavigationItems;
