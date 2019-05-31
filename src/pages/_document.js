/* _document.js | https://github.com/zeit/next.js/#custom-document */
import '../bundle.css.jsx';
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { PageShell, PageShell__main, PageShell__header, PageShell__footer } from '@atoms/PageShell/PageShell';
import GlobalFooter from '@organisms/GlobalFooter';
import GlobalHeader from '@organisms/GlobalHeader';
import Rhythm from '@atoms/Rhythm';
import Wrapper from '@atoms/Wrapper';

export default class extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.png" />
          <link rel="preload" href="/static/fonts/Montserrat-Regular.tff" as="font">
        </Head>
        <body>
          <PageShell>
            <PageShell__header>
              <GlobalHeader />
            </PageShell__header>
              <PageShell__main>
                <Wrapper>
                  <Main />
                </Wrapper>
              </PageShell__main>
            <PageShell__footer>
              <GlobalFooter />
            </PageShell__footer>
            <NextScript />
          </PageShell>
        </body>
      </html>
    )
  }
}


