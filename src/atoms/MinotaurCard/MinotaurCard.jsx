export const MinotaurCard = (props) => {
  const {
    className,
    children
  } = props;

  const stack = utilities.createClassStack([
    'MinotaurCard', 
    className
  ]);

  return (
    <div className={stack}>{children}</div>
  );
};

MinotaurCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default MinotaurCard;
