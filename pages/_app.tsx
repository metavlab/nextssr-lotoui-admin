import { CustomAppProps } from '@lib/types';
import {
  SettingsConsumer,
  SettingsProvider,
} from 'src/context/settings.context';
import DefaultLayout from 'src/layouts/DefaultLayout';
import { createEmotionCache } from 'src/ui/cache/create-emotion-cache';
import ThemeComponent from 'src/ui/theme/ThemeComponent';
import { CacheProvider } from '@emotion/react';

import 'src/styles/main.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { Inter } from 'next/font/google';
const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

const clientSideEmotionCache = createEmotionCache();
export default function ClientApp(props: CustomAppProps) {
  const {
    pageProps,
    Component: CustomComponent,
    emotionCache = clientSideEmotionCache,
  } = props;
  const getLayout =
    CustomComponent.getLayout ??
    ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <CacheProvider value={emotionCache}>
      <SettingsProvider>
        <SettingsConsumer>
          {({ settings }) => {
            return (
              <ThemeComponent settings={settings}>
                {getLayout(
                  <CustomComponent
                    {...pageProps}
                    className={inter.className}
                  />,
                )}
              </ThemeComponent>
            );
          }}
        </SettingsConsumer>
      </SettingsProvider>
    </CacheProvider>
  );
}
