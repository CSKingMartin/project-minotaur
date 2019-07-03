export const TableHead = (props) => {
  const {
    className,
    children
  } = props;

  const stack = utilities.createClassStack([
    'Table__head',
    className
  ]);

  return (
    <thead className={stack}>{children}</thead>
  );
};

TableHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default TableHead;
