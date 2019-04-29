export const MinotaurCard = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'MinotaurCard', 
    className
  ]);

  return (
    <div className={stack} {...rest}>{children}</div>
  );
};

MinotaurCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default MinotaurCard;
