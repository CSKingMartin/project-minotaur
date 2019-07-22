export const Badge = (props) => {
  const {
    color,
    children,
    variant,
    className,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Badge',
    `Badge--${color}`,
    `Badge--${variant}`,
    className
  ]);

  return (
    <div className={stack} {...rest}>
      {children}
    </div>
  );
};

Badge.defaultProps = {
  color: 'blue',
  children: 'Please specify children for this element' // eslint-disable-line
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'inline']),
  color: PropTypes.oneOf(['blue', 'green', 'red', 'yellow', 'orange']),
  className: PropTypes.string
};

export default Badge;
