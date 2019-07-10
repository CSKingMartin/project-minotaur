import TabsContext from './TabsContext'

export const Cell = (props) => {
  const {
    cellIndex,
    className,
    hoverHandler,
    onClick,
    children,
    panelFocused,
    labels,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Tabs__cell',
    className
  ]);

  const tabIndex = (props) = (
   props.panelFocused ? 0 : -1 
   )

  function handleArrowKey(event) {
      let currentCell = cellIndex;
      let getNew;
    switch(event.key) {
      case 'Enter' :
        return onClick();
      case 'ArrowLeft' :
        currentCell > 0 ? (currentCell -= 1) : (currentCell = labels.length -1)
        return getNew = (document.getElementById("cell-index-" + currentCell)).focus();
      case 'ArrowRight' :
        currentCell < labels.length -1 ? (currentCell += 1) : (currentCell = 0)
        return getNew = (document.getElementById("cell-index-" + currentCell)).focus();
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
      tabIndex={tabIndex}
      id={"cell-index-" + cellIndex}
      >
      <div className="Tabs_cell-has-focus">
        <span className="Tabs__cell-vertical-borders" />
        {children}
        <span className="Tabs__cell-horizontal-borders" />
      </div>
    </div>
  );
};

Cell.propTypes = {
  cellIndex: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  hoverHandler: PropTypes.func,
  labels: PropTypes.array,
  onClick: PropTypes.func,
  panelFocused: PropTypes.bool,
  tabIndex: PropTypes.number
};

export default Cell;
