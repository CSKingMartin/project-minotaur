import ReactResizeDetector from 'react-resize-detector';
import Button from '@atoms/Button';

export const Expandable = (props) => {
  const {
    className,
    startOpen, // startOpen ? Yes or no?
    toggleElement,
    forwardedRef,
    closeHeight,
    forceExpand,
    children,
    ...rest
  } = props;

  /* state objects */
  const [isExpanded, toggle] = useState(startOpen); // const isExpanded; | toggle(); | useState => initial value
  const [height, updateHeight] = useState();

  const inner = React.createRef();

  // something that gets run everytime props are updated
  useEffect(() => {
    updateHeight(inner.current.offsetHeight);
  });

  const defaultToggle = (
    <Button className="Expandable__toggle" onClick={() => toggle(!isExpanded)}>
      Toggle
    </Button>
  );

  const expandableToggle = () => {
    if (toggleElement && toggleElement !== 'none') {
      const toggleStack = utilities.createClassStack([
        'Expandable__toggle',
        toggleElement.props.className
      ]);

      return (
        /* eslint-disable */
        <React.Fragment>
          {React.cloneElement(toggleElement, { className: toggleStack, onClick: () => toggle(!isExpanded) })}
        </React.Fragment>
        /* eslint-enable */
      );
    }

    if (!toggleElement === 'none') {
      return defaultToggle;
    }

    return '';
  };

  const onWidthChange = () => updateHeight(inner.current.offsetHeight);

  const stack = utilities.createClassStack([
    'Expandable',
    isExpanded || (forceExpand && 'is-expanded'),
    className
  ]);

  const styles = (forceExpand || isExpanded) ? { height } : { height: closeHeight };

  return (
    <div ref={forwardedRef} className={stack} {...rest}>
      <ReactResizeDetector className="Expandable__resizer" handleWidth onResize={() => onWidthChange()} />
      <div
        className="Expandable__wrapper"
        style={styles}
      >
        <div ref={inner} className="Expandable__inner">
          {children}
        </div>
      </div>
      {toggleElement !== 'none' && expandableToggle()}
    </div>
  );
};

Expandable.defaultProps = {
  startOpen: false, 
  closeHeight: '1rem'
};

Expandable.propTypes = {
  className: PropTypes.string,
  startOpen: PropTypes.bool,
  closeHeight: PropTypes.string,
  forceExpand: PropTypes.bool,
  forwardedRef: PropTypes.object,
  toggleElement: PropTypes.node,
  children: PropTypes.node
};

export default Expandable;
