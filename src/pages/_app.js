/* _app.js | https://github.com/zeit/next.js/#custom-app */
import App, { Container } from 'next/app';
import '../bundle.css.jsx';
import Wrapper from '@atoms/Wrapper';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp