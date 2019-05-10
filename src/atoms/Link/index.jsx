export const Link = (props) => {
  const {
    href,
    children
  } = props;

  return (
    <a href={href}>{children}</a>
  );
};


Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Link;
