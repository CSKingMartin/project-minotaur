import Expandable from '@molecules/Expandable';
import PanelMenu from './PanelMenu';

export const Dropdown = (props) => {
  const {
    className,
    heading,
    href,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'GlobalHeader__dropdown',
    className
  ]);

  const [isActive, toggle] = useState(false);

  const toggleRef = React.createRef();
  const drawerRef = React.createRef();

  const onLeave = (e) => {
    if ((e.relatedTarget.dataset
      && e.relatedTarget.dataset.hover !== (`${heading.toLowerCase()}NavHover`)
      && e.relatedTarget.dataset.hover !== 'Root')
      || e.relatedTarget === 'Close') {
      console.log(e.relatedTarget);
      toggle(false);
    }
  };

  return (
    <div className={stack} {...rest}>
      <div
        className="GlobalHeader__dropdown-toggle"
        onMouseEnter={() => toggle(true)}
        onMouseLeave={(e) => onLeave(e)}
        ref={toggleRef}
        data-hover={`${heading.toLowerCase()}NavHover`}
      >
        <a href={href}>{heading}</a>
      </div>
      <Expandable
        className="GlobalHeader__dropdown-drawer"
        toggleElement="none"
        forceExpand={isActive}
        closeHeight="0"
        onMouseLeave={(e) => onLeave(e)}
        ref={drawerRef}
        data-hover={`${heading.toLowerCase()}NavHover`}
      >
        {children}
      </Expandable>
    </div>
  );
};

Dropdown.propTypes = {
  heading: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node
};

Dropdown.defaultProps = {
  isActive: true
};

export default Dropdown;