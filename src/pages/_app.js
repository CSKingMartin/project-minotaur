/* _app.js | https://github.com/zeit/next.js/#custom-app */
import App, { Container } from 'next/app';
import { PageShell, PageShell__header, PageShell__main, PageShell__footer } from '@atoms/PageShell';
import GlobalHeader from '@organisms/GlobalHeader';
import GlobalFooter from '@organisms/GlobalFooter';
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
        <PageShell>
          <PageShell__header>
            <GlobalHeader />
          </PageShell__header>
            <PageShell__main>
              <Wrapper>
                <Component {...pageProps} />
              </Wrapper>
            </PageShell__main>
          <PageShell__footer>
            <GlobalFooter />
          </PageShell__footer>
        </PageShell>
      </Container>
    )
  }
}

export default MyApp