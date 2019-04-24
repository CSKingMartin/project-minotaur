export const MinotaurNup = (props) => {
  const {
    variant,
    className,
    children
  } = props;

  const stack = utilities.createClassStack([
    'MinotaurNup',
    `MinotaurNup--${variant}`,
    'MinotaurNup--gutter-default',
    className
  ]);

  return (
    <div className={stack}>{children}</div>
  );
};

MinotaurNup.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

export default MinotaurNup;
