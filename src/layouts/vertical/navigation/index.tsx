'use client';
import Box, { BoxProps } from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import { ReactNode, useRef, useState } from 'react';
import { NavCommonPropsType, VerticalNavItemsType } from 'src/ui';
import { hexToRGBA } from 'src/ui/helpers';
import PerfectScrollbar from 'react-perfect-scrollbar';
import VerticalNavHeader from './VerticalNavHeader';
import NavDrawerLayout from './NavDrawerLayout';
import List from '@mui/material/List';
import VerticalNavItems from '../VerticalNavItems';

interface NavigationProps extends NavCommonPropsType {
  navWidth: number;
  navVisible: boolean;
  setNavVisible: (visible: boolean) => void;
  children: ReactNode;
  verticalNavItems?: VerticalNavItemsType;
}

const StyledBoxForShadow = styled(Box)<BoxProps>({
  top: 50,
  left: -8,
  zIndex: 2,
  height: 75,
  display: 'none',
  position: 'absolute',
  pointerEvents: 'none',
  width: 'calc(100% + 15px)',
  '&.d-block': {
    display: 'block',
  },
});

const Navigation = (props: NavigationProps) => {
  const { hidden } = props;

  // ** States
  const [groupActive, setGroupActive] = useState<string[]>([]);
  const [currentActiveGroup, setCurrentActiveGroup] = useState<string[]>([]);
  // ** Ref
  const shadowRef = useRef(null);
  // ** Hooks
  const theme = useTheme();

  const handleInfiniteScroll = (ref: HTMLElement) => {
    if (ref) {
      //@ts-ignore
      ref._getBoundingClientRect = ref.getBoundingClientRect;

      ref.getBoundingClientRect = () => {
        //@ts-ignore
        const original = ref._getBoundingClientRect();
        return {
          ...original,
          height: Math.floor(original.height),
        };
      };
    }
  };

  const scrollMenu = (container: any) => {
    container = hidden ? container.target : container;

    if (shadowRef && container.scrollTop > 0) {
      //@ts-ignore
      if (!shadowRef.current.classList.contains('d-block')) {
        //@ts-ignore
        shadowRef.current.classList.add('d-block');
      }
    } else {
      //@ts-ignore
      shadowRef.current.classList.remove('d-block');
    }
  };

  const ScrollWrapper = hidden ? Box : PerfectScrollbar;

  return (
    <NavDrawerLayout {...props}>
      <VerticalNavHeader />
      <StyledBoxForShadow
        ref={shadowRef}
        sx={{
          background: `linear-gradient(${
            theme.palette.background.default
          } 40%,${hexToRGBA(
            theme.palette.background.default,
            0.1,
          )} 95%,${hexToRGBA(theme.palette.background.default, 0.05)})`,
        }}
      />

      {/* Nav Items */}
      <Box sx={{ height: '100%', position: 'relative', overflow: 'hidden' }}>
        {/* @ts-ignore */}
        <ScrollWrapper
          {...(hidden
            ? {
                onScroll: (container: any) => scrollMenu(container),
                sx: { height: '100%', overflowY: 'auto', overflowX: 'hidden' },
              }
            : {
                options: { wheelPropagation: false },
                onScrollY: (container: any) => scrollMenu(container),
                containerRef: (ref: any) => handleInfiniteScroll(ref),
              })}
        >
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <List
              className="nav-items"
              sx={{ transition: 'padding .25s ease', pr: 4.5 }}
            >
              <VerticalNavItems
                groupActive={groupActive}
                setGroupActive={setGroupActive}
                currentActiveGroup={currentActiveGroup}
                setCurrentActiveGroup={setCurrentActiveGroup}
                {...props}
              />
            </List>
          </Box>
        </ScrollWrapper>
      </Box>
    </NavDrawerLayout>
  );
};

export default Navigation;
