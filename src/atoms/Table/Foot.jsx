export const TableFoot = (props) => {
  const {
    className,
    children
  } = props;

  const stack = utilities.createClassStack([
    'Table__foot',
    className
  ]);

  return (
    <tfoot className={stack}>{children}</tfoot>
  );
};

TableFoot.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default TableFoot;
