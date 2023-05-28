'use client';

import { useState } from 'react';
import { LayoutProps } from 'src/ui';
import themeConfig from 'src/config/theme.config';
import Footer from '../footer';
import {
  ContentWrapper,
  MainContentWrapper,
  VerticalLayoutWrapper,
} from './vertical-wrappers';
import NavBarLayout from './topbar/NavBarLayout';
import Navigation from './navigation';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import ScrollToTop from 'src/ui/components/ScrollToTop';
import Fab from '@mui/material/Fab';

const VerticalLayout = (props: LayoutProps) => {
  const {
    settings,
    children,
    hidden,
    saveSettings,
    appBarContent,
    scrollToTop,
  } = props;

  const { contentWidth } = settings;
  const navWidth = themeConfig.navigationSize;

  //states
  const [navVisible, setNavVisible] = useState<boolean>(false);

  const toggleNavVisibility = () => setNavVisible(!navVisible);

  return (
    <>
      <VerticalLayoutWrapper className="layout-wrapper" key="left">
        {/** Navigation Menus */}
        <Navigation
          navWidth={navWidth}
          navVisible={navVisible}
          setNavVisible={setNavVisible}
          toggleNavVisibility={toggleNavVisibility}
          {...props}
        />
        <MainContentWrapper className="layout-content-wrapper">
          <NavBarLayout
            toggleNavVisibility={toggleNavVisibility}
            {...{ settings, saveSettings, hidden }}
            appBarContent={appBarContent}
          />
          {/* Content */}
          <ContentWrapper
            className="layout-page-content"
            sx={{
              ...(contentWidth === 'boxed' && {
                mx: 'auto',
                '@media (min-width:1440px)': { maxWidth: 1440 },
                '@media (min-width:1200px)': { maxWidth: '100%' },
              }),
            }}
          >
            {children}
          </ContentWrapper>

          {/* Footer Component */}
          <Footer {...props} />
        </MainContentWrapper>
      </VerticalLayoutWrapper>

      {/* Scroll to top button */}
      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className="mui-fixed">
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <ArrowCircleUpOutlinedIcon sx={{ fontSize: 48 }} />
          </Fab>
        </ScrollToTop>
      )}
    </>
  );
};
export default VerticalLayout;
