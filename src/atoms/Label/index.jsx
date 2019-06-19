export const Label = (props) => {
  const {
    className,
    htmlFor,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Label',
    className
  ]);

  return (
    <label className={stack} htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  );
};

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  htmlFor: PropTypes.string
};

export default Label;
