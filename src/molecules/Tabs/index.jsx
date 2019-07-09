import Content from './Content';
import Panel from './Panel';
import TabsContext from './TabsContext'

export const Tabs = (props) => {
  const {
    className,
    children,
    labels,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Tabs',
    className
  ]);

  return (
    <div className={stack} {...rest}>
      <TabsContext.Provider value={labels}>
        {children}
      </TabsContext.Provider>
    </div>
  );
};

Tabs.Content = Content;
Tabs.Panel = Panel;
Tabs.Section = Content;

export default Tabs;
