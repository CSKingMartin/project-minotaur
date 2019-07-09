import TabsContext from './TabsContext'

export function withTabContext(Component) {
    return function WrapperComponent(props) {
        return (
            <TabsContext.Consumer>
                {labelState => <Component {...props} context={labelState} />}
            </TabsContext.Consumer>
        );
    };
}
