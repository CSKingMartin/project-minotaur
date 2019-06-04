import Expandable from '@molecules/Expandable';
import PanelMenu from './PanelMenu';

export const Dropdown = (props) => {
  const {
    className,
    heading,
    href,
    children,
    isActive,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'GlobalHeader__dropdown',
    className
  ]);

  return (
    <div className={stack} {...rest}>
      <div className="GlobalHeader__dropdown-toggle">
        <a href={href}>{heading}</a>
      </div>
      <Expandable
        className="GlobalHeader__dropdown-drawer"
        toggleElement="none"
        forceExpand={isActive}
        closeHeight="0">
        {children}
      </Expandable>
    </div>
  );
};

Dropdown.propTypes = {
  heading: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  children: PropTypes.node
};

Dropdown.defaultProps = {
  isActive: true
};

export default Dropdown;