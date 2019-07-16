import Expandable from '@molecules/Expandable';

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
    <Expandable
      className={stack}
      closeHeight="0"
      forceExpand={true}
      {...rest}
    >
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
    </Expandable>
  );
};

export default Content;
