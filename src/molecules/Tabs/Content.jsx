import TabsContext from './TabsContext'

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

  const childArray = React.Children.toArray(children);

  return (
    <div className={stack} {...rest}>
      <TabsContext.Consumer>
        {
          ({labelState, changeLabelState}) => {
            return childArray[labelState]
          }
        }
      </TabsContext.Consumer>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default Content;
