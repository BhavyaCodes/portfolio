import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import { GA_TRACKING_ID } from "../lib/gtag";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content="#161625" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
          {/* <!-- Primary Meta Tags --> */}
          <title>Bhavya Tomar</title>
          <meta name="title" content="Bhavya Tomar" />
          <meta
            name="description"
            content="My personal website and portfolio"
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`}
          />
          <meta property="og:title" content="Bhavya Tomar" />
          <meta
            property="og:description"
            content="My personal website and portfolio"
          />
          <meta
            property="og:image"
            content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/assets/programmer-meta.png`}
          />

          {/* <!-- Twitter --> */}
          <meta
            property="twitter:card"
            content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/assets/programmer-meta.png`}
          />
          <meta
            property="twitter:url"
            content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}`}
          />
          <meta property="twitter:title" content="Bhavya Tomar" />
          <meta
            property="twitter:description"
            content="My personal website and portfolio"
          />
          <meta
            property="twitter:image"
            content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/assets/programmer-meta.png`}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
