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

  return (
    <div
      className={stack}
      onClick={() => {
        onClick();
      }}
      onMouseEnter={() => hoverHandler()}
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
