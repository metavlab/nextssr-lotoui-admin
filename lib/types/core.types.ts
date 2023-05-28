import { EmotionCache } from '@emotion/cache';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

export type CustomAppProps = AppProps & {
  Component: NextPage;
  emotionCache: EmotionCache;
};
