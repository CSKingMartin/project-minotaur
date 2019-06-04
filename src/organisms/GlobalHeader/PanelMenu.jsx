import Card from '@atoms/Card';
import Nup from '@atoms/Nup';

const Sidebar = ({children}) => (
  <div className="GlobalHeader__panel-menu-sidebar">
    {children}
  </div>
);

const Main = ({children}) => (
  <Nup variant="three" className="GlobalHeader__panel-menu-main">
    {children}
  </Nup>
);

export const PanelMenu = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'GlobalHeader__panel-menu',
    className
  ]);

  return (
    <Card className={stack} {...rest}>
      {children}
    </Card>
  );
};

PanelMenu.defaultProps = {
  children: PropTypes.node
};

PanelMenu.Main = Main;
PanelMenu.Sidebar = Sidebar;

export default PanelMenu;
