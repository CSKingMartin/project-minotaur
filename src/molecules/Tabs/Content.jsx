const Section = (props) => {
  const {
    children,
    className,
    index,
    ...rest
  } = props;

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export const Content = (props) => {
  const {
    className,
    activeIndex,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Tabs__content',
    className
  ]);

  return (
    <div className={stack} >
      {React.Children.map(children, (child, index) => {
        return (
          <Section
            className={
              index === activeIndex ?
                'Tabs__section is-active' :
                'Tabs__section'
            }
            key={index}
            index={index}>
            {child.props.children}
          </Section>
        );
      })}
    </div>
  );
};

export default Content;
