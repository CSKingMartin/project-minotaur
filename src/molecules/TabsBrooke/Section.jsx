import Heading from '@atoms/Heading';

export const Section = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Tabs__section',
    className
  ]);

  return (
      <div className={stack} {...rest}>
        {children}
      </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
