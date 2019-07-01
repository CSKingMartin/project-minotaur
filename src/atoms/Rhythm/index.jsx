export const Rhythm = (props) => {
  const {
    className,
    size,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Rhythm',
    `Rhythm--${size}`,
    className
  ]);

  return (
    <div className={stack} {...rest}>
      {children}
    </div>
  );
};


Rhythm.defaultProps = {
  size: 'default'
};

Rhythm.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['default', 'large']),
  children: PropTypes.node
};

export default Rhythm;
