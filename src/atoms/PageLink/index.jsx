import Link from 'next/link';

const PageLink = (props) => {
  const {
    className,
    label,
    href
  } = props;

  const stack = utilities.createClassStack([
    'PageLink',
    className
  ]);

  return (
    /* eslint-disable */
    <span className={stack}><Link href={href}><a>{label}</a></Link></span>
    /* eslint-enable */
  );
};

PageLink.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  href: PropTypes.string.isRequired
};

export default PageLink;
