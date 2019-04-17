import '../bundle.css';
import NextLink from 'next/link'
import PageShell from '../atoms/PageShell/PageShell.jsx';

export const IndexPage = () => {
  return (
    <PageShell>
      Hello world
      <a href="src/atoms/PageShell/PageShell.example.mdx">Here</a>
    </PageShell>
  );
};

export default IndexPage;
