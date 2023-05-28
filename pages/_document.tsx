import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { createEmotionCache } from 'src/ui/cache/create-emotion-cache';
import { Children } from 'react';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage;

    //TODO run the React rendering logic synchronously
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          (
            <App
              {...props}
              //@ts-ignore
              emotionCache={cache}
            />
          ),
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);
    const emotionStyles = extractCriticalToChunks(initialProps.html);

    const emotionStyleTags = emotionStyles.styles.map((style) => {
      return (
        <style
          key={style.key}
          dangerouslySetInnerHTML={{ __html: style.css }}
          data-emotion={`${style.key} ${style.ids.join(' ')}`}
        />
      );
    });

    return {
      ...initialProps,
      styles: [...Children.toArray(initialProps.styles), ...emotionStyleTags],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/logo.png" rel="icon" sizes="16x16" type="image/png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
