export const TableData = (props) => {
  const {
    className,
    children,
    dataHeading,
  } = props;

  const stack = utilities.createClassStack([
    'Table__data',
    className
  ]);

  return (
    <td className={stack} data-heading={dataHeading}>{children}</td>
  );
};

TableData.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  dataHeading: PropTypes.string
};

export default TableData;
