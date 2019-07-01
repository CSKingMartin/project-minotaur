export const Badge = (props) => {
  const {
    color,
    children,
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
  children: 'Please specify children for this element' // eslint-disable-line
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['blue', 'green', 'red', 'yellow', 'orange']),
  className: PropTypes.string
};

export default Badge;
