export const Nup = (props) => {
  const {
    variant,
    className,
    children
  } = props;

  const stack = utilities.createClassStack([
    'Nup',
    `Nup--${variant}`,
    'Nup--gutter-default',
    className
  ]);

  return (
    <div className={stack}>{children}</div>
  );
};

Nup.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

export default Nup;
