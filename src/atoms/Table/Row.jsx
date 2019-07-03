export const TableRow = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Table__row',
    className
  ]);

  return (
    <tr className={stack} {...rest}>{children}</tr>
  );
};

TableRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default TableRow;
