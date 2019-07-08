export const Cell = (props) => {
  const {
    className,
    hoverHandler,
    onClick,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Tabs__cell',
    className
  ]);

  const handleTabKey = (event) => {
    if (event.charCode === 13 ) {
      props.onClick();
    }
  }

  return (
    <div
      className={stack}
      onClick={() => {
        onClick();
      }}
      onKeyPress={handleTabKey}
      onMouseEnter={() => hoverHandler()}
      role="tab"
      tabIndex={0}
    
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
  children: PropTypes.node
};

export default Cell;
