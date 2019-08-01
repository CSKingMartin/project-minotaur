/* _app.js | https://github.com/zeit/next.js/#custom-app */
import App, { Container } from 'next/app';
import {
  PageShell,
  PageShell__header,
  PageShell__main,
  PageShell__footer
} from '@atoms/PageShell';
import GlobalHeader from '@organisms/GlobalHeader';
import GlobalFooter from '@organisms/GlobalFooter';
import '../bundle.css.jsx';
import '../bundle.js';
import svg from '@static/svgs/svg/bundle.svg';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    const generateSvgSprite = () => {
      const obj = { __html: svg };
      return obj;
    };

    return (
      <Container>
        <div className="is-hidden" dangerouslySetInnerHTML={generateSvgSprite()} />
        <PageShell>
          <PageShell__header>
            <GlobalHeader />
          </PageShell__header>
          <PageShell__main>
            <Component {...pageProps} />
          </PageShell__main>
          <PageShell__footer>
            <GlobalFooter />
          </PageShell__footer>
        </PageShell>
      </Container>
    );
  }
}

export default MyApp;
