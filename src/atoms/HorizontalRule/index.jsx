export const HorizontalRule = (props) => {
  const {
    className,
    variant
  } = props;

  const stack = utilities.createClassStack([
    'HorizontalRule',
    `HorizontalRule--${variant}`,
    className
  ]);

  return (
    <hr className={stack} />
  );
};

HorizontalRule.defaultProps = {
  variant: 'default'
};

HorizontalRule.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default'])
};

export default HorizontalRule;
