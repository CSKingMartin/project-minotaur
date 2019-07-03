export const TableHeader = (props) => {
  const {
    className,
    children
  } = props;

  const stack = utilities.createClassStack([
    'Table__header',
    className
  ]);

  return (
    <th className={stack}>{children}</th>
  );
};

TableHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default TableHeader;
