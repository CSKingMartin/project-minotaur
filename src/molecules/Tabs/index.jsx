import Content from './Content';
import Panel from './Panel';

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

  return (
    <div className={stack} {...rest}>
      {children}
    </div>
  );
};

Tabs.Content = Content;
Tabs.Panel = Panel;
Tabs.Section = Content;

export default Tabs;