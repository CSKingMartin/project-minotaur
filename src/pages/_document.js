/* _document.js | https://github.com/zeit/next.js/#custom-document */
import '../bundle.css.jsx';
import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render () {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.png" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </html>
    )
  }
}

export default CustomDocument;
