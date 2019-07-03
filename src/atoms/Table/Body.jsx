export const TableBody = (props) => {
  const {
    className,
    children
  } = props;

  const stack = utilities.createClassStack([
    'Table__body',
    className
  ]);

  return (
    <tbody className={stack}>{children}</tbody>
  );
};

TableBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

export default TableBody;
