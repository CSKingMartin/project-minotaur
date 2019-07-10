export const TableColumn = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Table__column',
    className
  ]);

  return (
    <tc className={stack} {...rest}>{children}</tc>
  );
};

TableColumn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default TableColumn;
