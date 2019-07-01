export const TableData = (props) => {
  const {
    className,
    children
  } = props;

  const stack = utilities.createClassStack([
    'Table__data',
    className
  ]);

  return (
    <td className={stack}>{children}</td>
  );
};

TableData.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default TableData;
