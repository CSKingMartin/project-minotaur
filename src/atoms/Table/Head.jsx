import ReactDOM from 'react-dom';

export const TableHead = (props) => {
  const {
    className,
    children
  } = props;

  const stack = utilities.createClassStack([
    'Table__head',
    className
  ]);

  const [visibility, toggleVisibility] = useState(false);

  const changeVisibility = () => {
    toggleVisibility(!visibility);
  }

  return (
    <thead onClick={changeVisibility} className={stack}>{children}</thead>
  );
};

TableHead.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default TableHead;
