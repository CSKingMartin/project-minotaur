import TabsContext from './TabsContext'

export function withTabContext(Component) {
  return function WrapperComponent(props) {
    return (
      <TabsContext.Consumer>
        {context => <Component {...props} context={context} />}
      </TabsContext.Consumer>
    );
  };
}
