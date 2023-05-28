import { SvgIconProps } from '@mui/material/SvgIcon';
import { ReactNode } from 'react';

interface NavIconProps {
  iconProps?: SvgIconProps;
  icon: string | ReactNode;
}

const NavMetaIcon = (props: NavIconProps) => {
  const { icon, iconProps } = props;

  const IconTag = icon;

  const styles = {
    fontSize: '1rem',
  };

  //@ts-ignore
  return <IconTag {...iconProps} styles={{ ...styles }} />;
};

export default NavMetaIcon;
