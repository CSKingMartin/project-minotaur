export const Card = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Card', 
    className
  ]);

  return (
    <div className={stack} {...rest}>{children}</div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Card;
