export const Icon = (props) => {
  const {
    name,
    className,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Icon',
    className
  ]);

  return (
    <svg className={stack} {...rest}>
      <use xlinkHref={`#${name}`} />
    </svg>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string
};

export default Icon;
