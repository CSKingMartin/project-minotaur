import TableBody from './Body';
import TableData from './Data';
import TableHead from './Head';
import TableHeader from './Header';
import TableFoot from './Foot';
import TableRow from './Row';
import TableContext from './TableContext';

export const Table = (props) => {
  const {
    className,
    children,
    ...rest
  } = props;

  const stack = utilities.createClassStack([
    'Table',
    className
  ]);

  return (
    <div className={stack} {...rest}>
      <table className="Table__table">{children}</table>
    </div>
  );
};

Table.propTypes = {
  children: PropTypes.node
};

Table.Body = TableBody;
Table.Data = TableData;
Table.Head = TableHead;
Table.Header = TableHeader;
Table.Foot = TableFoot;
Table.Row = TableRow;

export default Table;
