/* _document.js | https://github.com/zeit/next.js/#custom-document */
import '../bundle.css.jsx';
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { PageShell, PageShell__main, PageShell__header, PageShell__footer } from '@atoms/PageShell/PageShell';

export default class extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.png" />
        </Head>
        <body>
          <PageShell>
            <PageShell__header>
              This is in the header
            </PageShell__header>
              <PageShell__main>
                <Main />
              </PageShell__main>
            <PageShell__footer>
              This is in the footer
            </PageShell__footer>
            <NextScript />
          </PageShell>
        </body>
      </html>
    )
  }
}


