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
    <hr />
  )
};

export default HorizontalRule;
