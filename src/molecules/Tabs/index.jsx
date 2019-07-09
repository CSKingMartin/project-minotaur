import Content from './Content';
import Panel from './Panel';
import Section from './Section';
import TabsContext from './TabsContext'

export const Tabs = (props) => {

  const {
    className,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Tabs',
    className
  ]);

  const [labelState, changeLabelState] = useState(0);

  return (
    <div className={stack} {...rest}>
        <TabsContext.Provider value={{labelState, changeLabelState}}>
        {children}
      </TabsContext.Provider>
    </div>
  );
};

Tabs.Content = Content;
Tabs.Panel = Panel;
Tabs.Section = Section;

export default Tabs;
