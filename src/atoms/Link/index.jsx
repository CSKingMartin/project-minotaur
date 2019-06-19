export const Link = (props) => {
  const {
    href,
    className,
    variant,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Link',
    `Link--${variant}`,
    className
  ]);

  return (
    <a className={stack} href={href} {...rest}>{children}</a>
  );
};

Link.defaultProps = {
  variant: 'default'
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default']),
  children: PropTypes.node
};

export default Link;
