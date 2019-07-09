export const Section = (props) => {
  const {
    className,
    children,
    refs,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Tabs__section',
    className
  ]);

  return (
    <div className={stack} refs={refs} {...rest}>
      {children}
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  refs: PropTypes.instanceOf(Element)
};

export default Section;
