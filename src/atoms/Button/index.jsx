export const Button = (props) => {
  const {
    tagName,
    className,
    variant,
    href,
    disabled,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Button',
    `Button--${variant}`,
    href && 'Button--link',
    className
  ]);

  const Tag = href ? 'a' : tagName;

  return (
    <Tag className={stack} href={href} {...rest}>{children}</Tag>
  );
};

Button.defaultProps = {
  tagName: 'button',
  variant: 'default'
};

Button.propTypes = {
  tagName: PropTypes.oneOf(['button', 'a']),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'secondary']),
  href: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node
};

export default Button;
