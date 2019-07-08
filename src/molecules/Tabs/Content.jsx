export const Content = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Tabs__content',
    className
  ]);

  return (
    <div className={stack} {...rest} role="tabpanel">
      {children}
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Content;
