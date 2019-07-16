import TabsContext from './TabsContext'
import {useRef} from 'react';

export const Cell = (props) => {
  const {
    children,
    className,
    hoverHandler,
    labels,
    onClick,
    panelFocused,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Tabs__cell',
    className
  ]);

  const tabIndex = (props) = (
   props.panelFocused ? 0 : -1 
   );

  let cellRef = useRef();

  function handleArrowKey(event) {
    switch(event.key) {
      case 'Enter' :
        return onClick();
      case 'ArrowLeft' :
        return cellRef.current.previousElementSibling === null ? cellRef.current.focus() : cellRef.current.previousElementSibling.focus();
      case 'ArrowRight' :
        return cellRef.current.nextElementSibling === null ? cellRef.current.focus() : cellRef.current.nextElementSibling.focus();
      default:  
        return;
    }
  }

  function handleTabKey(){
    if(event.key === 'Tab'){
      onClick();
    }
  }

  return (
    <div
      className={stack}
      onClick={() => { onClick() }}
      onKeyDown={handleArrowKey}
      onKeyUp={handleTabKey}
      onMouseEnter={() => hoverHandler()}
      ref={cellRef}
      role="tab"
      tabIndex={tabIndex}
    >
      <div className="Tabs_cell">
        <span className="Tabs__cell-vertical-borders" />
        {children}
        <span className="Tabs__cell-horizontal-borders" />
      </div>
    </div>
  );
};

Cell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hoverHandler: PropTypes.func,
  labels: PropTypes.array,
  onClick: PropTypes.func,
  panelFocused: PropTypes.bool,
  tabIndex: PropTypes.number
};

export default Cell;
