/* _document.js | https://github.com/zeit/next.js/#custom-document */

import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { MinotaurPageShell, MinotaurPageShell__main, MinotaurPageShell__header, MinotaurPageShell__footer } from '@atoms/MinotaurPageShell/MinotaurPageShell';

export default class extends Document {
  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <MinotaurPageShell>
            <MinotaurPageShell__header>
              This is in the header
            </MinotaurPageShell__header>
              <MinotaurPageShell__main>
                <Main />
              </MinotaurPageShell__main>
            <MinotaurPageShell__footer>
              This is in the footer
            </MinotaurPageShell__footer>
            <NextScript />
          </MinotaurPageShell>
        </body>
      </html>
    )
  }
}


