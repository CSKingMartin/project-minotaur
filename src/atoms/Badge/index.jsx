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
  children: 'No children provided!'
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default']),
  color: PropTypes.oneOf(['blue', 'green', 'red', 'yellow', 'orange']),
  className: PropTypes.string
};

export default Badge;
