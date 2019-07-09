export const Cell = (props) => {
  const {
    className,
    hoverHandler,
    onClick,
    onTab,
    children,
    panelFocused,
    thisIndex,
    isActive,
    marker,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Tabs__cell',
    className
  ]);

  const tabIndex = (props) = (
   props.panelFocused ? 0 : -1 
   )

  // const thisIndexNum = props.thisIndex;

  function handleTabKey(event) {
      let currentCell = marker;
      let getNew;
      let getActive;
      let newActiveCell;
    switch(event.key) {
      case 'Enter' :
       return onClick();

      case 'ArrowLeft' :
        if (currentCell > 0) {
          newActiveCell = currentCell -1;
         }  
        if (currentCell === 0) {
          newActiveCell = 3
        }
        console.log(getActive)
        getNew = (document.getElementById("cell-index-"+ newActiveCell)).focus()
        return getNew 

      case 'ArrowRight' :
        if (currentCell < 3) {
          newActiveCell = currentCell +1;
         }  
        if (currentCell === 3) {
            newActiveCell = 0
        }
        getNew = (document.getElementById("cell-index-"+ newActiveCell)).focus()
        return getNew 
      default:  
      return;
    }
  }


  return (
    <div
      className={stack}
      id={"cell-index-" + thisIndex}
      onClick={() => { onClick() }}
      onKeyDown={handleTabKey}
      onMouseEnter={() => hoverHandler()}
      role="tab"
      tabIndex={tabIndex}
    >
      <span className="Tabs__cell-vertical-borders" />
      {children}
      <span className="Tabs__cell-horizontal-borders" />
    </div>
  );
};

Cell.propTypes = {
  className: PropTypes.string,
  hoverHandler: PropTypes.func,
  onClick: PropTypes.func,
  onTab: PropTypes.func,
  isActive: PropTypes.number,
  children: PropTypes.node
};

export default Cell;
